import { Header as AntHeader } from 'antd/lib/layout/layout'
import Style from './style';

const Header = () => {
    return (
        <AntHeader style={Style.header}>
            Header content goes here
        </AntHeader>
    )
}

export default Header
