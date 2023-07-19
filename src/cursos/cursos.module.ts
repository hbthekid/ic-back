import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosEntity } from './entity/cursos.entity';
import { AlumnosEntity } from 'src/alumnos/entity/alumnos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CursosEntity, AlumnosEntity])
  ],
  providers: [
    CursosService
  ],
  controllers: [CursosController]
})
export class CursosModule { }
