import React from "react"
import {Main, MatchContent} from "./styles"
import Header from "../header/header";
import { NativeSelect } from '@mui/material';

function MatchTable(){

    return(
       <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='#'
        linkTwo = 'Equipe' linkRedirectPlayer = '/formTeam'
        linkOne = 'Liga' linkRedirectLeague = '/'
        />
        <MatchContent>
          <h1>Tabela de Jogos</h1>

          <div class="content">
            <div class="content__info">
                <p class="content__info__title"><strong>Classificatória</strong></p>
                <NativeSelect>
                <option value={1}>Rodada 1</option>
                <option value={2}>Rodada 2</option>
                <option value={3}>Rodada 3</option>
                </NativeSelect>
            </div>
          </div>
        </MatchContent>
       </Main>
      
      

    )
}

export default MatchTable