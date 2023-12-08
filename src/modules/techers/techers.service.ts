import { Injectable } from '@nestjs/common';
import { Teacher } from 'src/models/teacher/teacher.entity';
import { DataSource, Repository } from 'typeorm';
import { TeacherCreateRequest, TeacherUpdateRequest } from './request/teacher.request';
@Injectable()
export class TeachersService {
    private teacher: Repository<Teacher>
    constructor(private dataSoruce: DataSource) {
        this.teacher = dataSoruce.getRepository(Teacher)
    }

    async create(data: TeacherCreateRequest) {
        const teacherData = this.teacher.create(data);
        return await this.teacher.save(teacherData)
    }

    async update(data: TeacherUpdateRequest, id: number) {
        return await this.teacher.createQueryBuilder().update(Teacher).set(data).where('id=:id', { id }).execute();
    }

    async find(id:number) {
        return await this.teacher.findOneBy({ id })
    }

    async findAll(){
        return await this.teacher.find()
    }
}
