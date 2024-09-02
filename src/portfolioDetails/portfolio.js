import web from '../images/web-development-svgrepo-com.svg'
import android from '../images/androidterm-svgrepo-com.svg'
import cloud from '../images/cloud-services-svgrepo-com.svg'
import excel from '../images/excel-file-svgrepo-com.svg'
import testing from '../images/codescan-svgrepo-com.svg'
import req from '../images/business-solution-key-to-business-svgrepo-com.svg'
import vishalImg from '../images/vvv.jpg';
import vikashImg from '../images/prof_vikash.jpg'
import surajImg from '../images/suraj.jpg'

const teamDetails = [
    {
        id:1,
        name:"Vishal Surgade",
        title:"vishalSurgade",
        designation:"Full Stack Developer/Engineer",
        description : "Full Stack Developer with expertise in Angular, React, Python Flask, and Java Spring Boot, I specialize in transforming complex requirements into robust technical solutions. I have successfully led projects in various domains, including costing tools, ERM systems, and travel booking platforms, focusing on enhancing performance and user experience. Skilled in both frontend and backend development, I am passionate about improving team skills, streamlining operations, and leveraging cloud technologies like AWS to deliver impactful results.",
        experience : "4+",
        img: vishalImg
    },
    {
        id:2,
        name:"Vikash Pandey",
        title:"vikashPandey",
        designation:"Senior Software Developer",
        description : "I'm Full Stack Developer with 2.7+ year of experience and expertise in React, Python Flask, and Node js, I specialize in transforming complex requirements into robust technical solutions. I have successfully led projects in various domains, including costing tools, ERM systems, and travel booking platforms, focusing on enhancing performance and user experience. Skilled in both frontend and backend development.",
        experience : "3",
        img: vikashImg

    },
    {
        id:3,
        name:"Suraj Das",
        title:"surajDas",
        designation:"Software Developer",
        description : "",
        experience : "2",
        img:surajImg

    }
]

const services = [
    {
        id: 1,
        logoPath:web,
        title: 'webDevelopment',
        name: 'Web Development',
        description: 'Building responsive, high-performance websites tailored to your business needs, utilizing the latest web technologies.'
    },
    {
        id: 2,
        logoPath:android,
        title: 'androidDevelopment',
        name: 'Android Development',
        description: 'Creating user-friendly, feature-rich Android applications that deliver exceptional performance and a seamless user experience.'
    },
    {
        id: 3,
        logoPath:cloud,
        title: 'cloudServices',
        name: 'Cloud Services',
        description: 'Providing scalable and secure cloud solutions, from infrastructure setup to cloud migration, to enhance your business efficiency.'
    },
    {
        id: 4,
        logoPath:req,
        title: 'businessSolutions',
        name: 'Business Solutions',
        description: 'Offering customized business solutions that streamline operations, improve productivity, and drive growth in your organization.'
    },
    {
        id: 5,
        logoPath:testing,
        title: 'testing',
        name: 'QA & Testing (Manual / Automation)',
        description: 'Ensuring the highest quality standards through comprehensive manual and automated testing processes, tailored to your project needs.'
    },
    {
        id: 6,
        logoPath:excel,
        title: 'excelApplicationst',
        name: 'Excel Based Applications',
        description: 'Developing advanced Excel-based applications for data analysis, automation, and reporting to enhance your business decision-making.'
    }
]


// export default teamDetails
export {
    teamDetails,
    services
  };
  