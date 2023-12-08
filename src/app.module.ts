import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectModule } from './config/database/database-connect.module';
import { ConfigModule } from '@nestjs/config';
import { dotenvConfig } from './config/dotenv.config';
import { TeachersModule } from './modules/techers/techers.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [DatabaseConnectModule.forRoot(),ConfigModule.forRoot(dotenvConfig()),TeachersModule,ClassroomModule,StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
