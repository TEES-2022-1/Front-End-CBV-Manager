import styled from "styled-components";

export const Main = styled.div`

background-color: #E5E5E5;
width:100%;
height:100vh;
`;

export const TeamContainer = styled.div`
 background-color: #E5E5E5;

 .title{
     margin-left:20px;
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     align-items:center;

     &__linkTeams{
         margin-right:40px;
         text-decoration:none;
         color:#0000FF;
         font-size:18px;
     }
 }
 .Teams{
    margin-left:20px;
    border:5px;
    border-radius:5px;
    margin-top:10px;
   

    &__dropzoneTeams{
        background-color:#FFFFFF;
        width:1310px;
        height:180px;
        display:flex;
        flex-direction:column;
        line-height:0.1;

        &__containerLinkName{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            margin-left:10px;

            &__icons{
               display:flex;
               flex-direction:row;
                padding-right:40px;
                padding-top:10px;
                font-size:20px;
               
               
                
                &__btCommitee{
                    margin-right:20px;
                    color:black;

                }
                &__btEdit{
                    margin-right:20px;
                    color:black;
                }

                &__btDelete{
                    color:black;
                }
                
                &__btPlayerShow{
                    color:black;
                    margin-right:20px;

                }
            } 
        }

        &__object{
            margin-left:10px;
            line-height:0.4;
          
          
              &__containerLinks{
                  display:flex;
                 
                 
            
            &__btTechnical{
                font-size:16px;
                text-decoration:none;
                margin-left:10px;
                color:blue;
               
                
            }

            &__btPlayer{
                font-size:16px;
                text-decoration:none;
                margin-left:10px;
                color:blue; 
                
            }
         
         } 
        }
    }
 }
  

`;