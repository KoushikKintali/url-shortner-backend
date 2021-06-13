import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortnerModule } from './url-shortner/url-shortner.module';
import { ShortUrlRepository } from './db/repository/short-url.repository';
import { ShortURL } from './db/entity/short-url.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'isilo.db.elephantsql.com',
      username: 'uvwpckiw',
      password: 'cU4Vl0zqytulXC8Mf7wksNxwmL4BXJG3',
      database: 'uvwpckiw',
      entities: [ShortURL],
      synchronize: false,
    }),
    // '/../../**/*.entity.{js,ts}'
    TypeOrmModule.forFeature([ShortUrlRepository]),
    UrlShortnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
