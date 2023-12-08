import { Injectable } from '@nestjs/common';
import { Student } from 'src/models/students/student.entity';
import { Repository, DataSource } from 'typeorm'
import { StudentsCreateRequest, StudentsUpdateRequest } from './request/student.request';
@Injectable()
export class StudentsService {
    private studentRepository: Repository<Student>
    constructor(private dataSource: DataSource) {
        this.studentRepository = this.dataSource.getRepository(Student)
     }

     async create(data:StudentsCreateRequest){
        const student = this.studentRepository.create(data)
        return await this.studentRepository.save(student)
     }

     async find(id:number){
        return this.studentRepository.findOneBy({id})
     }

     async findAll(){
        return this.studentRepository.find()
     }

     async update(data:StudentsUpdateRequest, id:number){
        return await this.studentRepository.createQueryBuilder().update(Student).set(data).where('id=:id',{id}).execute();
     }
}
