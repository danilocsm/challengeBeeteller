import { ArrowRight } from '@phosphor-icons/react';
import { useContext } from 'react';
import AnimatedSpan from './AnimatedSpan';
import { DataContext } from './DataProvider';

type CardProps = {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  value: number;
};

export default function Card({ icon, title, subtitle, value }: CardProps) {
  const { isLoadingData } = useContext(DataContext);

  return (
    <div
      className={`group flex flex-col justify-between h-[250px] ${
        isLoadingData ? 'bg-[#EDEDED] pointer-events-none' : 'bg-[#2F2F2F]'
      } rounded-[20px] p-4 bg-gradient-to-br hover:from-[#2F2F2F] hover:to-zinc-600 transition-all duration-500 ease-in-out`}>
      <div>
        {icon}
        <AnimatedSpan
          className='text-[0.85rem] leading-4'
          text={title}
          animationCondition={isLoadingData}
          textColor='text-white'
        />
      </div>
      <div className='flex flex-row justify-between'>
        <p>
          <AnimatedSpan
            className='text-[0.85rem] leading-4'
            text={subtitle}
            animationCondition={isLoadingData}
            textColor='text-white'
          />
          <br />
          <AnimatedSpan
            className='text-[2rem]'
            text={`${new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(value)}`}
            animationCondition={isLoadingData}
            textColor='text-white'
          />
        </p>
        <button className='group-hover:block hidden group-hover:animate-horizontalBounce w-[2rem] h-[2rem]'>
          <ArrowRight size={32} color='#EBB932' />
        </button>
      </div>
    </div>
  );
}
