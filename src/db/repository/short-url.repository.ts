import { EntityRepository, Repository } from 'typeorm';
import { ShortURL } from '../entity/short-url.entity';
import { ShortUrlDto } from '../../url-shortner/dto/short-url.dto';

@EntityRepository(ShortURL)
export class ShortUrlRepository extends Repository<ShortURL> {
  createShortURL(shortURLDto: ShortUrlDto, url: string) {
    const shortURL = new ShortURL();

    shortURL.longURL = shortURLDto.longURL;
    shortURL.shortURL = url;
    shortURL.expiryDate = shortURLDto.expiryDate;
    shortURL.enableLogging = shortURLDto.enableLogging;
    shortURL.enableCustomization = shortURLDto.enableCustomization;
    shortURL.enablePassword = shortURLDto.enablePassword;
    shortURL.password = shortURLDto.password;

    return this.save(shortURL);
  }
}
