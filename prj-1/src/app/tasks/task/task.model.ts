export interface TaskType {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskDataType {
  id?: string;
  title: string;
  summary: string;
  date: string;
}
