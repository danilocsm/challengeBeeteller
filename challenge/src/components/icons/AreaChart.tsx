type AreaChartProps = {
  color: string;
  className?: string;
};
export default function AreaChart({
  color,
  className,
}: AreaChartProps): React.ReactElement {
  return (
    <svg
      className={className}
      width='18'
      height='17'
      viewBox='0 0 18 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 17V4L4 7L9 0L14 4H18V17H0ZM5 14L9 8.5L16 13.95V6H13.3L9.4 2.875L4.45 9.825L2 8V11.6L5 14Z'
        fill={color}
      />
    </svg>
  );
}
