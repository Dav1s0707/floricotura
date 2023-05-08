import Login from "../componentes/Login"
import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";

function Cadastro(){
    return(
        <div>
            <Menu></Menu>
            <h1>Cadastro e Login</h1>
            <Login></Login>
            <Footer></Footer>
        </div>
    )
}

export default Cadastro