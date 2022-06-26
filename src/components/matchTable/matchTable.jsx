import React, {useEffect, useState} from "react";
import {Link,useParams} from "react-router-dom"
import {Main, MatchContent} from "./styles"
import Header from "../header/header";
import { NativeSelect } from '@mui/material';
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import api from "../../services/api";
import team from '../../assets/126.png'

function MatchTable(){
    const params = useParams();
    const [confrontantions,setConfrotantions] = useState([]);
    useEffect(()=>{
      const objectArray = [];
        api.get(`/leagues/${params.leagues_id}/confrontations/`).then(response=>{
            objectArray.push(response.data);
            setConfrotantions(objectArray);    
        })
    },[params.leagues_id])
  
    return(
       <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='#'
        linkTwo = 'Equipe' linkRedirectPlayer = '/formTeam'
        linkOne = 'Liga' linkRedirectLeague = '/'
        />
        <MatchContent>
          <h1>Tabela de Jogos</h1>
          {confrontantions.map(confrontation=>(
          <div class="content">           
            <div class="content__info">
                <p class="content__info__title"><strong>Fase Classificatória</strong></p>
                <NativeSelect>
                <option value={1}>Rodada 1</option>
                <option value={2}>Rodada 2</option>
                <option value={3}>Rodada 3</option>
                </NativeSelect>
                </div>
                
                <div class="content__card">
                  <div class="content__card__teams">
                  <p>Jogo <strong>1</strong> | <strong>1 Rodada</strong> | <strong>POLIESPORTIVO DO RIACHO</strong></p>
                  <span>23/10 - 19h00</span>
                  <div class="content__card__teams__icons">
                  <Link to="/" class="content__card__teams__icons__edit">{<BiEditAlt/>}</Link>
                  <Link to="/" class="content__card__teams__icons__delete">{<MdDelete/>}</Link> 
                  </div>
                  <div class="content__card__teams__matches">
                  <p>SADA CRUZEIRO</p>  
                  <img src={team} alt="Cruzeiro" width="120" height="120"/>
                  <div class="content__card__teams__matches__setsPoints">
                  <span>25</span>
                  <span>25</span>
                  <span>25</span>
                  </div> 
                  <p>3 - 0</p>
                  <div class="content__card__teams__matches__setsPoints">
                  <span>25</span>
                  <span>25</span>
                  <span>25</span>
                  </div> 
                  <img class="content__card__teams__matches__imgTeam" src={team} alt="Cruzeiro" width="120" height="120" />
                  <p>SADA CRUZEIRO</p>
                  </div>
                  </div>
                </div>
                <div class="content__card">
                  <div class="content__card__teams">
                  <p>Jogo <strong>1</strong> | <strong>1 Rodada</strong> | <strong>POLIESPORTIVO DO RIACHO</strong></p>
                  <span>23/10 - 19h00</span>
                  <div class="content__card__teams__icons">
                  <Link to="/" class="content__card__teams__icons__edit">{<BiEditAlt/>}</Link>
                  <Link to="/" class="content__card__teams__icons__delete">{<MdDelete/>}</Link> 
                  </div>
                  <div class="content__card__teams__matches">
                  <p>SADA CRUZEIRO</p>  
                  <img src={team} alt="Cruzeiro" width="120" height="120"/>
                  <div class="content__card__teams__matches__setsPoints">
                  <span>25</span>
                  <span>25</span>
                  <span>25</span>
                  </div> 
                  <p>3 - 0</p>
                  <div class="content__card__teams__matches__setsPoints">
                  <span>25</span>
                  <span>25</span>
                  <span>25</span>
                  </div> 
                  <img class="content__card__teams__matches__imgTeam" src={team} alt="Cruzeiro" width="120" height="120" />
                  <p>SADA CRUZEIRO</p>
                  
                  </div>
                  </div>
                </div>

                
            
          </div>
        ))}
        </MatchContent>
       </Main>
      
      

    )
}
 
export default MatchTable