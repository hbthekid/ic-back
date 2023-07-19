import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosEntity } from './entity/alumnos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlumnosEntity])
  ],
  providers: [
    AlumnosService
  ],
  controllers: [AlumnosController]
})
export class AlumnosModule { }
