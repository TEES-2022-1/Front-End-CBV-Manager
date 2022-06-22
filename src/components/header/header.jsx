import React from "react"
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom"


import {Main, Content} from './styles';

function Header(){

    return(
        <Main>
            <Content>
        <main>
            <header class="headerPage">
            <Link to="/">
                <div class="brand">
                <img  class="brand__icon" src = {logo} alt="CBV"/>
                <p class="brand__title">CBV Manager</p>
                </div>
            </Link>
            </header>
        </main>
            </Content>
        </Main>
    )
}

export default Header;