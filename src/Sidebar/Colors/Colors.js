import Output from "../../Components/Output"
import "./Colors.css"

function Colors({handleChange}) {
  return (
<>
    <div className="colors">
      <h2 className="sidebar-title color-title">Colors</h2>
     
       
      <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value=""
           name="test3" />
           <span className="checkmark all"></span>All
          </label>

         <Output
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test"
          color="black" />
        
        <Output
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue" />

         <Output
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red" />

        <Output
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green" />

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name="test3"/>
        <span className="checkmark" style={{background:"white",border:"2px solid black "}}></span>White
      </label>


    </div>     


</>
  )
}

export default Colors