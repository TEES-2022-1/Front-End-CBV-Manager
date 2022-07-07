import React, {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom"
import {Main, MatchContent} from "./styles"
import Header from "../header/header";
import { NativeSelect } from '@mui/material';
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import api from "../../services/api";


function MatchTable(){
    const params = useParams();
    const [confrontantions,setConfrotantions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(1);
    var arrayTeste = [];
    const valor = selectedOption;
    useEffect(()=>{
        api.get(`/leagues/${params.leagues_id}/confrontations/classificatory`).then(response=>{
          
            setConfrotantions(response.data);    
        })
    },[params.leagues_id])

   const handleChange = event=>{
    const value = event.target.value;
    setSelectedOption(value);
   }

   confrontantions.forEach((item)=>{
    var duplicated = arrayTeste.findIndex(redItem=>{
      return item.round == redItem.round;
    }) > -1;

    if(!duplicated) {
      arrayTeste.push(item)
    }
   }); 
    return(
       <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='#'
        linkTwo = 'Equipe' linkRedirectPlayer = '/formTeam'
        linkOne = 'Liga' linkRedirectLeague = '/'
        />
        <MatchContent>
          <div class="header">
          <h1>Tabela de Jogos</h1>
          <Link  class="header__bracket" to="/bracket">Chaveamento</Link>
          </div>
          <div class="content">           
            <div class="content__info">
                <p class="content__info__title"><strong>Fase Classificatória</strong></p>
               
                <NativeSelect value={selectedOption} onChange={handleChange}>
                {arrayTeste.map(rounds=>(
                <option key={rounds} value={rounds.value}>{rounds.round}</option>
                ))}
               </NativeSelect>
              
                </div>
                {confrontantions.map(confrontation=>(
                <div class="content__card">
                
                  {(selectedOption===valor ? confrontation.round == selectedOption: "") && <div class="content__card__teams"> 
                 
                  <p>Jogo <strong>{confrontation.id}</strong> | <strong>{confrontation.round} Rodada</strong> | <strong>POLIESPORTIVO DO RIACHO</strong></p>
                  <span>{confrontation.scheduling}</span>
                  <div class="content__card__teams__icons">
                  <Link to={`/leagues/${params.leagues_id}/confrontations/classificatory/${confrontation.id}/formResultEdit`} class="content__card__teams__icons__edit">{<BiEditAlt/>}</Link>
                  </div>
                  <div class="content__card__teams__matches">
                  <p>SADA CRUZEIRO</p>  
                 
                  <div class="content__card__teams__matches__setsPoints">
                  <span>{confrontation.set1_points_host}</span>
                  <span>{confrontation.set2_points_host}</span>
                  <span>{confrontation.set3_points_host}</span>
                  <span>{confrontation.set4_points_host = "NULL" ? "": confrontation.set4_points_host}</span>
                  <span>{confrontation.set5_points_host = "NULL" ? "": confrontation.set5_points_host}</span>
                  </div> 
                  <p><strong>{confrontation.result_host} - {confrontation.result_guest}</strong></p>
                  <div class="content__card__teams__matches__setsPoints">
                  <span>{confrontation.set1_points_guest}</span>
                  <span>{confrontation.set2_points_guest}</span>
                  <span>{confrontation.set3_points_guest}</span>
                  <span>{confrontation.set4_points_host = "NULL" ? "": confrontation.set4_points_host}</span>
                  <span>{confrontation.set5_points_host = "NULL" ? "": confrontation.set5_points_host}</span>
                  </div> 
                  <img class="content__card__teams__matches__imgTeam" src={team} alt="Cruzeiro" width="120" height="120" />
                  <p>SADA CRUZEIRO</p>
             
                  </div>
               
                  </div>}
                  
                </div>    
                
                   ))}  
                 
          </div>
        
        </MatchContent>
      
       </Main>
      
      

    )
}
 
export default MatchTable
