
import CakeContainer from "./CakeContainer"
import Header from "./Header"
import Search from "./Search"
import CakeDetail from "./CakeDetail"
import Form from "./Form"

import { useState, useEffect } from "react"
// import {cakes} from "../data/cakesData"

function App() {

  const [search, setSearch] = useState('')
  const [cakes, setCakes] = useState([])
  const [cakeList, setCakeList] = useState([])
  const [selectedCake, setSelectedCake] = useState(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/cakes')
      .then(res => res.json())
      .then(cakes => {
        setCakes(cakes)
        setCakeList(cakes)
        console.log(cakes)
      })
  }, [])

  const handleDelete = (deletedCake) => {
    console.log(deletedCake)
    fetch(`http://localhost:3000/cakes/${deletedCake.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const filteredCakes = cakes.filter(cake => cake.id !== deletedCake.id)
      setCakes(filteredCakes)
      setCakeList(filteredCakes)
      setSelectedCake(null)
    })
  }

  function handleUpdate(updatedCake) {
    fetch(`http://localhost:3000/cakes/${updatedCake.id}`,{
      method: "PATCH",
      body: !updatedCake.like
    })
      .then(res => res.json())
      .then(cakeData => {
        const updatedCakes = cakes.map(item => {
          if(item.id === cakeData.id){
            return cakeData
          } else {
            return item
          }
        })
        setCakes(updatedCakes)
      })
  }


  function handleSearch(event) {
    setSearch(event.target.value)
    setCakeList(cakes.filter(cake => cake.flavor.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const handleCakeClick = (cake) => {
    console.log(cake)
    setSelectedCake(cake)
  }

  const handleAddCake = (cake) => {
    setCakeList([cake, ...cakeList])
  }

  return (
    <div className="App">
      <Header bakery={"flatiron bakery"} slogan={"yum!"}/>
      {selectedCake?<CakeDetail selectedCake={selectedCake} handleDelete={handleDelete}/>:null}
      <button onClick={() => setVisible(!visible)}>{visible ? "Hide Form" : "Show Form"}</button>
      {visible ? <Form handleAddCake={handleAddCake}/> : null}
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick}/>
    </div>
  );
}

export default App;
