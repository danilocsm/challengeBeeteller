import { useContext } from 'react';
import { DataContext } from './DataProvider';

type NavitemProps = {
  text: string;
  href: string;
};

export default function Link({ text, href }: NavitemProps) {
  const { isLoadingData } = useContext(DataContext);

  return (
    <div
      className={`flex items-center justify-center hover:bg-[#EDEDED] p-4 w-fit h-[4rem] rounded-lg text-[1rem]`}>
      <a
        href={href}
        className={`${
          isLoadingData ? `text-transparent bg-[#DBDBDB]` : `text-black`
        } transition-colors duration-500 ease-in-out rounded-2xl`}>
        {text}
      </a>
    </div>
  );
}
