import styled from 'styled-components';

export const NavbarContents = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Raleway', sans-serif;

   .subnav-links{
      color: white;
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      height: 50px;
   }

   .active{
      color: blue;
      font-weight: bold;
   }

   .tabs{
      margin-right: 40px;
      height: 20px;
      text-decoration: none;
      color: inherit;
   }

   .tab{
      color: white;
   }
`

const Style = {
   subheader: {
      color: 'white',      
      height: 50,
      paddingRight: 100,
      paddingLeft: 100,
      backgroundColor: '#a3a3a3',
      boxShadow: "0px 0px 5px 3px grey"
   },
}

export default Style;

