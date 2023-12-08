import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { Classroom } from '../classroom/classroom.entity';
import { Notice } from '../notice/notice.entity';
import { Assignment } from '../assingment/assingment.entity';

  
  /**
   *
   */
  @Entity()
  export class Teacher {
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
    subject_expert:string

    @OneToOne(()=> Classroom,(classroom) => classroom.id)
    classroom:Classroom

    @ManyToOne(()=> Notice,(notice) => notice.id)
    notice:Notice

    @ManyToMany(()=> Assignment,(assignment) => assignment.id)
    assignment:Assignment

    @Column()
    user_type:number
    
    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

  }
  