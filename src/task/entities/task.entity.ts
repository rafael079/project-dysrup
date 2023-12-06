import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  is_completed: boolean;

  @Column({ type: 'datetime' })
  end_date: Date;
}
