import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CakeCard({cakeObj, cakeObj:{flavor,size='6" cake',price}}) {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked((currentLike) => !currentLike)
    }

    return (
        <CakeCardContainer>
            <Link to={`/cakes/${cakeObj.id}`}> <h1>Flavor: {flavor}</h1> </Link>
            <p>Size: {size}</p>
            <p>Price: ${price}</p>
            <p onClick={handleLike}>{liked ? '♥':'♡'}</p>
        </CakeCardContainer>
    );
}

export default CakeCard;

const CakeCardContainer = styled.div `
    width: 400px;
    height: 210px;
    box-shadow: 5px 5px 5px 1px grey;

    :hover {
       width:450px;
       height: 250px;
    }

    p:last-child {
        text-align: center;
    }
`