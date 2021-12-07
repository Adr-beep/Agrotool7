import '../static/css/Login.css';
import '../static/css/Default.css';
import logo from '../static/img/logo.svg';

function Login() {
  return (
    <body>
    <div className="form-section">
    <div className="form-container">
        <div className="form-content">
            <div className="form-logo">
            <img src={logo} alt="" className="header-left-logo"/>            
            </div>
            <div className="form-inputs">
                <form className="form-login" action="/" method="post">
                    <div className="login-item i-user">
                        <input type="text" name="usuario" defaultValue="" id="usuario" required/>
                        <label for="usuario">Usuario</label>
                    </div>
                    <div className="login-item i-password">
                        <input type="password" name="password"  defaultValue="" id="password" required/>
                        <label for="password">Contraseña</label>
                    </div>
                    <div class="login-item i-login">
                        <a  href="/Registro" className="button-1" type="submit" name="">Crear cuenta</a>
                        <button className="button-2" type="submit" name="">Iniciar sesión</button>
                    </div>
                    <div  className="login-text">
                        <p class="text-policy">This site is protected by reCAPTCHA and the <b>Agricola Ibiza Privacy Policy and Terms of Service</b> apply.
                        </p>
                    </div>

                </form>
            </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Login;
