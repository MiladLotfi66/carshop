import { useRouter } from 'next/router'
import CarsData from '../../data/carsData'
import Carslist from '../../components/templates/carsList'
function FilteredCars() {
    const router=useRouter();
    const [min , max]=router.query.slug || [];
const FilteredData=CarsData.filter((item) => item.price > min && item.price <max );
console.log(FilteredData);
if(!FilteredData.length) return (<h3>not found</h3>);
  return (
    <div>
      <Carslist data={FilteredData}/>
    </div>
  )
}

export default FilteredCars
