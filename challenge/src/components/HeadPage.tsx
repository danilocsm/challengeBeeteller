type HeadPageProps = {
  name: string;
};

export default function HeadPage({ name }: HeadPageProps) {
  return (
    <p className='leading-relaxed text-[#2F2F2F]'>
      <sup className='text-[1rem]'>Olá, </sup>{' '}
      <sub className='text-[1.5rem]'>{name}</sub> <br />
      Seja bem vindo a sua conta digital
    </p>
  );
}
