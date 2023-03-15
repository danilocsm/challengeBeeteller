type AnimatedSpanProps = {
  text: string;
  animationCondition: boolean;
  className: string;
};

export default function AnimatedSpan({
  text,
  animationCondition,
  className,
}: AnimatedSpanProps) {
  return (
    <span
      className={`${
        animationCondition ? 'text-transparent bg-[#BDBDBD]' : 'text-white'
      } transition-colors duration-500 ease-in-out rounded-[1rem] ${className}`}>
      {text}
    </span>
  );
}
