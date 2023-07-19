import {
    IsEmail,
    IsOptional,
} from 'class-validator';

export class UpdateCursosDto {
    @IsOptional()
    nombre: string;

    @IsOptional()
    año: string;

    @IsOptional()
    semestre: string;

    @IsOptional()
    sede: string
}