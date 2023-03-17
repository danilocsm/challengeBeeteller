import { Bell, List } from '@phosphor-icons/react';
import Link from './Link';
import RoundedButton from './RoundedButton';
import logo from '../assets/brand_name.png';
import profilePicture from '../assets/profile_picture.png';
import { useContext } from 'react';
import { DataContext } from './DataProvider';
import Progressbar from './ProgressBar';

const links = [
  { text: 'Home', href: '/' },
  { text: 'Extrato', href: '/' },
  { text: 'Área Pix', href: '/' },
  { text: 'Cartão de crédito', href: '/' },
];

export default function Header() {
  const { isLoadingData } = useContext(DataContext);

  return (
    <nav className='relative flex flex-row justify-between items-center border-b-2 p-6 w-full'>
      {isLoadingData ? null : (
        <Progressbar className='absolute bottom-0 left-0 animate-progressAnimation' />
      )}
      <img src={logo} />
      <div className='flex flex-row gap-x-2'>
        {links.map((link) => (
          <Link key={link.text} text={link.text} href={link.href} />
        ))}
      </div>
      <div className='flex flex-row gap-x-2'>
        <RoundedButton onClick={() => console.log('clicked')}>
          <Bell
            size={25}
            className={`${
              isLoadingData ? `text-[#DBDBDB]` : `text-black`
            } transition-colors duration-500 ease-in-out`}
          />
        </RoundedButton>
        <RoundedButton onClick={() => console.log('clicked')}>
          <List
            size={25}
            className={`${
              isLoadingData ? `text-[#DBDBDB]` : `text-black`
            } transition-colors duration-500 ease-in-out`}
          />
        </RoundedButton>
        <RoundedButton onClick={() => console.log('clicked')}>
          {!isLoadingData && (
            <img className='w-full h-full' src={profilePicture} />
          )}
        </RoundedButton>
      </div>
    </nav>
  );
}
