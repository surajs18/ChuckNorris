import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import RandomFact from "./pages/RandomFact";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import CategoryViewer from "./pages/CategoryViewer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
              </>
            }
          />

          <Route
            path="/random"
            element={
              <>
                <Header />
                <RandomFact />
              </>
            }
          />

          <Route
            path="/categories"
            element={
              <>
                <Header />
                <Categories />
              </>
            }
          />

          <Route
            path="/categoryviewer"
            element={
              <>
                <Header />
                <CategoryViewer />
              </>
            }
          />

          <Route
            path="/search"
            element={
              <>
                <Header />
                <Search />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
