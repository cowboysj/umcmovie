import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";
import Loginpage from "./pages/Loginpage";
import store from "./store";
import { Provider } from "react-redux";
import Weather from "./week8/Weather";
import MoviePage from "./pages/MoviePage";
import KakaoRedirect from "./pages/KakaoRedirect.js";

function App() {
  return (
    <Provider store={store}>
      <div className="backgroundWrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/person" element={<Celebrity />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/movie2" element={<MoviePage />} />
            {<Route path="/oauth" element={<KakaoRedirect />} />}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
