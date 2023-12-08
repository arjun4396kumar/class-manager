import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Assignment } from "src/models/assingment/assingment.entity";
import { Classroom } from "src/models/classroom/classroom.entity";
import { Notice } from "src/models/notice/notice.entity";
import { Student } from "src/models/students/student.entity";
import { Teacher } from "src/models/teacher/teacher.entity";


/**
 *
 */
@Module({})
export class DatabaseConnectModule {
  /**
   * @returns DynamicModule for database connection between MySQL and MongoDB.
   */
  static forRoot(): DynamicModule {
    return {
      module: DatabaseConnectModule,
      imports: [DatabaseConnectModule.getDatabaseModule()],
    };
  }

  /**
   * @returns DynamicModule for database connection between MySQL and MongoDB.
   */
  private static getDatabaseModule(): DynamicModule {
    let databaseModule: DynamicModule;
    databaseModule = TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        /**
         *
         * @param configService Need to get values from environment to config MySQL database options.
         * @returns MySQL database connection.
         */
        useFactory: (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get('RDB_HOST'),
          port: +configService.get('RDB_PORT'),
          username: configService.get('RDB_USERNAME'),
          password: configService.get('RDB_PASSWORD'),
          database: configService.get('RDB_DATABASE'),
          cache:false,
          entities: [Teacher,Student,Assignment,Notice,Classroom],
          synchronize: true,
          logging: false,
        }),
        inject: [ConfigService],
      });
      console.log('Connected to RDBMS database using typeorm');
    return databaseModule;
  }
}
