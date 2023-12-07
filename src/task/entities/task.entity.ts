import { ProjectEntity } from '../../project/entities/project.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProjectEntity, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({
    name: 'project_id',
    referencedColumnName: 'id',
  })
  project: ProjectEntity;

  @Column({ length: 250 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  is_completed: boolean;

  @Column({ type: 'date' })
  end_date: Date;
}
