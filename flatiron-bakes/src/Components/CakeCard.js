import { useState } from 'react';
import { Link } from 'react-router-dom';


function CakeCard({cakeObj, cakeObj:{flavor,size='6" cake',price}}) {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked((currentLike) => !currentLike)
    }

    return (
        <div>
            <Link to={`/cakes/${cakeObj.id}`}> <h1>Flavor: {flavor}</h1> </Link>
            <p>Size: {size}</p>
            <p>Price: ${price}</p>
            <p onClick={handleLike}>{liked ? '♥':'♡'}</p>
        </div>
    );
}

export default CakeCard;