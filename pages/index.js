import carsData from "../data/carsData";
import CarsPage from "../components/templates/CarsPage";
import Categories from "../components/module/Categoreis";
import SearchBar from "../components/module/searchBar";
import AllButtom from '../components/module/AllButton'

export default function Home() {
  const slicedCar=carsData.slice(0,3);
  return (
    <div>
    <SearchBar />
    <Categories />
    <AllButtom />
    <CarsPage data={slicedCar} />
  </div>
  )
}
