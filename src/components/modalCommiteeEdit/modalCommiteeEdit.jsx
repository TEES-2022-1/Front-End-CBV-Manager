import React, {useState,useEffect} from "react";
import {useNavigate,useParams, Link} from 'react-router-dom';
import {Main, FormContentTeam} from "../modalCommiteeEdit/styles"
import Header from "../header/header"
import api from "../../services/api";


function ModalCommiteeEdit(){
    
    const [coach,setCoach] = useState();
    const [coach_assistent, setCoachAssistent] = useState();
    const [supervisor, setSupervisor] = useState();
    const [personal_trainer, setPersonalTrainer] = useState();
    const [physiotherapist, setPhysiotherapist] = useState();
    const [masseuse, setMasseuse] = useState();
    const [doctor,setDoctor] = useState();
    const [year,setYear] = useState();
    const history = useNavigate();
   
   
    useEffect(() => {
        GetTechnicalCommitee();
      },)
  

    function GetTechnicalCommitee(){
        const params = useParams();
        useEffect(()=>{
          api.get(`/teams/${params.teams_id}/technical_committee`).then(response=>{
              setCoach(response)
              setCoachAssistent(response[0].coach_assistent)
              setSupervisor(response[0].supervisor)
              setPersonalTrainer(response[0].personal_trainer)
              setPhysiotherapist(response[0].physiotherapist)
              setMasseuse(response[0].masseuse)
              setDoctor(response[0].doctor)
              setYear(response[0].year)  
          })
      },)
     
    
     async function PutTechnicalCommitee(e){
        e.preventDefault();
        
          const response = await api.put(`teams/${params.teams_id}/technical_committee/${params.technical_committee_id}`,{
            coach,
            coach_assistent,
            supervisor,
            personal_trainer,
            physiotherapist,
            masseuse,
            doctor,
            year,
        });
        GetTechnicalCommitee()
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
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={coach_assistent} onChange={e=>setCoachAssistent(e.target.coach_assistent)}/>
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
             <Link to="/listTeams" class="register__registerContainer__form__bt__btCancel">Cancelar</Link>
         </div>
        </form>
        </div>
    </main>
      </FormContentTeam>
    </Main>
    
    )
}
}
export default ModalCommiteeEdit;