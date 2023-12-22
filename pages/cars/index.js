import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/CarsPage"

function Details() {
  return (
    <div>
<CarsPage data={carsData} />
    </div>
  )
}

export default Details
