import carsData from '../../data/carsData'
import CarsList from '../../components/templates/carsList';


function Sport() {
  const SportCars=carsData.filter(car=>car.category==='sport');

  return (
    <div>
            <CarsList data={SportCars} />

    </div>
  )
}

export default Sport
