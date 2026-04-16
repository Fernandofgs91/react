import Header from "./components/Header.jsx";
import AcessoInfo from "./components/AcessoInfo.jsx";
import GridInfo from "./components/GridInfo.jsx";
import Gridcolo from "./components/Gridcolo.jsx";

function App() {
  return (
    <>
      <Header />
      <AcessoInfo />
      {/* Adição dos componentes de grelha que faltavam */}
      <GridInfo />
      <Gridcolo />
    </>
  );
}

export default App;
