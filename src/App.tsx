import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';

// export type TaskStateModel = {
//   tasks: [TaskModel];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: TaskModel | null;
//   currentyCycle: number; // 1 a 8
//   config: {
//     workTime: number;
//     shortBreaktime: number;
//     longBreakTime: number;
//   };
// }

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentyCycle: 0,
  config: {
    workTime: 25,
    shortBreaktime: 5,
    longBreakTime: 15,
  },
};
export function App() {
  const [state, setState] = useState(initialState);

  console.log('APP', state);

  return <Home state={state} setState={setState} />;
}
