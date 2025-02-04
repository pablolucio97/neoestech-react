interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="w-[40rem] flex mx-auto  mb-5">
      <h1 className="ml-3 sm:ml-0 text-lg md:text-xl font-bold">{title}</h1>
    </div>
  );
};

export default Title;
