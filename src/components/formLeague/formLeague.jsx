import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Main, FormContentLeague} from "../formLeague/styles"
import Header from "../header/header"
import api from "../../services/api";


function FormLeague(){
    
    const [title,setTitle] = useState('');
    const [year,setYear] = useState();
    const [category, setCategory] = useState("MALE"|"FEMALE");
    const [begin_in, setBeginIn] = useState();
    const [classificatory_limit, setClassificatoryLimit] = useState();
    const [quarter_finals_limit, setQuarterFinalsLimit] = useState();
    const [semifinals_limit, setSemifinalsLimit] = useState();
    const [finish_in, setFinishIn] = useState();
    const history = useNavigate();
     
      
     async function PostLeague(e){
        e.preventDefault();
         await api.post('/leagues',{
            title,
            year,
            category,
            begin_in,
            classificatory_limit,
            quarter_finals_limit,
            semifinals_limit,
            finish_in,
        });      
        history("/");
    } 
        
    return(
        <Main>
        <Header 
        linkThree='Estatísticas' linkRedirectStats='/Statistics'
        linkTwo = 'Jogador' linkRedirectPlayer = '/formPlayer'
        linkOne = 'Liga' linkRedirectLeague = '/formLeague'
        />
        <FormContentLeague>
    <main class="register">
        <div class="register__registerContainer">
            <div class="register__registerContainer__registerHeader">
        <h1 class="register__registerContainer__registerHeader__title">Liga</h1>
            </div>
        <form onSubmit = {PostLeague} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="nameTeam"><strong>Nome</strong></label>
             <input required type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={title} onChange={e=>setTitle(e.target.value)}/>  
             <label for="category"><strong>Categoria</strong></label>
             <select required class="register__registerContainer__form__inputs__inputRight__input"  id="category" name="categoria" value={category.value} onChange={e=>setCategory(e.target.value)}>
                 <option value = "" disabled selected>Selecione a categoria...</option>
                 <option value="MALE">MASCULINO</option>
                 <option value="FEMALE">FEMININO</option>
             </select>
             <label for="yearFundation"><strong>Ano</strong></label>  
             <input required type ="number" maxLength="4" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={year} onChange={e=>setYear(e.target.value)}/>
             <label for="arena"><strong>Início</strong></label>
            <input required type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={begin_in} onChange={e=>setBeginIn(e.target.value)}/>
             </div>
    
             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="arena"><strong>Fase de Classificação</strong></label>
            <input required type = "date"  class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={classificatory_limit} onChange={e=>setClassificatoryLimit(e.target.value)}/>
            <label for="arena"><strong>Quartas de Final</strong></label>
            <input required type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={quarter_finals_limit} onChange={e=>setQuarterFinalsLimit(e.target.value)}/>
            <label for="arena"><strong>Semifinal</strong></label>
            <input required type = "date"  class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={semifinals_limit} onChange={e=>setSemifinalsLimit(e.target.value)}/>
            <label for="arena"><strong>Final</strong></label>
            <input required type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={finish_in} onChange={e=>setFinishIn(e.target.value)}/>
            
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Cadastrar Equipe</button>
         </div>
        </form>
        </div>
    </main>
      </FormContentLeague>
    </Main>
    
    )
}

export default FormLeague;