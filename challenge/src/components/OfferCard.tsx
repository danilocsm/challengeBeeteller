import { ArrowRight } from '@phosphor-icons/react';
import { useContext } from 'react';
import { DataContext } from '../components/DataProvider';
import offerPicture from '../assets/offer_picture.png';
import AnimatedSpan from './AnimatedSpan';
import Store from './icons/Store';

export default function OfferCard() {
  const {
    isLoadingData,
    appData: { offers },
  } = useContext(DataContext);

  const offer = offers ? offers.offers[0] : undefined;
  return (
    <div className='group bg-[#EDEDED] rounded-[1rem] w-[323px] h-[368px] flex flex-col items-start hover:drop-shadow-2xl transition-all duration-500 ease-in-out'>
      {isLoadingData ? (
        <div className='rounded-t-[1rem] h-2/5 w-full bg-[#DBDBDB]' />
      ) : (
        <img
          src={offerPicture}
          className='rounded-t-[1rem] h-2/5 w-full group-hover:h-3/5 transition-all duration-500 ease-in-out object-center group-hover:saturate-150'
        />
      )}
      <div className='flex flex-col p-[1rem] h-[60%] w-full justify-between'>
        <Store
          color={`${isLoadingData ? '#DBDBDB' : '#0F0F0F'}`}
          className='h-fit group-hover:h-0'
        />
        <AnimatedSpan
          text={offer?.title || ''}
          animationCondition={isLoadingData}
          className={'text-[1rem] leading-[1.5rem] text-[#2F2F2F]'}
        />
        <AnimatedSpan
          text={offer?.subtitle || ''}
          animationCondition={isLoadingData}
          className={'text-[0.85rem] text-[#666666] leading-[1rem]'}
        />
        <AnimatedSpan
          text={`${new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(offer?.amount || 0)}`}
          animationCondition={isLoadingData}
          className={'text-[1.5rem] leading-[2rem]'}
        />

        <button
          className={`bg-[#EBB932] rounded-lg flex flex-row p-[1rem] gap-[1rem] items-center justify-between  w-1/2 group-hover:w-5/6 transition-all duration-500 ease-in-out ${
            isLoadingData ? 'bg-transparent' : ''
          }`}>
          <AnimatedSpan
            text={'Ver ofertas'}
            animationCondition={isLoadingData}
            className={''}
          />
          <ArrowRight size={16} color={isLoadingData ? '#DBDBDB' : ''} />
        </button>
      </div>
    </div>
  );
}
