import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'O Nome do projeto não pode estar vazio',
  })
  name: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'A Descrição do projeto não pode estar vazio',
  })
  description: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'A Data de Inicio do projeto não pode estar vazio',
  })
  @IsDateString(
    { strict: true },
    {
      message: 'A Data de Inicio do projeto não deve ser uma data válida',
    },
  )
  start_date: Date;
}
