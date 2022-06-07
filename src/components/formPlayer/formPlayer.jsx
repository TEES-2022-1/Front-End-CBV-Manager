import React, {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {Main, FormContentTeam} from "../formTeam/styles"
import Header from "../header/header"
import api from "../../services/api";


function FormPlayer(){
    
    const [name,setName] = useState('');
    const [document,setDocument] = useState();
    const [birthday,setBirthday] = useState();
    const [shirt_number, setShirtNumber] = useState();
    const history = useNavigate();
    const params = useParams();
     
     async function PostPlayer(e){
        e.preventDefault();
         await api.post(`/leagues/${params.leagues_id}/teams/${params.teams_id}/players`,{
            name,
            document,
            birthday,
            shirt_number,
        });
          
    history(`/leagues/${params.leagues_id}/teams/${params.teams_id}/listPlayer`);
 
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
        <h1 class="register__registerContainer__registerHeader__title">Jogador</h1>
        
            </div>
        <form onSubmit = {PostPlayer} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="nameTeam"><strong>Nome</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={name} onChange={e=>setName(e.target.value)}/>
             <label for="yearFundation"><strong>RG</strong></label>
             <input type = "number" maxLength={4} class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={document} onChange={e=>setDocument(e.target.value)}/>
             </div>
             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="arena"><strong>Data de Nascimento</strong></label>
            <input type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={birthday} onChange={e=>setBirthday(e.target.value)}/>
            <label for="arena"><strong>Número</strong></label>
            <input type = "number" maxLength={4} class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={shirt_number} onChange={e=>setShirtNumber(e.target.value)}/>   
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Cadastrar Jogador</button>
         </div>
        </form>
        </div>
    </main>
      </FormContentTeam>
    </Main>
    
    )
}

export default FormPlayer;