import TransactionItem from './TransactionItem';

const transactions = [
  { area: 'Conta corrente', value: 120.3, title: 'Transferência recebida' },
  { area: 'Conta corrente', value: -423.4, title: 'Pagamento DOC' },
  { area: 'Conta investimento', value: 50, title: 'Dividendos IRDM11' },
  { area: 'Conta investimento', value: 2500.0, title: 'Dividendos ALZR11' },
];
export default function TransactionList() {
  return (
    <div className='flex flex-col gap-y-4 overflow-y-auto'>
      {transactions.map((transaction) => (
        <>
          <TransactionItem
            area={transaction.area}
            value={transaction.value}
            title={transaction.title}
          />
        </>
      ))}
    </div>
  );
}
