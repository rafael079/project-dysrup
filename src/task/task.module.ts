import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskEntity } from './entities/task.entity';
import { ProjectEntity } from '../project/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, ProjectEntity])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
