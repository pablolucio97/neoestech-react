import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center pt-40">
      <Header />
      {routes.map((route, index) => {
        if (route.name !== "Home") {
          return (
            <div key={index} className="mb-4">
              <Link className="text-md sm:text-lg" to={route.path}>
                {route.name}
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Home;
