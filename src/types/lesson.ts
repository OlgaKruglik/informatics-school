export type TaskType =
  | "single"
  | "true_false"
  | "text"
  | "number";


export interface Task {
  id: number;
  type: TaskType;
  question: string;

  options?: string[];

  answer: string | boolean | number;

  explanation?: string;
}


export interface Lesson {
  id: number;

  title: string;

  class: number;

  subject: string;

  duration: number;


  theory: {
    title: string;
    content: string;
  }[];


  tasks: Task[];
}
