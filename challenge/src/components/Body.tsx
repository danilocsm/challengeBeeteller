import HeadPage from './HeadPage';
import Card from './Card';
import AreaChart from './icons/AreaChart';
import CreditCard from './icons/CreditCard';
import AccountBalance from './icons/AccountBalance';
import { useContext } from 'react';
import { AppContext } from '../App';

const cards = [
  {
    title: 'Conta corrente',
    subtitle: 'Saldo Disponível',
    icon: AccountBalance,
  },
  { title: 'Investimentos', subtitle: 'Patrimônio', icon: AreaChart },
  { title: 'Cartão', subtitle: 'Fatura atual', icon: CreditCard },
];

export default function Body() {
  const { isLoadingData } = useContext(AppContext);

  return (
    <div className='flex flex-col gap-2 m-4 items-center justify-center'>
      <div className='flex flex-col'>
        <HeadPage name='Danilo César' />
        <div className='flex flex-row gap-x-4 mt-2'>
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon(
                `${isLoadingData ? '#DBDBDB' : '#EBB932'}`,
                'my-2'
              )}
              value={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
