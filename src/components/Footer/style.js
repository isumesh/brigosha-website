import styled from 'styled-components';

export const FooterContents = styled.div`
    padding: 0;
    background-color: pink;
    
    .company-logo{
        height: 50px;
        width: 120px;
        margin-left: 15px;
    }

    .address{
        padding-top: 10px;
        background-color: red;
        width: 150px;
    }

    .company-info{
        padding-left: 100px;
    }

    .footer-links{
        background-color: yellow;
        padding-top: 45px;
    }
`

const Style = {
    footer: {
        backgroundColor: '#a3a3a3',
        padding: 0
    }
}

export default Style;