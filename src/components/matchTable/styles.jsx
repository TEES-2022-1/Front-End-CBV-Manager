import styled from "styled-components";

export const Main = styled.div`
    width:100%;
    height:100vh;
`;

export const MatchContent = styled.div`
margin-left:10px;
    .content{
        font-size:20px;

        &__info{
            display:flex;
            flex-direction:row;
            justify-content:space-around;

          &__title{
            font-style:italic;
          }
        }

        &__card{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          font-size:15px;

          &__teams{
            display:flex;
            flex-direction:column;
            align-items:center;
            padding-top:10px;
            
          
            &__icons{
              display:flex;
              flex-direction:row;
              margin-left:10px;
              justify-content:space-between;
              height:15px;
              margin-top:2px;
             
              &__edit{
                padding-right:10px;
                color:#000000;
              }

              &__delete{
                padding-right:10px;
                color:#000000;
              }
            }

            &__matches{
              display:flex;
              flex-direction:row;
              align-items:center;
              padding-bottom:50px;
              margin-bottom:20px;

              &__setsPoints{
                display:flex;
                flex-direction:column;
                justify-content:space-between;
             
                
               
                span{
                  padding-top:12px;
                  padding-left:20px;
                  padding-right:20px;
                }
                
              }
             
              
            }
          }
        }
        
    }
`;