import { Injectable } from '@nestjs/common';
import { Classroom } from 'src/models/classroom/classroom.entity';
import { Repository, DataSource } from 'typeorm'
import { ClassroomCreateRequest } from './request/classroom.request';
@Injectable()
export class ClassroomService {

    private classRepository: Repository<Classroom>
    constructor(private dataSource: DataSource) {
        this.classRepository = this.dataSource.getRepository(Classroom)
    }

    async create(reqData: any) {
        try {
            const data = this.classRepository.create(reqData)
            return this.classRepository.save(data)
        } catch (error) {
            console.log(error)
        }
    }

    async update(reqData: any, id: number) {
        return await this.classRepository.createQueryBuilder().update(Classroom).set(reqData).where('id=:id', { id }).execute()
    }

    async find(id: number) {
        return await this.classRepository.find({ where: { id: id }, relations: { created_by: true } })
    }
}
