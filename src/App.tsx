import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon></TimerIcon>
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi
        magni sapiente minima, unde cumque voluptates. Quae minus excepturi
        recusandae necessitatibus sit. Dolores unde laborum necessitatibus
        dignissimos? Quis, sit itaque!
      </p>
    </>
  );
}
