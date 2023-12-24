import carsData from '../../data/carsData'
import CarsList from '../../components/templates/carsList';


function Suv() {
  const SuvsCar=carsData.filter(car=>car.category==='suv');

  return (
    <div>
            <CarsList data={SuvsCar} />

    </div>
  )
}

export default Suv
