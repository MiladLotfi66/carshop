import style from  "./CarsPage.module.css";

function CarsPage({data}) {
  return (
    <div className={style.container}>
            {data.map(car=>(<p key={car.id}>{car.name}</p> ))}
    </div>
  )
}

export default CarsPage
