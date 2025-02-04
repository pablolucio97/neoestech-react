import { MdArrowBack } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";

interface HeaderProps {
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="w-full flex items-center bg-gradient-to-r bg-[#EC6724] py-3 px-4 fixed top-0 left-0">
      <div className="w-[1080px] flex items-center justify-between mx-auto">
        <div className="flex items-center">
          {location.pathname !== "/" && (
            <button
              onClick={goBack}
              className="text-white mr-1"
              data-testid="header-component-go-back-button"
            >
              <MdArrowBack className="w-7 h-7 md:w-9 md:h-9" />
            </button>
          )}
          <img src={logoSvg} alt="logo-neoestech" />
        </div>
        <span
          className="text-md md:text-xl text-white font-bold mr-2"
        >
          {pageTitle}
        </span>
      </div>
    </header>
  );
};

export default Header;
