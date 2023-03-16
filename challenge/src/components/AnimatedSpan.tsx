type AnimatedSpanProps = {
  text: string;
  animationCondition: boolean;
  className: string;
  textColor?: string;
};

export default function AnimatedSpan({
  text,
  animationCondition,
  className,
  textColor,
}: AnimatedSpanProps) {
  return (
    <span
      className={`${
        animationCondition ? 'text-transparent bg-[#BDBDBD]' : `${textColor}`
      } transition-colors duration-500 ease-in-out rounded-[1rem] ${className}`}>
      {text}
    </span>
  );
}
