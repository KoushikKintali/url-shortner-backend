import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ShortUrlDto } from './dto/short-url.dto';
import { ShortUrlRepository } from '../db/repository/short-url.repository';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlShortnerService {
  constructor(private shortURLRepository: ShortUrlRepository) {}

  async createURLShortner(shortURLDto: ShortUrlDto) {
    let shortUrl;

    const longURLData = await this.shortURLRepository.findOne({
      longURL: shortURLDto.longURL,
    });

    if (longURLData) {
      return longURLData;
    }

    if (shortURLDto.enableCustomization) {
      const url = await this.shortURLRepository.findOne({
        shortURL: shortURLDto.customizedURL,
      });

      if (url) {
        throw new UnprocessableEntityException('customized url already there');
      }
      shortUrl = url;
    } else {
      shortUrl = nanoid();
    }

    const result = await this.shortURLRepository.createShortURL(
      shortURLDto,
      shortUrl,
    );
    console.log('result', result);
    return result;
  }

  getShortUrls() {
    return this.shortURLRepository.find();
  }

  async redirectToLongUrl(pathParam: string) {
    const longURLData = await this.shortURLRepository.findOne({
      shortURL: pathParam,
    });
    if (!longURLData) {
      throw new UnprocessableEntityException(
        'No long url associated with given short url',
      );
    }

    if (new Date(longURLData.expiryDate).getTime() - new Date().getTime() < 0) {
      return {
        url: longURLData.longURL,
        statusCode: 400,
      };
    }

    return { url: longURLData.longURL };
  }
}
