type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean
  type: 'submit' | 'button' | 'reset';
}

const Button = ({ text, type, onClick, disabled}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled} 
      className="w-full min-w-[105px] text-white bg-rose-600 font-sans text-center rounded h-11  transition hover:brightness-90"
    >
      {text}
    </button>
  );
};

export default Button;