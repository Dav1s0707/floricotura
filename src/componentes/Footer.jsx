import './Footer.css'

function Footer() {
    return(
        <div className='marg'>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre</h6>
            <p className="text-justify">Somos a maior floricultura de São Paulo com 89 anos de mercado</p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Paginas</h6>
            <ul className="footer-links">
              <li><a href="">Cadastro & Login</a></li>
              <li className='marge'><a href="">Home</a></li>
              <li><a href="">Produtos</a></li>
            </ul>
          </div>
        <hr/>
          <div className="col-xs-6 col-md-3">
            <h6>Informaçoes extras</h6>
            <ul className="footer-links">
              <li><a href="">Sobre nos</a></li>
              <li className='marge'><a href="">Fale Conosco</a></li>
              <li><a href="">Politica de Segurança</a></li>
              <li className='marge'><a href="">Parcerias</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Lótus Branco</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"><img className="img-icon" src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="" /></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"><img className="img-icon" src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg" alt="" /></i></a></li>
              <li><a className="instagram" href="#"><i className="fa fa-instagram"><img className="img-icon" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="" /></i></a></li>  
            </ul>
          </div>
        </div>
      </div> */}
</footer>
        </div>
    )
}

export default Footer