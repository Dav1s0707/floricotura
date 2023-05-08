import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";
import Itens from "../componentes/Produto";

function Home() {
  return (
    <div>
      <Menu></Menu>
      <h1>Home</h1>
      <div className="cartao">
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
      </div>
        <a className="ver" href="/produtos" ><p> Ver mais..</p></a>
      <Footer></Footer>
    </div>
  );
}

export default Home;
