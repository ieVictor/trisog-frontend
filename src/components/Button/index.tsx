type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset';
  fill?: boolean
};

const Button = ({ text, type, onClick, disabled, fill}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        "flex px-7 items-center" +
        " enabled:text-white enabled:bg-rose-500 enabled:hover-bright" +
        " disabled:text-white disabled:bg-rose-200" +
        " font-sans text-center rounded-lg h-11 transition" +
        (fill ? " w-full" : " w-fit")
      }
    >
      <span className="flex-1 font-sans font-normal text-base">{text}</span>
    </button>
  );
};

export default Button;
