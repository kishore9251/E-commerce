import Output from "../../Components/Output"
import "./Price.css"

function Price({handleChange}) {
  return (
    <>
    <div className="ml">
      <h2 className="sidebar-label-title" >Price</h2>

      <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value=""
           name="test" />
           <span className="checkmark"></span>All
          </label>


          <Output 
          handleChange={handleChange}
          value={50}
          title="$0-$50"
          name="test2"/>

        <Output 
          handleChange={handleChange}
          value={100}
          title="$50-$100"
          name="test2"/>

        <Output 
          handleChange={handleChange}
          value={150}
          title="$100-$150"
          name="test2"/>

        <Output 
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"/>


    </div>
    
    </>
  )
}

export default Price