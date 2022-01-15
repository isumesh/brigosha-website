import styled from 'styled-components';

export const NavbarContents = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;

    .navTabs{
        float: right;
        color: #92A9BD;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        width: 100px;
        margin-right: 5px;
        width: 100px;
    }

    .navbar-links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        float: right;
        margin: 0;
        width: 50%;
        padding: 0;

        list-style: none;
    }

    .navTabs:hover{
        transform: scale(1.08);
        transition: all 0.3s ease-out;
    }

    .navIcon{
        color: black;
        text-decoration: none;
        float: left;
    }

`

const Style = {
    header: {
        height: 70,
        paddingRight: 100,
        paddingLeft: 100
    },
}

export default Style;