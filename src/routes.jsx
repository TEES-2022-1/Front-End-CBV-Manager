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
import FormPlayerEdit from './components/formPlayerEdit/formPlayerEdit';
import Classification from './components/classification/classification';
import ListPlayer from './components/listPlayer/listPlayer';


 function Routes(){
    return(
        <BrowserRouter>
        <Router>
        <Route element ={<ListTeams/>} path="/leagues/:leagues_id/teams/listTeams"/>    
        <Route element={<FormLeague/>} path="/formLeague"/>
        <Route element={<FormTeam/>} path="/leagues/:leagues_id/teams/formTeam"/>
        <Route element={<ModalCommitee/>} path ="/leagues/:leagues_id/teams/:teams_id/modalCommitee"/>
        <Route element={<ShowTSC/>} path="/teams/:teams_id/showTSC"/>
        <Route element={<ListLeague/>} path="/"/>
        <Route element={<FormLeagueEdit/>} path="/formLeagueEdit/:id"/>
        <Route element={<FormTeamEdit/>} path ="leagues/:leagues_id/teams/:id/formTeamEdit"/>
        <Route element={<ModalCommiteeEdit/>} path="/modalCommiteeEdit/:teams_id/:technical_committee_id"/>
        <Route element={<FormPlayer/>} path="/leagues/:leagues_id/teams/:teams_id/formPlayer"/>
        <Route element={<FormPlayerEdit/>} path="/leagues/:leagues_id/teams/:teams_id/formPlayerEdit"/>
        <Route element={<Classification/>} path="/classification"/>
        <Route element={<ListPlayer/>} path="/leagues/:leagues_id/teams/:teams_id/listPlayer"/>
        </Router>
        </BrowserRouter>
        
    )
}

export default Routes;