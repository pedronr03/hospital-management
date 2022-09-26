import { Gender } from '@prisma/client';
import { IsEnum, IsISO8601, IsString, MinLength } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @MinLength(10)
  fullName: string;

  @IsISO8601()
  dateOfBirth: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @MinLength(8)
  address: string;
}
