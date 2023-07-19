import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnosEntity } from './entity/alumnos.entity';
import { CreateAlumnoDto } from './dto/create-alumnos.dto';
import { UpdateAlumnoDto } from './dto/update-alumnos.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {

    constructor(
        @InjectRepository(AlumnosEntity) private alumnosRepo: Repository<AlumnosEntity>
    ) { }

    async getAll() {
        return await this.alumnosRepo.find();
    }

    async getById(id: number) {
        return await this.alumnosRepo.findOneBy({ id })
    }

    async create(alumnoDto: CreateAlumnoDto) {
        const newAlumno = this.alumnosRepo.create(alumnoDto)
        return await this.alumnosRepo.save(newAlumno)
    }

    async update(id: string, alumno: UpdateAlumnoDto) {
        const updated = await this.alumnosRepo.update(id, alumno)
        return updated ? true : false
    }

    async delete(id: number) {
        const deleted = await this.alumnosRepo.delete(id)
        return deleted ? true : false
    }
}
