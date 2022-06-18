import React, {useState} from "react";
import {useNavigate,useParams, Link} from 'react-router-dom';
import {Main, FormContentTeam} from "../modalCommiteeEdit/styles"
import Header from "../header/header"
import api from "../../services/api";


function ModalCommiteeEdit(){
    
    const [coach,setCoach] = useState();
    const [coach_assistant, setCoachAssistent] = useState();
    const [supervisor, setSupervisor] = useState();
    const [personal_trainer, setPersonalTrainer] = useState();
    const [physiotherapist, setPhysiotherapist] = useState();
    const [masseuse, setMasseuse] = useState();
    const [doctor,setDoctor] = useState();
    const [year,setYear] = useState();
    const history = useNavigate();
    const params = useParams();
   
      
     async function PutTechnicalCommitee(e){
        e.preventDefault();
        
          const response = await api.put(`/leagues/${params.leagues_id}/teams/${params.teams_id}/technical_committee`,{
            coach,
            coach_assistant,
            supervisor,
            personal_trainer,
            physiotherapist,
            masseuse,
            doctor,
            year,
        });
   
        history("/listTeams");
        console.log(response.data)
 
} 
   
    return(
        <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='/Statistics'
        linkTwo = 'Jogador' linkRedirectPlayer = '#'
        linkOne = 'Liga' linkRedirectLeague = '/formLeague'
        />
        <FormContentTeam>
    <main class="register">
        <div class="register__registerContainer">
            <div class="register__registerContainer__registerHeader">
        <h1 class="register__registerContainer__registerHeader__title">Editar Comissão Técnica</h1>
        
            </div>
        <form onSubmit = {PutTechnicalCommitee} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="nameTeam"><strong>Técnico(a)</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={coach} onChange={e=>setCoach(e.target.coach)}/>
             <label for="yearFundation"><strong>Técnico Assistente</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={coach_assistant} onChange={e=>setCoachAssistent(e.target.coach_assistant)}/>
             <label for="yearFundation"><strong>Supervisor</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={supervisor} onChange={e=>setSupervisor(e.target.supervisor)}/>
             <label  for="yearFundation"><strong>Personal Trainer</strong></label>
             <input required type = "type" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={personal_trainer} onChange={e=>setPersonalTrainer(e.target.personal_trainer)}/>
             </div>

             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="gymnasium"><strong>Fisioterapeuta</strong></label>
            <input required type = "text" class="register__registerContainer__form__inputs__inputRight__input"  id="gymnasium" value={physiotherapist} onChange={e=>setPhysiotherapist(e.target.physiotherapist)}/>
            <label for="masseuse"><strong>Massagista</strong></label>
            <input required type="text" class="register__registerContainer__form__inputs__inputRight__input" id="masseuse" value={masseuse} onChange={e=>setMasseuse(e.target.masseuse)}/>
            <label for="doctor"><strong>Médico</strong></label>
            <input required type="text" class="register__registerContainer__form__inputs__inputRight__input" id="doctor" value={doctor} onChange={e=>setDoctor(e.target.doctor)}/>
            <label for="doctor"><strong>Ano</strong></label>
            <input required type="number" class="register__registerContainer__form__inputs__inputRight__input" id="year" value={year} onChange={e=>setYear(e.target.value)}/>      
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Editar Comissão Técnica</button>
             <Link to={`/leagues/${params.leagues_id}/teams/${params.teams_id}/showTSC`} class="register__registerContainer__form__bt__btCancel">Cancelar</Link>
         </div>
        </form>
        </div>
    </main>
      </FormContentTeam>
    </Main>
    
    )
}

export default ModalCommiteeEdit;