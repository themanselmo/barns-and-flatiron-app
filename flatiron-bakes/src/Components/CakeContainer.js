import CakeCard from "./CakeCard"
import styled from "styled-components"

const CakeContainer = ({ cakeList, handleCakeClick }) => {
    return (
        <CakeContainerContainer>
        {cakeList.map(cake => <CakeCard key={cake.flavor} cakeObj={cake} handleCakeClick={handleCakeClick}/>)}
        </CakeContainerContainer>
    )
}

export default CakeContainer

const CakeContainerContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`