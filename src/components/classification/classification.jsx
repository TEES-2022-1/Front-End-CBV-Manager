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
                <h1>Classificação &#127942;</h1>
                <table class="tableClassification">
                        <tr>
                            <th>Posição</th>
                            <th>Equipe</th>
                            <th>Partidas Jogadas</th>
                            <th>Vitórias</th>
                            <th>Derrotas</th>
                            <th>Sets Vencidos:Perdidos</th>
                            <th>Pontos</th>
                            
                        </tr>
                    
                    
                        <tr>
                        <td>1</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                       
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>4</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>5</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>6</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                      
                        </tr>

                         <tr>
                        <td>7</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>8</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>9</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>10</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                        
                        </tr>

                         <tr>
                        <td>11</td>
                        <td>SESI</td>
                        <td>5</td>
                        <td>10</td>
                        <td>5</td>
                        <td>60:18</td>
                        <td>60</td>
                       
                        </tr> 
                        
                        <tr>
                        <td>12</td>
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