import {useRouter} from 'next/router';
import carsData from '../../data/carsData'
function CarDetail() {
    const router =useRouter();
    const {carid}=router.query
const carDetails = carsData[carid-1];
console.log(carDetails);
    return (
    <div>
      cardetail
    </div>
  )
}

export default CarDetail
