import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomCreateRequest } from './request/classroom.request';
import { ResponseInterface } from 'src/common/interface/Response/response.interface';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}


  @Post('create')
  async create(@Body() body:ClassroomCreateRequest):Promise<ResponseInterface>{
     const response = await this.classroomService.create(body)
     return {status:200, message:"",data:response}
  }

  @Get('get/:id')
  async find(@Param('id') id:number):Promise<ResponseInterface>{
   const response = await this.classroomService.find(id)
   return {status:200, message:"",data:response}
  }
}
