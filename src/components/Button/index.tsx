type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset';
};

const Button = ({ text, type, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex w-fit px-7 items-center text-white bg-rose-600 
        font-sans text-center rounded-lg h-11 transition hover:brightness-90
      `}
    >
      <span className="flex-1">{text}</span>
    </button>
  );
};

export default Button;
