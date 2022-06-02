import React, {useState,useEffect} from "react";
import {Main, TeamContainer} from "../listLeague/styles";
import {Link} from "react-router-dom"
import Header from "../header/header";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import api from "../../services/api";
import Moment from "moment";



function ListLeague(){
    const [league,setLeague] = useState([]);
    useEffect(()=>{
        api.get('/competitions').then(response=>{
            setLeague(response.data);    
        })
    },[])

    async function handleRemoveLeague(id){
        const deleteResponse = await api.delete(`/competitions/${id}`);
        if(deleteResponse.status===204){
            
            setLeague(league.filter(leagues=>leagues.id !== id))
            
        }
        window.location.reload();
    }
 
    return(
        <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='#'
        linkTwo = 'Jogador' linkRedirectPlayer = '#'
        linkOne = 'Liga' linkRedirectLeague = '/formLeague'
        />
        <TeamContainer>
        <div class="title">
                <h1 class="title__name">Ligas</h1>
                <Link to="/listTeams" class="title__linkTeams" >Equipes</Link>
            </div>       
        {league.map(leagues=>{
        return(
        <main class="Teams" >
               
                <div class="Teams__dropzoneTeams">
                    <div class="Teams__dropzoneTeams__containerLinkName">
                    <h2 class="Teams__dropzoneTeams__containerLinkName__title">{leagues.title}</h2>
                    <div class="Teams__dropzoneTeams__containerLinkName__icons">
                     
                    <Link to={`/formLeagueEdit/${leagues.id}`} title="Editar" class="Teams__dropzoneTeams__containerLinkName__icons__btEdit"><BiEditAlt/></Link>
                    <Link to="/"  onClick={()=>handleRemoveLeague(leagues.id)} class="Teams__dropzoneTeams__containerLinkName__icons__btDelete" title="Deletar"><MdDelete/></Link> 
                    </div>
                    </div>
                  
                    <p class="Teams__dropzoneTeams__object">Ano: {leagues.year}</p>
                    <p class="Teams__dropzoneTeams__object">Quantidade de Equipes: {leagues.category==="MALE"?"Masculino":"Feminino"}</p>
                    <p class="Teams__dropzoneTeams__object">Início: {Moment(leagues.begin_in).format('DD/MM/YYYY')}</p>
                    <p class="Teams__dropzoneTeams__object">Fase Classificatória: {Moment(leagues.classificatory_limit).format('DD/MM/YYYY')}</p>
                    <p class="Teams__dropzoneTeams__object">Quartas de Final:{Moment(leagues.quarter_finals_limit).format('DD/MM/YYYY')}</p>
                    <p class="Teams__dropzoneTeams__object">Semifinais:{Moment(leagues.semifinals_limit).format('DD/MM/YYYY')}</p>
                    <p class="Teams__dropzoneTeams__object">Final: {Moment(leagues.finish_in).format('DD/MM/YYYY')}</p>            
                </div>      
        </main>
        );
     })} 
        </TeamContainer>   
        </Main>
    )
}

export default ListLeague;