import styled from "styled-components";

export const LoginContent = styled.div`

background-color: #E5E5E5;
width:100%;
height:100vh;



a {
    color:inherit;
    text-decoration:none;
}

* {
    padding:0;
    margin:0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
 .container{
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:100px;
  
     &__loginContainer{
        display:flex;
        background-color:#FFFFFF;
        justify-content:space-evenly;
        align-items:center;
        height:482px;
        width:1024px;

     &__logo{
         display:flex;
         flex-direction:column;
         align-items:center;
        
        &__imgLogo{
            width:180px;
            border-radius: 100%;
            border: 1px solid #110338;
        }

        &__titleLogo{
            margin-top:10px;
            font-family:"Poppins",sans-serif;
            font-weight:600;

        }
     }

     &__form{
         display:flex;
         justify-content:space-evenly;
         align-items:center;
         flex-direction:column;
         

         &__user {
            width:288px;
            height:53px;
            padding-top:34px;
            background-color:#E7E9EE;
            border:1px solid #D7D7D7;
            border-radius:5px
            font-family:"Poppins",sans-serif;
            font-weight:400;
            font-size:16px;
            padding-left:23px;
            padding-top:14px;
            padding-bottom:15px;
            
            &:focus{
                outline:0;
                box-shadow:0 0 0 0;
            }
         }

         &__pass {
            width:288px;
            height:53px;
            padding-top:34px;
            background-color:#E7E9EE;
            border:1px solid #D7D7D7;
            border-radius:5px
            font-family:"Poppins",sans-serif;
            font-weight:400;
            font-size:16px;
            padding-left:23px;
            padding-top:14px;
            padding-bottom:15px;
            margin-top:15px;
            
            &:focus{
                outline:0;
                box-shadow:0 0 0 0;
            }
         }
          
        &__btLogin{
            padding-top:34px;

            &__btHome{
                width:288px;
                height:50px;
                background-color:#1DA876;
                border:1px solid #D7D7D7;
                border-radius:5px;
                color: #FFFFFF;
                font-size:16px;
                font-weight:600;
                cursor:pointer;
               

                &:hover{
                    background-color:#363F5F;
                    transition: all ease 0.3s;
                }
              }
        }

         


     }
  }
}
`;