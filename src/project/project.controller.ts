import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectRO } from './project.interface';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOperation({ summary: 'Criar Novo Projeto' })
  @ApiResponse({
    status: 201,
    description: 'Projeto criado com sucesso.',
  })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @ApiOperation({ summary: 'Listar Todos os Projetos' })
  @Get()
  findAll(): Promise<ProjectRO[]> {
    return this.projectService.findAll();
  }
}
