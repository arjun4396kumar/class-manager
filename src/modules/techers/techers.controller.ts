import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TeachersService } from './techers.service';
import { TeacherCreateRequest, TeacherUpdateRequest } from './request/teacher.request';
import { ResponseInterface } from 'src/common/interface/Response/response.interface';


@Controller('teacher')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) { }

  @Post('create')
  async create(@Body() body: TeacherCreateRequest): Promise<ResponseInterface> {
    const response = await this.teachersService.create(body)
    return { status: 200, message: "", data: response }
  }

  @Patch('update/:id')
  async update(@Body() body: TeacherUpdateRequest, @Param('id') id: any): Promise<ResponseInterface> {
    const response = await this.teachersService.update(body, id);
    return { status: 200, message: '', data: { response } }
  }

  @Get('get')
  async findAll(): Promise<ResponseInterface> {
    const response = await this.teachersService.findAll()
    return { status: 200, message: "", data: response }
  }

  @Get('get/:id')
  async find(@Param('id') id: number): Promise<ResponseInterface> {
    const response = await this.teachersService.find(id)
    return { status: 200, message: "", data: response }
  }
}
