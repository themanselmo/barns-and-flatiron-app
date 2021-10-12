import CakeCard from "./CakeCard"

function App() {
  return (
    <>
      <h1>Bakery Name</h1>
      <CakeCard flavor="Chocolate" price={12}/>
      <CakeCard flavor="Vanilla" price={20.00}/>
      <CakeCard flavor="Ice Cream" price={12.99}/>
    </>
  );
}

export default App;
