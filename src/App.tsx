import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2={'String'}>
        Olá mundo!
      </Heading>
      <Heading>Olá mundo! 2</Heading>
      <Heading>Olá mundo! 3</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi
        magni sapiente minima, unde cumque voluptates. Quae minus excepturi
        recusandae necessitatibus sit. Dolores unde laborum necessitatibus
        dignissimos? Quis, sit itaque!
      </p>
    </>
  );
}
