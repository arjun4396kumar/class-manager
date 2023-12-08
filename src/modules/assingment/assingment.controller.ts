import { Controller } from '@nestjs/common';
import { AssingmentService } from './assingment.service';

@Controller('assingment')
export class AssingmentController {
  constructor(private readonly assingmentService: AssingmentService) {}
}
