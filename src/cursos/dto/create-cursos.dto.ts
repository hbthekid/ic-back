import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';

export class CreateCursoDto {

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    año: string;

    @IsNotEmpty()
    semestre: string;

    @IsNotEmpty()
    sede: string
}