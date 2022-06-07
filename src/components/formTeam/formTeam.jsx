import React, {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {Main, FormContentTeam} from "../formTeam/styles"
import Header from "../header/header"
import api from "../../services/api";


function FormTeam(){
    
    const [name,setName] = useState('');
    const [category, setCategory] = useState("MALE"|"FEMALE");
    const [year_foundation, setYear_foundation] = useState();
    const [gymnasium, setGymnasium] = useState();
    const [affiliated_federation_in,setAffiliated] = useState();
    const history = useNavigate();
    const params = useParams(); 
    
     
  
     async function PostTeam(e){
        e.preventDefault();
         await api.post(`/leagues/${params.leagues_id}/teams`,{
            name,
            category,
            year_foundation,
            gymnasium,
            affiliated_federation_in
        });
          
        history(`/leagues/${params.leagues_id}/teams/listTeams`);
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
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={name} onChange={e=>setName(e.target.value)}/>
             <label for="yearFundation"><strong>Ano de fundação</strong></label>
             <input required type ="number" maxLength="4" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={year_foundation} onChange={e=>setYear_foundation(e.target.value)}/>
             <label for="afiliationDate"><strong>Data de Afiliação</strong></label>
             <input required type ="date" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={affiliated_federation_in} onChange={e=>setAffiliated(e.target.value)}/>
             </div>
             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="arena"><strong>Ginásio</strong></label>
            <input required type = "text" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={gymnasium} onChange={e=>setGymnasium(e.target.value)}/>
            <label for="category"><strong>Categoria</strong></label>
             <select required class="register__registerContainer__form__inputs__inputRight__input"  id="category" name="categoria" value={category.value} onChange={e=>setCategory(e.target.value)}>
                 <option value= "" disabled selected>Selecione a categoria...</option>
                 <option value="MALE">MASCULINO</option>
                 <option value="FEMALE">FEMININO</option>
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

export default FormTeam;