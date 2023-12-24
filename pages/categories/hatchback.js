import carsData from '../../data/carsData'
import CarsList from '../../components/templates/carsList';
function Hatchback() {
  const HatchbackCars=carsData.filter(car=>car.category==='hatchback');
  return (
    <div>
            <CarsList data={HatchbackCars} />
    </div>
  )
}

export default Hatchback
