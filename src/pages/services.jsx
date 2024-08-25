import { services } from "../portfolioDetails/portfolio"
import web from "../images/web-development-svgrepo-com.svg"
const Services = (() => {


  return <>
    <div className="text-center">
      <h1 className=" text-primary-dark dark:text-primary-light text-lg" style={{ fontSize: '25px'}}>
        <b>We are good at</b>
      </h1>
      <h6 className=" text-primary-dark dark:text-primary-light text-lg" >
          Providing technical solutions for your requirements. <br/>
          Comprehensive IT Solutions & Professional Services, Delivered in Real-Time.
      </h6>
    </div>
    <div className="flex flex-row flex-wrap p-3 m-3 justify-center">

      {services.map((item) => {
        return <div className="w-98 h-2-4 bg-gray-50 rounded-lg shadow-lg p-5px m-5px">
          <div><img src={item.logoPath} /></div>
          <div className="font-bold text-4xl"><h4>{item.name}</h4></div>
          <div><h4>{item.description}</h4></div>

        </div>
      })}
    </div>
  </>
})


export default Services