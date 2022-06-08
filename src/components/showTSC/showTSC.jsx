import React, {useState,useEffect} from "react";
import {Main, TeamContainer} from "../listLeague/styles";
import {Link,useParams} from "react-router-dom"
import Header from "../header/header";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import api from "../../services/api";




function ShowTSC(){
  const [technicalCommitee,setTechnicalCommitee] = useState([]);
  const params = useParams();
  useEffect(()=>{
    api.get(`/teams/${params.teams_id}/technical_committee`).then(response=>{
        setTechnicalCommitee(response.data);
        console.log(response.data);
        
    })
},[params.teams_id])


    async function handleRemoveLeague(id){
        const deleteResponse = await api.delete(`/teams/${params.teams_id}/technical_committee/${id}`);
        if(deleteResponse.status===204){
            
            setTechnicalCommitee(technicalCommitee.filter(technicalCommitee=>technicalCommitee.id !== id))
            
        }
        window.location.reload();
    }
 
    return(
      <Main>
      <Header 
      linkThree='Estatísticas' linkRedirectStats='/Statistics'
      linkTwo = 'Jogador' linkRedirectPlayer = '/formPlayer'
      linkOne = 'Liga' linkRedirectLeague = '/formLeague'
      />
        <TeamContainer>
        <div class="title">
                <h1 class="title__name">Comissão Técnica</h1>
                <Link to={`/leagues/${params.leagues_id}/teams/listTeams`} class="title__linkTeams" >Voltar</Link>
            </div>       
        {technicalCommitee.map(technical=>{
        return(
        <main class="Teams" >
               
                <div class="Teams__dropzoneTeams">
                    <div class="Teams__dropzoneTeams__containerLinkName">
                    <h2 class="Teams__dropzoneTeams__containerLinkName__title">{technical.year}</h2>
                    <div class="Teams__dropzoneTeams__containerLinkName__icons">
                    
                    <Link to={`/modalCommiteeEdit/${params.teams_id}/${technical.id}`}title="Editar" class="Teams__dropzoneTeams__containerLinkName__icons__btEdit"><BiEditAlt/></Link>
                    <Link to="/listTeams"  onClick={()=>handleRemoveLeague(technical.id)} class="Teams__dropzoneTeams__containerLinkName__icons__btDelete" title="Deletar"><MdDelete/></Link> 
                    </div>
                    </div>
                    <p class="Teams__dropzoneTeams__object">Técnico(a): {technical.coach}</p>
                    <p class="Teams__dropzoneTeams__object">Assistente Técnico: {technical.coach_assistent}</p>
                    <p class="Teams__dropzoneTeams__object">Supervisor: {technical.supervisor}</p>
                    <p class="Teams__dropzoneTeams__object">Personal Trainer:{technical.personal_trainer}</p>
                    <p class="Teams__dropzoneTeams__object">Fisioterapeuta:{technical.physiotheapist}</p>
                    <p class="Teams__dropzoneTeams__object">Massagista: {technical.masseuse}</p>
                    <p class="Teams__dropzoneTeams__object">Médico: {technical.doctor}</p>                     
                </div>      
        </main>
        );
     })} 
        </TeamContainer>   
        </Main>
    )
}

export default ShowTSC;