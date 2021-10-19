
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
    fetch('http://localhost:4000/cakes')
      .then(res => res.json())
      .then(cakes => {
        setCakes(cakes)
        setCakeList(cakes)
        console.log(cakes)
      })
  }, [])

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
      {selectedCake?<CakeDetail selectedCake={selectedCake} />:null}
      <button onClick={() => setVisible(!visible)}>{visible ? "Hide Form" : "Show Form"}</button>
      {visible ? <Form handleAddCake={handleAddCake}/> : null}
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick}/>
    </div>
  );
}

export default App;
