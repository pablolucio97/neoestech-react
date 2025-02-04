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
    <header className="w-full h-[5rem] flex items-center bg-gradient-to-r bg-[#EC6724] p-4 fixed top-0 left-0">
      <div className="w-[1080px] flex items-center justify-between mx-auto">
        <div className="flex items-center">
          {location.pathname !== "/" && (
            <button
              onClick={goBack}
              className="text-white mr-1"
              data-testid="header-component-go-back-button"
            >
              <MdArrowBack className="w-5 h-5 md:w-8 md:h-8" />
            </button>
          )}
          <img src={logoSvg} alt="logo-neoestech" />
        </div>
        <span
          className="text-lg md:text-xl text-white font-bold"
          data-testid="header-page-title"
        >
          {pageTitle}
        </span>
      </div>
    </header>
  );
};

export default Header;
