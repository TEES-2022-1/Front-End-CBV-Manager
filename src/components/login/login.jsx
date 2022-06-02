import React from "react";
import logo from '../../assets/logo.svg';

import {LoginContent} from './styles';


function Login(){
    return(
        <LoginContent>
        <main class="container">
            <div class="container__loginContainer">
              <div class="container__loginContainer__logo">
              <img src={logo} class="container__loginContainer__logo__imgLogo" alt="CBV"></img>
              <p class="container__loginContainer__logo__titleLogo">CBV Manager</p>
              </div>
              <form >
              <div class="container__loginContainer__form">
                  <input type="text" class="container__loginContainer__form__user" placeholder="Usuário"/>
                  <input type="password" class="container__loginContainer__form__pass" placeholder="Senha"/>
                  <div class="container__loginContainer__form__btLogin">
                  <button type = "submit" class="container__loginContainer__form__btLogin__btHome">Entrar</button>
                  </div>
              </div>
              </form> 
            </div>
        </main>
        </LoginContent>
    )
}

export default Login;