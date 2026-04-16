import Header from "./components/Header.jsx"; //
import AcessoInfo from "./components/AcessoInfo.jsx"; //

function App() {
  return (
    <>
      <Header />
      {/* Chamando o componente 3 vezes aqui, se desejar a repetição */}
      <AcessoInfo />
      <AcessoInfo />
      <AcessoInfo />
    </>
  );
}

export default App; //
