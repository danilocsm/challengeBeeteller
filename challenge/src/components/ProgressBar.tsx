import { BaseSyntheticEvent } from 'react';

type ProgressBarProps = {
  className: string;
};

export default function Progressbar({ className }: ProgressBarProps) {
  const onAnimationEnd = (event: BaseSyntheticEvent) => {
    event.target.style.display = 'none';
  };
  return (
    <div
      className={`h-1 rounded-xl bg-zinc-700 w-full mt-4 ${className}`}
      onAnimationEnd={onAnimationEnd}>
      <div
        role='progressbar'
        className='h-1 rounded-2xl bg-[#EBB932] transition-all'></div>
    </div>
  );
}
