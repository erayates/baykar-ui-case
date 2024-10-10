import Icon from "../ui/icon";

const Header: React.FC = () => {
  return (
    <header className="h-auto md:p-0 md:h-24 w-full flex items-center">
      <div>
        <h1 className="font-bold text-2xl text-secondary">Collers</h1>
      </div>

      <Icon name="arrowLeft" />
      <Icon name="instagram" className="text-secondary" />
      <nav></nav>
    </header>
  );
};

export default Header;
