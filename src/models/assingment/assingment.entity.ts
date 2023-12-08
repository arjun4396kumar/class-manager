import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { Classroom } from '../classroom/classroom.entity';

  
  /**
   *
   */
  @Entity()
  export class Assignment {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    created_by:number

    @OneToOne(()=>Classroom,(classroom)=>classroom.id)
    classroom:Classroom

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
  }
  