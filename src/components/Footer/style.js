import styled from 'styled-components';

export const FooterContents = styled.div`
    padding: 0;
    
    .company-logo{
        height: 50px;
        width: 150px;

    }

    .address{
        padding-top: 10px;
        width: 150px;
    }

    .company-info{
        padding-left: 100px;
    }

    .footer-links{
        padding-top: 45px;
    }

    .weLinks, .iotLinks, .automotiveLinks{
        padding-left: 30px;
    }

    .list{
        list-style: none;
        padding-left: 0;
    }
    
    .links{
        color: white;
        margin-top: 10px;
    }
`

const Style = {
    footer: {
        backgroundColor: '#cfcfcf',
        padding: 0
    }
}

export default Style;