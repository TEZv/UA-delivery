const Button = (props) => {
  const buttonStyle = "bg-green-800 text-blue-100 text-xl-2 p-3 rounded-full drop-shadow-md hover:scale-80 hover:translate-y-1 transition-all duration-100 active:bg-red-600 disabled:bg-gray-400"
  const extendedButtonStyle = [
    props.className,
    buttonStyle
  ].join(' ')
  
  return (
    <button className={extendedButtonStyle} onClick={props.onClick} disabled={props.disabled} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
