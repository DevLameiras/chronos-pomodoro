import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles/Index';
import { DefaultButton } from '../DefaultButton/Index';
import { DefaultInput } from '../DefaultInput/Index';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='QualquerCoisa'
          id='MeuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
