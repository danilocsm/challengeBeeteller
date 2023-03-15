import { ArrowRight } from '@phosphor-icons/react';
import { useContext } from 'react';
import { AppContext } from '../App';
import AnimatedSpan from './AnimatedSpan';

type CardProps = {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  value: number;
};

export default function Card({ icon, title, subtitle, value }: CardProps) {
  const { isLoadingData } = useContext(AppContext);

  return (
    <div
      className={`group flex flex-col justify-between w-[300px] h-[250px] ${
        isLoadingData ? 'bg-[#EDEDED] pointer-events-none' : 'bg-[#2F2F2F]'
      } rounded-[20px] p-4 bg-gradient-to-br hover:from-[#2F2F2F] hover:to-zinc-600 transition-all duration-500 ease-in-out`}>
      <div>
        {icon}
        <AnimatedSpan
          className='text-[0.9rem]'
          text={title}
          animationCondition={isLoadingData}
        />
      </div>
      <div className='flex flex-row justify-between'>
        <p>
          <AnimatedSpan
            className='text-[0.9rem]'
            text={subtitle}
            animationCondition={isLoadingData}
          />
          <br />
          <AnimatedSpan
            className='text-[2rem]'
            text={`R$ ${value}`}
            animationCondition={isLoadingData}
          />
        </p>
        <button className='group-hover:block hidden group-hover:animate-horizontalBounce w-[2rem] h-[2rem]'>
          <ArrowRight size={32} color='#EBB932' />
        </button>
      </div>
    </div>
  );
}
