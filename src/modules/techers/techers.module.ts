import { Module } from '@nestjs/common';
import { TeachersService } from './techers.service';
import { TeachersController } from './techers.controller';


@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
