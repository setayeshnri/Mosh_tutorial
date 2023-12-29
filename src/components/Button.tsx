interface props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color= 'primary' }: props) => {
  return (
    <button className={'btn btn-' + color } onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
