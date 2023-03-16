import HeadPage from './HeadPage';
import Card from './Card';
import AreaChart from './icons/AreaChart';
import CreditCard from './icons/CreditCard';
import AccountBalance from './icons/AccountBalance';
import { useContext } from 'react';
import { AppContext } from '../App';
import TransactionList from './TransactionList';
import OfferCard from './OfferCard';

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
    <div className='flex flex-col gap-2 items-center justify-center m-auto w-[1176px] h-[804px]'>
      <div className='flex flex-col'>
        <HeadPage name='Danilo César' />
        <div className='grid grid-flow-col gap-x-4 mt-2'>
          {cards.map((card, index) => (
            <div className={`${index === 0 ? 'col-span-2' : ''}`}>
              <Card
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                icon={card.icon({
                  color: `${isLoadingData ? '#DBDBDB' : '#EBB932'}`,
                  className: 'my-2',
                })}
                value={0}
              />
            </div>
          ))}
        </div>

        <div className='flex flex-row my-4 gap-x-6'>
          <div className=''>
            <p className='my-4'>
              <span className='text-[#2f2f2f] text-[1.5rem] leading-[2rem]'>
                Conta digital{' '}
              </span>
              <span className='align-top text-[1rem] leading-[1.5rem] text-[#666666]'>
                Últimas movimentações
              </span>
            </p>
            <TransactionList />
          </div>

          <div className=''>
            <p className='text-[#2f2f2f] text-[1.5rem] leading-[2rem] my-4'>
              Ofertas pra você
            </p>
            <OfferCard
              title={'Empréstimo Beeteller'}
              subtitle={'Valor disponível'}
              amount={100000}
              offerType={''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
