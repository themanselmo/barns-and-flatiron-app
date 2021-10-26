import styled from 'styled-components'

const Header = ({bakery, slogan}) => {
    return (
        <HeaderContainer>
            <h1>{bakery}</h1>
            <h3>{slogan}</h3>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div `
    background-color: #a39880;
    text-align: center;
`