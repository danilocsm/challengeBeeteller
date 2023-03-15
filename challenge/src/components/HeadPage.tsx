type HeadPageProps = {
  name: string;
};

export default function HeadPage({ name }: HeadPageProps) {
  return (
    <div>
      <p className='leading-relaxed'>
        <sup className='text-[1rem]'>Olá, </sup>{' '}
        <sub className='text-[1.5rem]'>{name}</sub> <br />
        Seja bem vindo a sua conta digital
      </p>
    </div>
  );
}
