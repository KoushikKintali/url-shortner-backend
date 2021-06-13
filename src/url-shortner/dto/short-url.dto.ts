import {
  IsBoolean,
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsString,
  IsUrl,
  ValidateIf,
} from 'class-validator';

export class ShortUrlDto {
  // @IsUrl()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  longURL: string;

  @IsDateString()
  @IsNotEmpty()
  expiryDate: Date;

  @IsBoolean()
  @IsNotEmpty()
  enableLogging: boolean;

  @IsBoolean()
  @IsNotEmpty()
  enableCustomization: boolean;

  @ValidateIf((x) => x.enableCustomization === true)
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  customizedURL: string;

  @IsBoolean()
  @IsNotEmpty()
  enablePassword: boolean;

  @ValidateIf((x) => x.enablePassword === true)
  @IsString()
  @IsNotEmpty()
  password: string;
}
