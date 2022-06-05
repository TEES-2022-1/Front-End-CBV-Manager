import React from "react";
import Header from "../header/header";
import {Main, ContentTable} from "./styles"
function Classification(){
    return(
        <Main>
       <Header 
        linkThree='Estatísticas' linkRedirectStats='/Statistics'
        linkTwo = 'Jogador' linkRedirectPlayer = '/formPlayer'
        linkOne = 'Liga' linkRedirectLeague = '/formLeague'
        />
        <h1 class="tableTitle">Classificação</h1>
        <ContentTable>
          <div class="tableContainer">
          <table>
              <div class="tableContainer__title">
              <tr>
                  <th>Equipes</th>
                  <th>PJ</th>
                  <th>V</th>
                  <th>D</th>
                  <th>PTS</th>
              </tr>
              </div>

              <div class="tableContainer__description">
              <tr>
                  <td>SESI</td>
                  <td>15</td>
                  <td>8</td>
                  <td>7</td>
                  <td>30</td>
              </tr>
              <tr>
                  <td>SESI</td>
                  <td>15</td>
                  <td>8</td>
                  <td>7</td>
                  <td>30</td>
              </tr>
              <tr>
                  <td>SESI</td>
                  <td>15</td>
                  <td>8</td>
                  <td>7</td>
                  <td>30</td>
              </tr>
              <tr>
                  <td>SESI</td>
                  <td>15</td>
                  <td>8</td>
                  <td>7</td>
                  <td>30</td>
              </tr>
              
              <tr>
                  <td>SESI</td>
                  <td>15</td>
                  <td>8</td>
                  <td>7</td>
                  <td>30</td>
              </tr>
              </div>
          </table>
          </div>  
        </ContentTable>
        </Main>
     
    )
}

export default Classification;