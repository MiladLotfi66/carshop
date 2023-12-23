import {useRouter} from 'next/router';
import carsData from '../../data/carsData'
import CarDetails from '../../components/templates/carDetails';
function CarDetail() {
    const router =useRouter();
    const {carid}=router.query
const carDetails = carsData[carid-1];
    return (
    <div>
      <CarDetails {...carDetails}/>
    </div>
  )
}

export default CarDetail
