import React, {useState} from "react";
import {useNavigate,useParams} from 'react-router-dom';
import {Main, FormContentTeam} from "../modalCommitee/styles"
import Header from "../header/header"
import api from "../../services/api";


function ModalCommitee(){
    
    const [coach,setCoach] = useState();
    const [coach_assistant, setCoachAssistent] = useState();
    const [supervisor, setSupervisor] = useState();
    const [personal_trainer, setPersonalTrainer] = useState();
    const [physiotherapist, setPhysiotherapist] = useState();
    const [masseuse, setMasseuse] = useState();
    const [doctor,setDoctor] = useState();
    const history = useNavigate();
    const params = useParams(); 
    
     
  
     async function PostTechnicalCommitee(e){
        e.preventDefault();
        try{      
          await api.post(`leagues/${params.leagues_id}/teams/${params.teams_id}/technical_committee`,{
            coach,
            coach_assistant,
            supervisor,
            personal_trainer,
            physiotherapist,
            masseuse,
            doctor,
        });
          
        history(`/leagues/${params.leagues_id}/teams/${params.teams_id}/showTSC`);
    }catch(error){
        const message = error.response.status
        if(message === 500){
            alert("Houve um erro ao cadastrar a comissão técnica!")
        }
    } 
} 
   
    return(
        <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='/Statistics'
        linkTwo = 'Jogador' linkRedirectPlayer = '/formPlayer'
        linkOne = 'Liga' linkRedirectLeague = '/formLeague'
        />
        <FormContentTeam>
    <main class="register">
        <div class="register__registerContainer">
            <div class="register__registerContainer__registerHeader">
        <h1 class="register__registerContainer__registerHeader__title">Comissão Técnica</h1>
        
            </div>
        <form onSubmit = {PostTechnicalCommitee} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="nameTeam"><strong>Técnico(a)</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={coach} onChange={e=>setCoach(e.target.value)}/>
             <label for="yearFundation"><strong>Técnico Assistente</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={coach_assistant} onChange={e=>setCoachAssistent(e.target.value)}/>
             <label for="yearFundation"><strong>Supervisor</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={supervisor} onChange={e=>setSupervisor(e.target.value)}/>
             <label  for="yearFundation"><strong>Personal Trainer</strong></label>
             <input required type = "type" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={personal_trainer} onChange={e=>setPersonalTrainer(e.target.value)}/>
             </div>

             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="gymnasium"><strong>Fisioterapeuta</strong></label>
            <input required type = "text" class="register__registerContainer__form__inputs__inputRight__input"  id="gymnasium" value={physiotherapist} onChange={e=>setPhysiotherapist(e.target.value)}/>
            <label for="masseuse"><strong>Massagista</strong></label>
            <input required type="text" class="register__registerContainer__form__inputs__inputRight__input" id="masseuse" value={masseuse} onChange={e=>setMasseuse(e.target.value)}/>
            <label for="doctor"><strong>Médico</strong></label>
            <input required type="text" class="register__registerContainer__form__inputs__inputRight__input" id="doctor" value={doctor} onChange={e=>setDoctor(e.target.value)}/>
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Cadastrar Comissão Técnica</button>
         </div>
        </form>
        </div>
    </main>
      </FormContentTeam>
    </Main>
    
    )
}

export default ModalCommitee;