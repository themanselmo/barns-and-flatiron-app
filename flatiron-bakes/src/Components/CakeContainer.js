import CakeCard from "./CakeCard"

const CakeContainer = (props) => {
    return (
        <>
        {props.cakeList.map(cake => <CakeCard key={cake.flavor} cakeObj={cake}/>)}
        </>
    )
}

export default CakeContainer