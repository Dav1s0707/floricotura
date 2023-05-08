function Login() {
  return (
    <div>
      <div className="login">
        <form action="">
          <h1>Login</h1>
          <div className="col">
            <label>Email:</label>
            <input type="email" />

            <label>Senha:</label>
            <input type="password" />
            <input type="submit" value="Entrar" className="marge"/>
          </div>
        </form>
      </div>
      <div className="cadastro">
          <form action="">
            <h1>Cadastro</h1>
            <div className="col">
            <label>Email:</label>
            <input type="email" />
            <label>Senha:</label>
            <input type="password" />
            <input type="submit" value="Registrar" className="marge" />
            </div>
          </form>
      </div>
    </div>
  );
}

export default Login;
