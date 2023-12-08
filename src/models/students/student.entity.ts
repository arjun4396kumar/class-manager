import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { Classroom } from '../classroom/classroom.entity';

  
  /**
   *
   */
  @Entity()
  export class Student {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    first_name:string

    @Column()
    last_name:string

    @Column({unique:true})
    email:string

    @Column()
    phone:string

    @Column()
    address:string

    @ManyToOne(()=> Classroom,(classroom) => classroom.id)
    classroom:Classroom

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
  }
  