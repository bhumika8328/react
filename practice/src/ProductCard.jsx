function ProductCard(){
    const Productname="book"
    const Productprice=30
    const isavailable=true
    return(
        <div>
            <p>Productname:{Productname}</p>
            <p>Productprice:{Productprice}</p>
            <p>{isavailable?"it can available":"it cannot available"}</p>
        
        </div>
    )
}
export default ProductCard;