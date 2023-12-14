import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import {Footer} from "./Layout/Footer";
import Counter from "./Counter";
import MoviePage from "./MovieComponents/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header></Header>
    <div className="p-2 m-2 row text-center">
    <Counter></Counter>
    <MoviePage></MoviePage>
    </div>
    <Footer></Footer>
  </div>
);
