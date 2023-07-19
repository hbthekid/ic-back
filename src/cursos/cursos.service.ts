import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursosEntity } from './entity/cursos.entity';
import { AlumnosEntity } from 'src/alumnos/entity/alumnos.entity';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-cursos.dto';
import { UpdateCursosDto } from './dto/update-cursos.dto';

@Injectable()
export class CursosService {

    constructor(
        @InjectRepository(CursosEntity) private cursosRepo: Repository<CursosEntity>,
        @InjectRepository(AlumnosEntity) private alumnosRepo: Repository<AlumnosEntity>
    ) { }

    async getCursos() {
        return await this.cursosRepo.find()
    }

    async getCursoByCodigo(codigo: number) {
        return await this.cursosRepo.findOneBy({codigo})
    }

    async createCurso(createCursoDto: CreateCursoDto) {
        const newCurso = this.cursosRepo.create(createCursoDto)
        return await this.cursosRepo.save(newCurso)
    }

    async deleteCurso(id:number) {
        const deleted = await this.cursosRepo.delete(id)
        return deleted ? true : false    }

    async updateCurso(id: number, updateCursoDto: UpdateCursosDto) {
        const updated = await this.cursosRepo.update(id, updateCursoDto)
        return updated ? true : false
    }

    async addAlumnoToCurso(codigo: number, id: number) {
        const alumno = await this.alumnosRepo.findOneBy({id})
        const curso = await this.cursosRepo.findOneBy({codigo})
        curso.alumnos = [alumno];
        await this.cursosRepo.save(curso)
        return curso
    }

    async getAlumnosFromCurso(codigo:number){
        const {alumnos} = await this.cursosRepo.findOne({
            where:{codigo},
            relations:['alumnos']
        })
        return alumnos
    }

}
