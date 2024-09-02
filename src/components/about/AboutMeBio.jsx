import profileImage from '../../images/myPic.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { teamDetails } from '../../portfolioDetails/portfolio'
const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return <>
	{/* <div className='text-center'>
		<h1>Three passionate developers, one powerful team. Leveraging 4+, 3, and 2 years of expertise to craft the future of technology</h1>
	</div> */}
	<div className="text-center">
      <h1 className=" text-primary-dark dark:text-primary-light text-lg" style={{ fontSize: '25px'}}>
        <b>Our Team</b>
      </h1>
      <h6 className=" text-primary-dark dark:text-primary-light text-lg" style={{marginTop:'5px'}} >
	  Three passionate developers, one powerful team. Leveraging 4+, 3, and 2 years of expertise to craft the future of technology. <br/>
          Comprehensive IT Solutions & Professional Services, Delivered in Real-Time.
      </h6>
    </div>
	<div className="flex flex-row flex-wrap p-3 m-3 justify-center">
		{teamDetails.map((item) => {
			return (

				
					<div className="w-full sm:w-1/4 mb-7 sm:mb-0 p-5px m-5px">
						<img src={item.img} alt={item.name} className="rounded-lg w-96 h-2-4" />
						<h4 className='text-center text-ternary-dark dark:text-ternary-light' style={{margin:'5px'}}>
							{item.name}  <br />
							{item.designation} <br />
							{item.experience} Year's of experience.
						</h4>
					</div>

					
			);
		})}
	</div>
	</>
};

export default AboutMeBio;
