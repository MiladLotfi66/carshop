import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/CarsPage";
import Categories from "../../components/module/Categoreis";
import SearchBar from "../../components/module/searchBar";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
