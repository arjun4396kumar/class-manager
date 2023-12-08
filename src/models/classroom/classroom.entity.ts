import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
  } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';

  
  /**
   *
   */
  @Entity()
  export class Classroom {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name:string
    
    @OneToOne(()=> Teacher,(teacher) => teacher.id)
    @JoinColumn({name:'id'})
    created_by:Teacher

    @Column()
    timing:Date

    @Column("integer",{array:true})
    number_of_students:number[]

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
  }
  