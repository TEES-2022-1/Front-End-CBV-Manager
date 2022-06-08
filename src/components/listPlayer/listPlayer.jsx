import React, {useEffect,useState} from 'react';
import api from '../../services/api';
import {useParams,Link} from "react-router-dom";
import Header from '../header/header';
import {Main, PlayerContainer} from "./styles"
import { BiEditAlt} from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Moment from "moment";


function ListPlayer(){
    const params = useParams();
    const [player,setPlayer] = useState([]);

    useEffect(()=>{
        api.get(`/leagues/${params.leagues_id}/teams/${params.teams_id}/players`).then(response=>{
            setPlayer(response.data);    
        })
    },[params.leagues_id, params.teams_id])

    async function handleRemovePlayer(id){
        const deleteResponse = await api.delete(`/leagues/${params.leagues_id}/teams/${params.teams_id}/players/${id}`);
        if(deleteResponse.status===204){
            
            setPlayer(player.filter(leagues=>leagues.id !== id))
            
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
        <PlayerContainer>
        <div class="title">
                <h1 class="title__name">Jogador(es)</h1>
                <Link to={`/leagues/${params.leagues_id}/teams/listTeams`} class="title__linkTeams" >Voltar</Link>
            
            </div>
            {player.map(players=>{
            return(
                
        <main class="Teams" >
                <div class="Teams__dropzoneTeams">
                    <div class="Teams__dropzoneTeams__containerLinkName">
                    <h2 class="Teams__dropzoneTeams__containerLinkName__title">{players.name}</h2>
                    <div class="Teams__dropzoneTeams__containerLinkName__icons">
                    <Link to={`/leagues/${params.leagues_id}/teams/${players.id}/formPlayerEdit`} title="Editar" class="Teams__dropzoneTeams__containerLinkName__icons__btEdit"><BiEditAlt/></Link>
                    <Link to={`/leagues/${params.leagues_id}/teams/${params.teams_id}/listPlayer`}  onClick={()=>handleRemovePlayer(players.id)} class="Teams__dropzoneTeams__containerLinkName__icons__btDelete" title="Deletar"><MdDelete/></Link> 
                    </div>
                    </div>
                    <p class="Teams__dropzoneTeams__object">Data de Nascimento: {Moment(players.birthday).format('DD/MM/YYYY')}</p>
                    <p class="Teams__dropzoneTeams__object">RG:{players.document}</p>
                    <p class="Teams__dropzoneTeams__object">Número:{players.shirt_number}</p>
                    <div class="Teams_dropzoneTeam__object__containerLinks">
                    </div>               
                </div>      
        </main>
        );
            })}
        </PlayerContainer>   
        </Main>
    )

}

export default ListPlayer;