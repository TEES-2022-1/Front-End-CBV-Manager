import React, {useState,useEffect} from "react";
import {Main, TeamContainer} from "../listTeams/styles";
import {Link} from "react-router-dom"
import Header from "../header/header";
import { BiEditAlt} from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {BsFillFileEarmarkMedicalFill} from "react-icons/bs"
import {GiAmericanFootballPlayer} from "react-icons/gi"


import api from "../../services/api";


function ListTeams(){
    const [teams,setTeams] = useState([]);
    useEffect(()=>{
        api.get('/teams').then(response=>{
            setTeams(response.data);
          
        })
    },[])

    async function handleRemoveTeams(id){
        const deleteResponse = await api.delete(`/teams/${id}`);
        if(deleteResponse.status===204){
            setTeams(teams.filter(team=>team.id !== id))
            
        }
        window.location.reload();
    } 
    return(
        <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='#'
        linkTwo = 'Equipe' linkRedirectPlayer = '/formTeam'
        linkOne = 'Liga' linkRedirectLeague = '/'
        />
        <TeamContainer>
        <div class="title">
                <h1 class="title__name">Equipes</h1>
            
            </div>
            {teams.map(team=>{
            return(
                
        <main class="Teams" >
                <div class="Teams__dropzoneTeams">
                    <div class="Teams__dropzoneTeams__containerLinkName">
                    <h2 class="Teams__dropzoneTeams__containerLinkName__title">{team.name}</h2>
                    <div class="Teams__dropzoneTeams__containerLinkName__icons">
                    <Link to="#"  class="Teams__dropzoneTeams__containerLinkName__icons__btPlayerShow" title="Jogador(es)"><GiAmericanFootballPlayer/></Link>    
                    <Link to={`teams/${team.id}/showTSC`}  class="Teams__dropzoneTeams__containerLinkName__icons__btCommitee" title="Comissão Técnica"><BsFillFileEarmarkMedicalFill/></Link> 
                    <Link to={`/formTeamEdit/${team.id}`} title="Editar" class="Teams__dropzoneTeams__containerLinkName__icons__btEdit"><BiEditAlt/></Link>
                    <Link to="/listTeams"  onClick={()=>handleRemoveTeams(team.id)} class="Teams__dropzoneTeams__containerLinkName__icons__btDelete" title="Deletar"><MdDelete/></Link> 
                    </div>
                    </div>
                    <p class="Teams__dropzoneTeams__object">Ginásio: {team.gymnasium}</p>
                    <p class="Teams__dropzoneTeams__object">Categoria: {team.category==="MALE"?"Masculino":"Feminino"}</p>
                    <p class="Teams__dropzoneTeams__object">Ano de Fundação:{team.year_foundation}</p>
                    <div class="Teams_dropzoneTeam__object__containerLinks">
                    <Link to={`teams/${team.id}/modalCommitee`} class="Teams__dropzoneTeams__object__containerLinks__btTechnical">Cadastrar Comissão Técnica</Link>
                    <Link to="/formPlayer" class="Teams__dropzoneTeams__object__containerLinks__btPlayer">Cadastrar Jogador</Link>
                    </div>
                                
                </div>      
        </main>
        );
            })}
        </TeamContainer>   
        </Main>

    )
}

export default ListTeams;