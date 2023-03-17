import HeadPage from './HeadPage';
import { useContext } from 'react';
import TransactionList from './TransactionList';
import OfferCard from './OfferCard';
import { DataContext } from './DataProvider';
import Dashboard from './Dashboard';

export default function Body() {
  const { isLoadingData } = useContext(DataContext);

  return (
    <div className='flex flex-col gap-2 items-center justify-center mx-auto my-4 w-[1176px] min-h-[804px]'>
      <div className='flex flex-col'>
        <HeadPage name='Danilo César' />
        <Dashboard />
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
            <OfferCard />
          </div>
        </div>
      </div>
    </div>
  );
}
