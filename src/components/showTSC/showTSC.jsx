import React, {useState,useEffect} from "react";
import {Main, TeamContainer} from "../showTSC/styles";
import {Link,useParams} from "react-router-dom"
import Header from "../header/header";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import api from "../../services/api";




function ShowTSC(){
  const [technicalCommitee,setTechnicalCommitee] = useState([]);
  const params = useParams();
 
  useEffect(()=>{
    const objectArray = [];
    api.get(`/leagues/${params.leagues_id}/teams/${params.teams_id}/technical_committee`).then(response=>{
        objectArray.push(response.data);
        setTechnicalCommitee(objectArray);
    })
},[params.leagues_id, params.teams_id ])


    async function handleRemoveLeague(id){
        const deleteResponse = await api.delete(`/leagues/${params.leagues_id}/teams/${params.teams_id}/technical_committee`);
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
        {technicalCommitee.map((technical)=>(
        
        <main class="Teams" >
                <div class="Teams__dropzoneTeams">
                    <div class="Teams__dropzoneTeams__containerLinkName">
                    <div class="Teams__dropzoneTeams__containerLinkName__icons">
                    <Link to={`/leagues/${params.leagues_id}/teams/${params.teams_id}/modalCommiteeEdit`} title="Editar" class="Teams__dropzoneTeams__containerLinkName__icons__btEdit"><BiEditAlt/></Link>
                    <Link to={`/leagues/${params.leagues_id}/teams/${params.teams_id}/modalCommiteeEdit`}  onClick={()=>handleRemoveLeague(technical.id)} class="Teams__dropzoneTeams__containerLinkName__icons__btDelete" title="Deletar"><MdDelete/></Link> 
                    </div>
                    </div>
                    <p class="Teams__dropzoneTeams__object"><strong>Técnico(a)</strong>: {technical.coach}</p>
                    <p class="Teams__dropzoneTeams__object"><strong>Assistente Técnico:</strong> {technical.coach_assistant}</p>
                    <p class="Teams__dropzoneTeams__object"><strong>Supervisor:</strong> {technical.supervisor}</p>
                    <p class="Teams__dropzoneTeams__object"><strong>Personal Trainer:</strong> {technical.personal_trainer}</p>
                    <p class="Teams__dropzoneTeams__object"><strong>Fisioterapeuta:</strong> {technical.physiotherapist}</p>
                    <p class="Teams__dropzoneTeams__object"><strong>Massagista:</strong> {technical.masseuse}</p>
                    <p class="Teams__dropzoneTeams__object"><strong>Médico:</strong> {technical.doctor}</p>                     
                </div>      
        </main>
       
            ))} 
        </TeamContainer>   
        </Main>
    )
}

export default ShowTSC;