import React, {useState} from "react";
import {useNavigate,useParams, Link} from 'react-router-dom';
import {Main, FormContentLeague} from "../formResultEdit/styles"
import Header from "../header/header"
import api from "../../services/api";


function FormResultEdit(){
    
    const [result_host,setResultHost] = useState();
    const [result_guest,setResultGuest] = useState();
    const [set1_points_host,setSet1H] = useState();
    const [set1_points_guest,setSet1G] = useState();
    const [set2_points_host,setSet2H] = useState();
    const [set2_points_guest,setSet2G] = useState();
    const [set3_points_host,setSet3H] = useState();
    const [set3_points_guest,setSet3G] = useState();
    const [set4_points_host,setSet4H] = useState();
    const [set4_points_guest,setSet4G] = useState();
    const [set5_points_host,setSet5G] = useState();
    const [set5_points_guest,setSet5H] = useState();
    
    
    const history = useNavigate();
    const params = useParams();
       
     async function PutLeague(e){
        e.preventDefault();
         await api.put(`/leagues/${params.leagues_id}/confrontations/classificatory/${params.confrontation_id}`,{
            result_host,
            result_guest,
            set1_points_host,
            set1_points_guest,
            set2_points_host,
            set2_points_guest,
            set3_points_host,
            set3_points_guest,
            set4_points_host,
            set4_points_guest,
            set5_points_host,
            set5_points_guest,
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
        <h1 class="register__registerContainer__registerHeader__title">Resultados</h1>
            </div>
        <form onSubmit = {PutLeague} class="register__registerContainer__form">
         <div class="register__registerContainer__form__inputs">
             <div class="register__registerContainer__form__inputs__inputLeft">
             <label for="hostPoints"><strong>Pontos Mandante</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="hostPoints"  onChange={e=>setResultHost(e.target.value)}/>  
             <label for="set1Host"><strong>Mandante - Set 1</strong></label>
             <input type = "number" class="register__registerContainer__form__inputs__inputLeft__input" id="set1Host" value={set1_points_host} onChange={e=>setSet1H(e.target.value)}/>  
             <label for="set2Host"><strong>Mandante - Set 2</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="set2Host" value={set2_points_host} onChange={e=>setSet2H(e.target.value)}/>  
             <label for="set3Host"><strong>Mandante - Set 3</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="set3Host" value={set3_points_host} onChange={e=>setSet3H(e.target.value)}/>  
             <label for="set4Host"><strong>Mandante - Set 4</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="set4Host" value={set4_points_host} onChange={e=>setSet4H(e.target.value)}/>  
             <label for="set5Host"><strong>Mandante - Set 5</strong></label>
             <input type = "text" class="register__registerContainer__form__inputs__inputLeft__input" id="set5Host" value={set5_points_host} onChange={e=>setSet5H(e.target.value)}/>  
             </div>
    
             <div class="register__registerContainer__form__inputs__inputRight">
            <label for="guestPoints"><strong>Pontos Visitante</strong></label>
            <input type = "number"  class="register__registerContainer__form__inputs__inputRight__input"  id="guestPoints" value={result_guest} onChange={e=>setResultGuest(e.target.value)}/>
            <label for="set1Guest"><strong>Visitante - Set 1</strong></label>
            <input type = "number"  class="register__registerContainer__form__inputs__inputRight__input"  id="set1Guest" value={set1_points_guest} onChange={e=>setSet1G(e.target.value)}/>
            <label for="set2Guest"><strong>Visitante - Set 2</strong></label>
            <input type = "number"  class="register__registerContainer__form__inputs__inputRight__input"  id="set2Guest" value={set2_points_guest} onChange={e=>setSet2G(e.target.value)}/>
            <label for="set3Guest"><strong>Visitante - Set 3</strong></label>
            <input type = "number"  class="register__registerContainer__form__inputs__inputRight__input"  id="set3Guest" value={set3_points_guest} onChange={e=>setSet3G(e.target.value)}/>
            <label for="set4Guest"><strong>Visitante - Set 4</strong></label>
            <input type = "number"  class="register__registerContainer__form__inputs__inputRight__input"  id="set4Guest" value={set4_points_guest} onChange={e=>setSet4G(e.target.value)}/>
            <label for="set5Guest"><strong>Visitante - Set 5</strong></label>
            <input type = "number"  class="register__registerContainer__form__inputs__inputRight__input"  id="set5Guest" value={set5_points_guest} onChange={e=>setSet5G(e.target.value)}/>
            
            </div>
            </div> 
         <div class="register__registerContainer__form__bt">
             <button type = "submit" class="register__registerContainer__form__bt__btRegister">Registrar</button>
             <Link to="/" class="register__registerContainer__form__bt__btCancel">Cancelar</Link>
         </div>
        </form>
        </div>
    </main>
      </FormContentLeague>
    </Main>
    
    )
}

export default FormResultEdit;