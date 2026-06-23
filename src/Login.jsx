import { useState } from "react";
import "./css/Login.css";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <section id="formulario">
      <div className="painel">
        <header className="painel-titulo">
          {/* <h1>
            <span className="instructor">Instructor</span>
            <span className="stone">Stone</span>
          </h1>
          <div className="faixa">
            <span>Card Academy</span>
          </div> */}
        </header>

        <div className="painel-corpo">
          <div className="subtitulo">
            <span>Entre na Academia</span>
          </div>

          <form action="" method="get">
            <label className="campo">
              <svg className="icone" viewBox="0 0 640 640">
                <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
              </svg>
              <input
                type="email"
                className="input-email"
                placeholder="Usuário ou e-mail"
              />
            </label>

            <label className="campo">
              <svg className="icone" viewBox="0 0 448 512">
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
              <input
                type={mostrarSenha ? "text" : "password"}
                className="input-senha"
                placeholder="Senha"
              />
              <button
                type="button"
                className="botao-olho"
                onClick={() => setMostrarSenha((v) => !v)}
                aria-label="Mostrar senha"
              >
                {mostrarSenha ? (
                  <svg viewBox="0 0 640 640">
                    <path d="M73 39C63.6 31.5 49.9 33.1 42.4 42.5C34.9 51.9 36.5 65.6 45.9 73.1L567.9 489.1C577.3 496.6 591 495 598.5 485.6C606 476.2 604.4 462.5 595 455L505 383.6C540.8 350.3 567.7 308.1 583.1 271.1C586.3 263.4 586.3 254.7 583.1 247C564.4 202.5 532.4 154.3 489.7 117.1C446.8 79.7 389.7 51.9 320.1 51.9C266.4 51.9 219.8 67.6 181.4 92L73 39zM196.1 145.3C226.1 123.4 263.4 110.1 320 110.1C374.9 110.1 421.7 132.8 459.8 165.5C495.6 196.2 522.8 235.8 539.6 270C522.7 304.2 495.5 343.8 459.8 374.6C457.6 376.4 455.5 378.2 453.3 380L406.9 343.6C418.2 326.5 424.9 305.9 424.9 283.9C424.9 223.2 376 174.1 315.1 174.1C300.7 174.1 286.9 176.9 274.3 181.8L196.1 145.3z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 576 512">
                    <path d="M572.5 238.1C518.3 115.5 410.9 32 288 32C165.1 32 57.6 115.5 3.5 238.1C-1.2 248.7-1.2 263.3 3.5 273.9C57.6 396.5 165.1 480 288 480C410.9 480 518.3 396.5 572.5 273.9C577.2 263.3 577.2 248.7 572.5 238.1zM288 416C200.1 416 128 343.9 128 256C128 168.1 200.1 96 288 96C375.9 96 448 168.1 448 256C448 343.9 375.9 416 288 416zM288 192C288 227.3 259.3 256 224 256C214.5 256 205.6 254 197.7 250.3C193.3 248.3 188.1 251.2 188.4 256C190.9 304.6 230.9 343 280 343C330.5 343 372 301.5 372 251C372 201.9 333.6 161.9 285 159.4C280.2 159.1 277.3 164.3 279.3 168.7C283 176.6 285 185.5 285 195L288 192z" />
                  </svg>
                )}
              </button>
            </label>

            <div className="lembrar">
              <label className="lembrese">
                <input type="checkbox" defaultChecked id="lembrar" />
                <span>Lembrar de mim</span>
              </label>
              <a href="" className="esqueci">
                Esqueci minha senha
              </a>
            </div>

            <button id="Entrar">Entrar</button>

            <div className="divisor">
              <span>ou</span>
            </div>

            <button id="Google" type="button">
              <svg viewBox="0 0 48 48" className="icone-google">
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20.4H24v7.2h11.3C33.7 32 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.6 5.4 29 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.3-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l5.9 4.3C13.9 15.1 18.6 12 24 12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.6 6.9 29 5 24 5 16.3 5 9.6 9.3 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44.5c5 0 9.6-1.9 13-5l-6-4.9c-2 1.4-4.5 2.2-7 2.2-5.3 0-9.7-3-11.3-7.4l-6 4.6C9.5 39.6 16.2 44.5 24 44.5z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20.4H24v7.2h11.3c-1 2.9-3 5.3-5.6 6.9l6 4.9c3.5-3.2 5.8-8 5.8-13.9 0-1.2-.1-2.4-.3-3.5z"
                />
              </svg>
              <span>Entrar com Google</span>
            </button>

            <span className="cadastro">
              Ainda não tem uma conta? <a href="">Cadastre-se</a>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}

export { Login };
