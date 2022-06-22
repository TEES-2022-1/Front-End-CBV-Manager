import React from "react";
import Header from "../header/header";
import {Main, TableContent} from "./styles"


function Classification(){
    
    return(
        <Main>
       <Header 
        linkThree='Estatísticas' linkRedirectStats='/Statistics'
        linkTwo = 'Jogador' linkRedirectPlayer = '/formPlayer'
        linkOne = 'Liga' linkRedirectLeague = '/formLeague'
        />
        <TableContent>
                <h1>Classificação</h1>
                <table class="tableClassification">
                        <tr>
                            <th>Equipe</th>
                            <th>PJ</th>
                            <th>V</th>
                            <th>D</th>
                            <th>S</th>
                            <th>Pts</th>
                        </tr>
                    
                    
                        <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                        <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>
                        <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr>

                         <tr>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        </tr> 
                   
                </table>
        </TableContent>
        </Main>
    )
}

export default Classification;