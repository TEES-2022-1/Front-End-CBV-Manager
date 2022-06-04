import React from 'react'
import {Route,BrowserRouter,Routes as Router} from 'react-router-dom';


//import Header from './components/header/header'
import FormLeague from './components/formLeague/formLeague'
import FormTeam from './components/formTeam/formTeam'
//import Login from "./components/login/login"
import ListTeams from './components/listTeams/listTeams';
import ModalCommitee from './components/modalCommitee/modalCommitee';
import ShowTSC from './components/showTSC/showTSC'
import ListLeague from './components/listLeague/listLeague';
import FormLeagueEdit from './components/formLeagueEdit/formLeagueEdit';
import FormTeamEdit from './components/formTeamEdit/formTeamEdit';
import ModalCommiteeEdit from './components/modalCommiteeEdit/modalCommiteeEdit';
import FormPlayer from './components/formPlayer/formPlayer';


 function Routes(){
    return(
        <BrowserRouter>
        <Router>
        <Route element ={<ListTeams/>} path="/listTeams"/>    
        <Route element={<FormLeague/>} path="/formLeague"/>
        <Route element={<FormTeam/>} path="/formTeam"/>
        <Route element={<ModalCommitee/>} path ="/listTeams/teams/:teams_id/modalCommitee"/>
        <Route element={<ShowTSC/>} path="/listTeams/teams/:teams_id/showTSC"/>
        <Route element={<ListLeague/>} path="/"/>
        <Route element={<FormLeagueEdit/>} path="/formLeagueEdit/:id"/>
        <Route element={<FormTeamEdit/>} path ="/formTeamEdit/:id"/>
        <Route element={<ModalCommiteeEdit/>} path="/modalCommiteeEdit/:teams_id/:technical_committee_id"/>
        <Route element={<FormPlayer/>} path="/formPlayer"/>
       
        </Router>
        </BrowserRouter>
        
    )
}

export default Routes;