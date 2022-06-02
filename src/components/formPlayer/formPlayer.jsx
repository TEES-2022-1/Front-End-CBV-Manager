import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Main, FormContentTeam} from "../formTeam/styles"
import Header from "../header/header"
import api from "../../services/api";


function FormPlayer(){
    
    const [name,setName] = useState('');

    const [category,setCategory] = useState();
    const [year_foundation, setYear_foundation] = useState();
    const [gymnasium, setGymnasium] = useState();
    const history = useNavigate();
     
     async function PostTeam(e){
        e.preventDefault();
         await api.post('/teams',{
            name,
            category,
            year_foundation,
            gymnasium,
        });
          
        history.push("/");
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
        <h1 class="register__registerContainer__registerHeader__title">Equipes</h1>
        
            </div>
        <form onSubmit = {PostTeam} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="nameTeam"><strong>Nome</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={name} onChange={e=>setName(e.target.value)}/>
             <label for="yearFundation"><strong>Ano de fundação</strong></label>
             <input type = "number" maxLength="4" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={year_foundation} onChange={e=>setYear_foundation(e.target.value)}/>
             </div>
             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="arena"><strong>Ginásio</strong></label>
            <input type = "text" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={gymnasium} onChange={e=>setGymnasium(e.target.value)}/>
            <label for="category"><strong>Categoria</strong></label>
             <select  class="register__registerContainer__form__inputs__inputRight__input"  id="category" name="categoria" value={category} onChange={e=>setCategory(e.target.value)}>
                 <option value= "" disabled selected>Selecione a categoria...</option>
                 <option>Masculino</option>
                 <option>Feminino</option>
             </select>   
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Cadastrar Equipe</button>
         </div>
        </form>
        </div>
    </main>
      </FormContentTeam>
    </Main>
    
    )
}

export default FormPlayer;