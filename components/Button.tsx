const Button = ({ text }: { text: string }) => {
  return (
    <div className="py-2 px-6 rounded-md text-white bg-primary_pink  cursor-pointer tracking-widest">
      {text}
    </div>
  );
};
export default Button;
