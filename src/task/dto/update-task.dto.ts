import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty({
    message: 'A Marcação de Concluído deve ser informada',
  })
  @IsBoolean({
    message: 'A Marcação de Concluído deve ser true ou false',
  })
  is_completed: boolean;
}
