import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';

export class CreateAlumnoDto {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    direccion: string;

    @IsOptional()
    edad: string
}