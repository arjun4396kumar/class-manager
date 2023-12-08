import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsCreateRequest, StudentsUpdateRequest } from './request/student.request';
import { ResponseInterface } from 'src/common/interface/Response/response.interface';

@Controller('student')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('create')
  async create(@Body() body: StudentsCreateRequest): Promise<ResponseInterface> {
    const response = await this.studentsService.create(body)
    return { status: 200, message: "", data: response }
  }

  @Patch('update/:id')
  async update(@Body() body: StudentsUpdateRequest, @Param('id') id: number): Promise<ResponseInterface> {
    const response = await this.studentsService.update(body, id)
    return { status: 200, message: "", data: response }
  }

  @Get('get')
  async findAll(): Promise<ResponseInterface> {
    const response = await this.studentsService.findAll()
    return { status: 200, message: "", data: response }
  }

  @Get('get/:id')
  async find(@Param('id') id: number): Promise<ResponseInterface> {
    const response = await this.studentsService.find(id)
    return { status: 200, message: "", data: response }

  }
}
