import {
    Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { CursosEntity } from 'src/cursos/entity/cursos.entity';

@Entity()
export class AlumnosEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @IsEmail()
    email: string;

    @Column()
    direccion: string;

    @Column()
    edad: string;

    @ManyToMany(() => CursosEntity, (cursos) => cursos.codigo, { cascade: true })
    cursos: CursosEntity[]

}