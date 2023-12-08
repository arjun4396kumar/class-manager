import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
  } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';
import { Classroom } from '../classroom/classroom.entity';

  
  /**
   *
   */
  @Entity()
  export class Notice {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    message:string

    @ManyToOne(()=> Teacher,(teacher)=> teacher.id)
    created_by:Teacher

    @ManyToOne(()=> Classroom, (classroom)=> classroom.id)
    classroom:Classroom

    @UpdateDateColumn()
    updated_at:Date

    @CreateDateColumn()
    created_at:Date
  }
  