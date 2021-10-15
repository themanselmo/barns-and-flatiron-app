import CakeCard from "./CakeCard"

const CakeContainer = ({ cakeList, handleCakeClick }) => {
    return (
        <>
        {cakeList.map(cake => <CakeCard key={cake.flavor} cakeObj={cake} handleCakeClick={handleCakeClick}/>)}
        </>
    )
}

export default CakeContainer