import ProductCard from "./ProductCard.jsx"
function App() {
  const Pname = "book"
  const Pprice = 30
  const available=true

  return (
    <div>
      <ProductCard Productname={Pname} Productprice={Pprice} isavailable={available} />

    </div>
  )
}

export default App;