import _ from 'lodash';
import { useContext } from 'react';
import Card from './Card';
import { DataContext } from './DataProvider';
import HeadPage from './HeadPage';
import AccountBalance from './icons/AccountBalance';
import AreaChart from './icons/AreaChart';
import CreditCard from './icons/CreditCard';

const cards = [
  {
    title: 'Conta corrente',
    subtitle: 'Saldo Disponível',
    icon: AccountBalance,
  },
  {
    title: 'Investimentos',
    subtitle: 'Patrimônio',
    icon: AreaChart,
  },
  {
    title: 'Cartão',
    subtitle: 'Fatura atual',
    icon: CreditCard,
  },
];

export default function Dashboard() {
  const {
    isLoadingData,
    appData: { dashboard },
  } = useContext(DataContext);

  const cardsValues = [
    _.get(dashboard, 'currentAccount.balance', 0),
    _.get(dashboard, 'creditCard.currentInvoice', 0),
    _.get(dashboard, 'investimentAccount.amount', 0),
  ];

  return (
    <div className='grid grid-flow-col gap-x-4 mt-2'>
      {cards.map((card, index) => (
        <div key={index} className={`${index === 0 ? 'col-span-2' : ''}`}>
          <Card
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon({
              color: `${isLoadingData ? '#DBDBDB' : '#EBB932'}`,
              className: 'my-2',
            })}
            value={cardsValues[index]}
          />
        </div>
      ))}
    </div>
  );
}
