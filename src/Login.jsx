import "./css/Login.css";

function Login() {
  return (
    <>
      <section id="formulario">
        <div className="sessaoFormulario">
          <form action="" method="get">
            <h1>Instrutor</h1>
            <h2>Stone</h2>
            <span>Card Academy</span>
            <input
              type="email"
              className="input-email"
              placeholder=" 👤 Digite seu email"
            />
            <input
              type="password"
              className="input-senha"
              placeholder="🔒 Digite sua senha "
            />
            <div className="lembrar">
              <input type="checkbox" name="" id="lembrar"/>
              <span className="lembrese">Lembre de mim</span>
              <span>
                <a href="">Esqueci minha senha</a>
              </span>
            </div>

            <button id="Entrar">Entrar</button>
            <span>ou</span>
            <button id="Google">Econtar Conta Google</button>
            <span>
              Ainda não tem Conta ? <a href="">cadastrese</a>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}

export {Login};
