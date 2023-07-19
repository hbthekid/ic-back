import {
    Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany
} from 'typeorm';
import { AlumnosEntity } from 'src/alumnos/entity/alumnos.entity';

@Entity()
export class CursosEntity {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    nombre: string;

    @Column()
    año: string;

    @Column()
    semestre: string;

    @Column()
    sede: string;

    @ManyToMany(() => AlumnosEntity, (alumnos) => alumnos.cursos)
    @JoinTable({
        name:'cursos_alumnos',
        joinColumn:{
            name:'cursos_codigo'
        },
        inverseJoinColumn:{
            name:'alumnos_id'
        }
    })
    alumnos: AlumnosEntity[]
}