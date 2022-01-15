import styled from 'styled-components';

export const NavbarContents = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;

    .navTabs{
        float: right;
        color: #92A9BD;
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        margin-right: 8px;
        margin-bottom: -2px;
        width: 100px;
    }

    .companyIcon{
        height: 40px;
        width 150px;
    }

    .navbar-links{
        display: flex;
        flex-direction: row;
        justify-content: end;
        height: 70px;
        align-items: center;
        float: right;
        margin: 0;
        width: 60%;
        padding: 0;
        list-style: none;
    }

    .active{
        border-bottom: 3px solid blue;
    }

    .navIcon{
        color: black;
        text-decoration: none;
        float: left;
        width: auto;
    }

`

const Style = {
    header: {
        height: 70,
        paddingRight: 100,
        paddingLeft: 100,
        backgroundColor: 'white'
    },
}

export default Style;