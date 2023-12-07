import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { CreateProjectDto } from '../../project/dto/create-project.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    type: Number,
  })
  @IsNumber(
    { allowNaN: false },
    {
      message: 'Informe um identificador válido para o projeto',
    },
  )
  @IsNotEmpty({
    message: 'O projeto deve ser informado',
  })
  project: CreateProjectDto;

  @ApiProperty()
  @IsNotEmpty({
    message: 'O Titulo da Tarefa não pode ficar vazio',
  })
  title: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'A Descrição da Tarefa não pode ficar vazia',
  })
  description: string;

  @ApiProperty({ required: false, default: true })
  @IsOptional()
  @IsBoolean({
    message: 'A Marcação de Concluído deve ser true ou false',
  })
  is_completed: boolean;

  @ApiProperty()
  @IsNotEmpty({
    message: 'A Data de Termino deve não pode ser vazia',
  })
  @IsDateString(
    { strict: true },
    {
      message: 'A Data de Termino deve ser uma data válida',
    },
  )
  end_date: Date;
}
