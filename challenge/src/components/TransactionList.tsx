import { useContext } from 'react';
import { DataContext } from './DataProvider';
import TransactionItem from './TransactionItem';

type Movement = {
  account: string;
  amount: number;
  compensationType: string;
  description: string;
  movementId: number;
  datetime: string;
};

const transactions = [
  { area: 'Conta corrente', value: 120.3, title: 'Transferência recebida' },
  { area: 'Conta corrente', value: -423.4, title: 'Pagamento DOC' },
  { area: 'Conta investimento', value: 50, title: 'Dividendos IRDM11' },
  { area: 'Conta investimento', value: 2500.0, title: 'Dividendos ALZR11' },
];

export default function TransactionList() {
  const {
    appData: { movement },
  } = useContext(DataContext);

  const transactionsList = movement
    ? movement.map((mov: Movement) => ({
        area:
          mov.account === 'CURRENT' ? 'Conta corrente' : 'Conta investimento',
        value: mov.compensationType === 'DEBIT' ? -1 * mov.amount : mov.amount,
        title: mov.description,
      }))
    : transactions;

  return (
    <div className='flex flex-col gap-y-4 overflow-y-auto'>
      {transactionsList.map((transaction: any) => (
        <TransactionItem
          key={transaction.value}
          area={transaction.area}
          value={transaction.value}
          title={transaction.title}
        />
      ))}
    </div>
  );
}
