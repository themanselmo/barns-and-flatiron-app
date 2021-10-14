
import CakeContainer from "./CakeContainer"
import Header from "./Header"
import Search from "./Search"
import { useState } from "react"
import {cakes} from "../data/cakesData"

function App() {

  const [search, setSearch] = useState('')
  const [cakeList, setCakeList] = useState(cakes)

  function handleSearch(event) {
    setSearch(event.target.value)
    setCakeList(cakes.filter(cake => cake.flavor.toLowerCase().includes(event.target.value.toLowerCase())))
  }


  return (
    <div className="App">
      <Header bakery={"flatiron bakery"} slogan={"yum!"}/>
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList}/>
    </div>
  );
}

export default App;
