import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Criar uma nova Tarefa' })
  @ApiResponse({
    status: 201,
    description: 'Tarefa criada com sucesso.',
  })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Obter tarefas por projeto_id' })
  @Get('project/:project_id')
  findAllByProject(@Param('project_id') project_id: string) {
    return this.taskService.findAllByProject(+project_id);
  }

  @ApiOperation({ summary: 'Atualizar conclusão da tarefa' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Excluir tarefa' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
