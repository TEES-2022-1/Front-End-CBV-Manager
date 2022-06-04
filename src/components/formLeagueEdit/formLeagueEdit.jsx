import React, {useState} from "react";
import {useNavigate,useParams, Link} from 'react-router-dom';
import {Main, FormContentLeague} from "../formLeagueEdit/styles"
import Header from "../header/header"
import api from "../../services/api";


function FormLeagueEdit(){
    
    const [title,setTitle] = useState('');
    const [year,setYear] = useState();
    const [category, setCategory] = useState("MALE"|"FEMALE");
    const [begin_in, setBeginIn] = useState();
    const [classificatory_limit, setClassificatoryLimit] = useState();
    const [quarter_finals_limit, setQuarterFinalsLimit] = useState();
    const [semifinals_limit, setSemifinalsLimit] = useState();
    const [finish_in, setFinishIn] = useState();
    const history = useNavigate();
    const params = useParams();
       
     async function PutLeague(e){
        e.preventDefault();
         await api.put(`/competitions/${params.id}`,{
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
        <h1 class="register__registerContainer__registerHeader__title">Editar Liga</h1>
            </div>
        <form onSubmit = {PutLeague} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="nameTeam"><strong>Nome</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="nameTeam" value={title} onChange={e=>setTitle(e.target.value)}/>  
             <label for="category"><strong>Categoria</strong></label>
             <select required class="register__registerContainer__form__inputs__inputRight__input"  id="category" name="categoria" value={category.value} onChange={e=>setCategory(e.target.value)}>
                 <option value = "" disabled selected>Selecione a categoria...</option>
                 <option value="MALE">MASCULINO</option>
                 <option value="FEMALE">FEMININO</option>
             </select>
             <label for="yearFundation"><strong>Ano</strong></label>  
             <input type ="number" maxLength="4" class="register__registerContainer__form__inputs__inputLeft__input" id="yearFundation" value={year} onChange={e=>setYear(e.target.value)}/>
             <label for="arena"><strong>Início</strong></label>
            <input type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={begin_in} onChange={e=>setBeginIn(e.target.value)}/>
             </div>
    
             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="arena"><strong>Fase de Classificação</strong></label>
            <input type = "date"  class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={classificatory_limit} onChange={e=>setClassificatoryLimit(e.target.value)}/>
            <label for="arena"><strong>Quartas de Final</strong></label>
            <input type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={quarter_finals_limit} onChange={e=>setQuarterFinalsLimit(e.target.value)}/>
            <label for="arena"><strong>Semifinal</strong></label>
            <input type = "date"  class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={semifinals_limit} onChange={e=>setSemifinalsLimit(e.target.value)}/>
            <label for="arena"><strong>Final</strong></label>
            <input type = "date" class="register__registerContainer__form__inputs__inputRight__input"  id="arena" value={finish_in} onChange={e=>setFinishIn(e.target.value)}/>
            
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Atualizar Liga</button>
             <Link to="/" class="register__registerContainer__form__bt__btCancel">Cancelar</Link>
         </div>
        </form>
        </div>
    </main>
      </FormContentLeague>
    </Main>
    
    )
}

export default FormLeagueEdit;