import "./ProducrCard.css"
function ProductCard() {
    const Productname= "book"
    const Productprice = 30
    const isAvailable = true
    const card = {
        border: '2px solid gray',
        fontsize: '20px',
    color: 'black'
}
    
return (
    <div style={card}>
        <p className="Productname">Productname:{Productname}</p>
        <p className="productprice">ProductPrice:{Productprice}</p>
        <p className="available">{isAvailable ? "it can Available" : "it cannot Available"}out of stock</p>



    </div>
)
}
export default ProductCard;