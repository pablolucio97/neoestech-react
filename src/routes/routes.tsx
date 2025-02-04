import { ReactNode } from "react";
import Exercise5 from "../pages/Exercise5";
import Exercise6 from "../pages/Exercise6";
import Home from "../pages/Home";
import JavaScriptExercise1 from "../pages/JavaScriptExercise1";
import JavaScriptExercise2 from "../pages/JavaScriptExercise2";

type TRoute = {
  path: string;
  element: ReactNode;
  name: string;
};

const routes: TRoute[] = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/exercio-5",
    element: <Exercise5 />,
    name: "Exercício React 5",
  },
  {
    path: "/exercio-6",
    element: <Exercise6 />,
    name: "Exercício React 6",
  },
  {
    path: "/exercicio-javascript-1",
    element: <JavaScriptExercise1 />,
    name: "Exercício JavaScript 1",
  },
  {
    path: "/exercicio-javascript-2",
    element: <JavaScriptExercise2 />,
    name: "Exercício JavaScript 2",
  },
];

export default routes;
