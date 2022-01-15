import styled from 'styled-components';

export const NavbarContents = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;

   .subnav-links{
         display: flex;
         justify-content: left;
         align-items: center;
         margin: 0;
         padding: 0;
         list-style: none;
         height: 50px;
   }

   .tabs{
      margin-right: 40px;
      text-decoration: none;
      color: white;
   }

   .tab:hover{
      transform: scale(1.05);
      transition: all 0.3s ease-out;
   }
`

const Style = {
   subheader: {
        height: 50,
        paddingRight: 100,
        paddingLeft: 100,
        backgroundColor: '#a3a3a3'
    },
}

export default Style;

