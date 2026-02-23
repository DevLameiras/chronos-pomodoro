import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentyCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreaktime: number;
    longBreakTime: number;
  };
};
