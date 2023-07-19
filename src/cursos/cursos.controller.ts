import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-cursos.dto';
import { UpdateCursosDto } from './dto/update-cursos.dto';
@Controller('cursos')
export class CursosController {
    constructor(private cursoService: CursosService) { }

    @Get()
    getAll() {
        return this.cursoService.getCursos()
    }

    @Post()
    create(@Body() cursosDto: CreateCursoDto) {
        return this.cursoService.createCurso(cursosDto)
    }

    @Get(':codigo')
    get(@Param('codigo') codigo: number) {
        return this.cursoService.getCursoByCodigo(codigo)
    }

    @Put(':codigo')
    update(@Param('codigo',ParseIntPipe) codigo: number, @Body() updateCursoDto: UpdateCursosDto) {
        return this.cursoService.updateCurso(codigo, updateCursoDto)
    }

    @Delete(':codigo')
    delete(@Param('codigo', ParseIntPipe) codigo: number) {
        return this.cursoService.deleteCurso(codigo)
    }

    @Get(':codigo/alumnos')
    getAlumnosFromCurso(@Param('codigo', ParseIntPipe) codigo: number){
        return this.cursoService.getAlumnosFromCurso(codigo)
    }

    @Put(':codigo/alumnos/:id')
    addAlumnoToCurso(@Param('codigo', ParseIntPipe) codigo: number, 
    @Param('id', ParseIntPipe) id: number,) {
        return this.cursoService.addAlumnoToCurso(codigo, id)
    }

}
