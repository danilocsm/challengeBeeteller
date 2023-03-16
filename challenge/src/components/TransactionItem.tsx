import { useContext } from 'react';
import { AppContext } from '../App';
import AnimatedSpan from './AnimatedSpan';
import AccountBalance from './icons/AccountBalance';
import AreaChart from './icons/AreaChart';
import CreditCard from './icons/CreditCard';

type TransactionItemProps = {
  area: string;
  value: number;
  title: string;
};
export default function TransactionItem({
  area,
  value,
  title,
}: TransactionItemProps) {
  const { isLoadingData } = useContext(AppContext);

  return (
    <div className='bg-[#EDEDED] flex flex-row rounded-[1rem] items-center justify-between p-4 w-[813px] h-[80px]'>
      <div
        className='flex flex-row justify-center items-center
      '>
        {area === 'Conta corrente' ? (
          <AccountBalance color={`${isLoadingData ? '#DBDBDB' : '#0F0F0F'} `} />
        ) : area === 'Conta Investimento' ? (
          <AreaChart color={`${isLoadingData ? '#DBDBDB' : '#0F0F0F'} `} />
        ) : (
          <CreditCard color={`${isLoadingData ? '#DBDBDB' : '#0F0F0F'} `} />
        )}
        <AnimatedSpan
          text={area}
          animationCondition={isLoadingData}
          className={'text-[#2F2F2F] ml-2'}
          textColor='text-black'
        />
      </div>
      <AnimatedSpan
        text={title}
        animationCondition={isLoadingData}
        className={'text-[#2F2F2F]'}
        textColor='text-black'
      />
      <AnimatedSpan
        text={`${value > 0 ? '+' : '-'} R$ ${value}`}
        animationCondition={isLoadingData}
        className={`${value > 0 ? 'text-[#24A148]' : 'text-[#DA1E28]'}`}
      />
    </div>
  );
}
