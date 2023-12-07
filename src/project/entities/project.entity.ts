import { TaskEntity } from 'src/task/entities/task.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => TaskEntity, (task) => task.project)
  tasks: TaskEntity[];

  @Column({ type: 'date' })
  start_date: Date;
}
