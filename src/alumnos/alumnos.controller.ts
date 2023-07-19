import { Controller, Delete, Get, Post, Put, Body, Param, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumnos.dto';
import { UpdateAlumnoDto } from './dto/update-alumnos.dto';

@Controller('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) { }

    @Get()
    getAll() {
        return this.alumnosService.getAll()
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.alumnosService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() alumnoDto: CreateAlumnoDto) {
        return this.alumnosService.create(alumnoDto)
    }

    @Put(':id')
    update(@Param() id: string, @Body() alumno: UpdateAlumnoDto) {
        return this.alumnosService.update(id, alumno)
    }

    @Delete(':id')
    delete(@Param() id: number) {
        return this.alumnosService.delete(id)
    }

}
