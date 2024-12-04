const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`${className} py-2 px-6 rounded-md cursor-pointer tracking-widest transition-all duration-200 border-2 border-primary_pink hover:scale-110 ease-in-out`}
    >
      {text}
    </div>
  );
};
export default Button;
