const CakeDetail = ({selectedCake, handleDelete, selectedCake: {flavor, size= '6" cake', price, image, description}}) => {
    return(
        <>
            <img src={image} />
            <h1>Flavor: {flavor}</h1>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handleDelete(selectedCake)}>Delete</button>
        </>
    )
}
export default CakeDetail