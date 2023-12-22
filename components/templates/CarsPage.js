import style from  "./CarsPage.module.css";
import Card from '../module/Card'
function CarsPage({data}) {
  return (
    <div className={style.container}>
            {data.map(car=>(
            <Card key={car.id} {...car}/>
             ))}
    </div>
  )
}

export default CarsPage
