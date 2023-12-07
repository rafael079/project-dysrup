import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import { ProjectEntity } from '../project/entities/project.entity';
import { ProjectRO } from 'src/project/project.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save({ ...createTaskDto });
  }

  async findAllByProject(project_id: number): Promise<ProjectRO> {
    try {
      return await this.projectRepository.findOneOrFail({
        relations: { tasks: true },
        where: { id: project_id },
        order: {
          tasks: {
            id: 'DESC',
          },
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Não foi possível obter o projeto solicitado',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskRepository.findOneOrFail({
        where: { id },
      });

      return this.taskRepository.save({ ...task, ...updateTaskDto });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Não foi possível obter a tarefa solicitada',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async remove(id: number) {
    try {
      const task = await this.taskRepository.findOneOrFail({
        where: { id },
      });

      return this.taskRepository.remove(task);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Não foi possível obter a tarefa solicitada',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
