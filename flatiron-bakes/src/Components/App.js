
import CakeContainer from "./CakeContainer"
import Header from "./Header"
import Search from "./Search"

import {cakes} from "../data/cakesData"

function App() {
  return (
    <div className="App">
      <Header bakery={"flatiron bakery"} slogan={"yum!"}/>
      <Search />
      <CakeContainer cakeList={cakes}/>
    </div>
  );
}

export default App;
