import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/CarsPage";
import Categories from "../../components/module/Categoreis";

function Details() {
  return (
    <div>
      <Categories />

      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
