import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  ValidationPipe,
} from '@nestjs/common';
import { ShortUrlDto } from './dto/short-url.dto';
import { UrlShortnerService } from './url-shortner.service';

@Controller()
export class UrlShortnerController {
  constructor(private urlShortnerService: UrlShortnerService) {}

  @Get('short-url')
  getShortUrls() {
    return this.urlShortnerService.getShortUrls();
  }

  @Get('/:pathParam')
  @Redirect('https://docs.nestjs.com', 302)
  redirectToLongUrl(@Param() data: string) {
    return this.urlShortnerService.redirectToLongUrl(data['pathParam']);
  }

  @Post('short-url')
  createURLShortner(@Body(ValidationPipe) shortURLDto: ShortUrlDto) {
    return this.urlShortnerService.createURLShortner(shortURLDto);
  }
}
