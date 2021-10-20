import { useState, useEffect } from "react"

const Form = ({ handleAddCake }) => {
    // const [flavor, setFlavor] = useState('')
    // const [image, setImage] = useState('')
    // const [size, setSize] = useState('')
    // const [price, setPrice] = useState('')

    const [formData, setFormData] = useState({
        flavor: '',
        image: '',
        size: '',
        price: ''
    })

    useEffect(() => {
        console.log(formData)

        return () => {
            console.log('form removed')
        }
    }, [formData])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/cakes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            handleAddCake(formData)
            setFormData({
                flavor:'',
                size:'',
                image:'',
                price:''
            })
        })
    }

    // const handleFlavor = (e) => {
    //     setFlavor(e.target.value)
    // }

    // const handleImage = (e) => {
    //     setImage(e.target.value)
    // }

    // const handleSize = (e) => {
    //     setSize(e.target.value)
    // }

    // const handlePrice = (e) => {
    //     setPrice(e.target.value)
    // }

    return (
        <>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
                <label>Flavor</label>
                <input
                type="text"
                name="flavor"
                aria-label="title"
                value={formData.flavor}
                onChange={handleChange}
                >
                </input>
                <label>Image</label>
                <input
                type="text"
                name="image"
                aria-label="image"
                value={formData.image}
                onChange={handleChange}
                >
                </input>
                <label>Size</label>
                <input
                type="text"
                name="size"
                aria-label="size"
                value={formData.size}
                onChange={handleChange}
                >
                </input>
                <label>Price</label>
                <input
                type="text"
                name="price"
                aria-label="price"
                value={formData.price}
                onChange={handleChange}
                >
                </input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form