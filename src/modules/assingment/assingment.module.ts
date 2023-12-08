import { Module } from '@nestjs/common';
import { AssingmentService } from './assingment.service';
import { AssingmentController } from './assingment.controller';

@Module({
  controllers: [AssingmentController],
  providers: [AssingmentService],
})
export class AssingmentModule {}
