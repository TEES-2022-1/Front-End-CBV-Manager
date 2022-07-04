import React, {useState} from "react";
import Header from "../header/header";
import {Main, BracketContent} from './styles.jsx';
import { BracketGenerator } from "react-tournament-bracket";
import jsog from "jsog";
import data from "../../data.json";
function Bracket (){
    const decoded = jsog.decode(data);
    console.log(JSON.stringify(decoded, null, 4));
    return(
        <Main>
            <Header/>
        <BracketContent>
        <BracketGenerator games={decoded} />
        </BracketContent>
        </Main>
    )
}

export default Bracket;