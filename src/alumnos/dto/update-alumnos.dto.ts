import {
    IsEmail,
    IsOptional,
} from 'class-validator';

export class UpdateAlumnoDto {
    @IsOptional()
    nombre: string;

    @IsOptional()
    apellido: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    direccion: string;

    @IsOptional()
    edad: string
}