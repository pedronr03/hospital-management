import { PrismaService } from './../prisma/prisma.service';
import { DoctorsRepository } from './repositories/doctors.repository';
import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorsRepository, PrismaService],
})
export class DoctorsModule {}
