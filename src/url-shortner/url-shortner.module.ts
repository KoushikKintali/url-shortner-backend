import { Module } from '@nestjs/common';
import { UrlShortnerController } from './url-shortner.controller';
import { UrlShortnerService } from './url-shortner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortUrlRepository } from '../db/repository/short-url.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShortUrlRepository])],
  providers: [UrlShortnerService],
  controllers: [UrlShortnerController],
})
export class UrlShortnerModule {}
