import "./Product.css"
import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";


function Products({result}) {
  return (
    <>
    <section className="card-container">
 
    {/* <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card /> */}
    {result}
    
    
    </section>
    
    
    </>
  )
}

export default Products

{/* <section className="card">
    <img className="card-img" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe"/>
    <div className="card-details">
      <h3 className="card-title">Shoe</h3>
      <section className="card-reviews">
        <FaStar className="ratings-start"/>
        <FaStar  className="ratings-start" />
        <FaStar  className="ratings-start"/>
        <FaStar  className="ratings-start"/>

        <span className="card-price">4</span>
        <div className="price">
          <del>$300</del>200

        </div>
      <div className="bag">
        <BsBagHeartFill  className="bag-icon"/> */}
    //   </div>

    //   </section>
    // </div>
    // </section>