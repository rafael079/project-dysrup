import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'A Marcação de Concluído deve ser informada',
  })
  @IsBoolean({
    message: 'A Marcação de Concluído deve ser true ou false',
  })
  is_completed: boolean;
}
