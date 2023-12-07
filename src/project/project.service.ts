import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectRO } from './project.interface';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    return await this.projectRepository.save({ ...createProjectDto });
  }

  async findAll(): Promise<ProjectRO[]> {
    return await this.projectRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }
}
