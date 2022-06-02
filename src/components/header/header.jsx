import React from "react"
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom"


import {Main, Content} from './styles';

function Header(props){
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
                
                <div class="register">
                 <div class="register__btsRegisterComp">
                 <Link to={props.linkRedirectLeague } class="register__btsRegisterComp__btRegisterLeague">{props.linkOne}</Link>
                 <Link to={props.linkRedirectPlayer} class="register__btsRegisterComp__btRegisterTeam">{props.linkTwo}</Link>
                 <Link to={props.linkRedirectStats}class="register__btsRegisterComp__btRegisterPlayer">{props.linkThree}</Link>
                 </div>
                 
                </div>
                
            </header>
        </main>
            </Content>
        </Main>
    )
}

export default Header;