
import CakeContainer from "./CakeContainer"
import Header from "./Header"
import Search from "./Search"
import CakeDetail from "./CakeDetail"
import Form from "./Form"

import { useState } from "react"
import {cakes} from "../data/cakesData"

function App() {

  const [search, setSearch] = useState('')
  const [cakeList, setCakeList] = useState(cakes)
  const [selectedCake, setSelectedCake] = useState(null)

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
      <Form handleAddCake={handleAddCake}/>
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick}/>
    </div>
  );
}

export default App;
