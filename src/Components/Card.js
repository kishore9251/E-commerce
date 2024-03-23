import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice}) {
  return (
    <div>
      <section className="card">
    <img className="card-img" src={img}alt={title}/>
    <div className="card-details">
      <h3 className="card-title">{title}</h3>
      <section className="card-reviews">
       {star}  {star} {star} {star}
        <span className="card-price">{reviews}</span>
        <div className="price">
          <del>{prevPrice}</del>{newPrice}

        </div>
      <div className="bag">
        <BsBagHeartFill  className="bag-icon"/>
      </div>

      </section>
    </div>
    </section>
    </div>
  )
}

export default Card