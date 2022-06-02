import styled from "styled-components";

export const Main = styled.div`


`;

export const ContentTSC = styled.div`

 .infoCommitee{
     display:flex;
     justify-content:center;
     align-items:center;
     width:100%;
     height:100vh;
 
   

    &__container{
           font-size:20px;
          
           
        &__header{
            &__rightBox{
                display:flex;
                flex-direction:column;
                align-items:left;
                justify-content:left;

            }

            &__leftBox{
                display:flex;
                flex-direction:column;
                align-items:right;
            }
        }
    }
 }



`;