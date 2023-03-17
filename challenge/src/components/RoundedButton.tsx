type RoundedButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

export default function RoundedButton({
  children,
  onClick,
}: RoundedButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-[6rem] bg-[#EDEDED] w-[4.5rem] h-[4.5rem] flex items-center justify-center"
    >
      {children}
    </button>
  );
}
