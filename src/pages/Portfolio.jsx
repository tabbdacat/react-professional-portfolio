// import hanaWaterfall from '../assets/images/hana-waterfall-resize.jpg';
import kaauWaterfall from '../assets/images/kaau-waterfall-resize.jpg';
import kaena from '../assets/images/kaena-resize.jpg';
import koko from '../assets/images/koko-surise-resize.jpg';
import olomana from '../assets/images/olomana-resize.jpg';
import moveMixImg from '../assets/images/movieMixImg.jpg';
import culinaryConnectImg from '../assets/images/culinaryConnectImg.jpg';
import codingQuizImg from '../assets/images/codingQuizImg.jpg';
import techBlogImg from '../assets/images/techBlogImg.jpg';
import weatherDashImg from '../assets/images/weatherDashImg.jpg';
import socialAPIImg from '../assets/images/socialAPIImg.jpg';





// import waterfall from '../assets/images/hana-waterfall-resize.jpg';

const projects = [
    {
        title: "Culinary Connect - Group Collaboration",
        image: culinaryConnectImg,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "MovieMix & Sip - Group Collaboration",
        image: moveMixImg,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "Tech Blog",
        image: techBlogImg,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "Weather Dashboard",
        image: weatherDashImg,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "Coding Quiz",
        image: codingQuizImg,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "Social Network API",
        image: socialAPIImg,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },

]


export default function Portfolio() {
    return (
        <div className="projects row">
            {projects.map((project) => (
                <div className="card col-10 col-md-5"  key={project.title}>
                    <img src={project.image} className="card-img-top rounded img" alt="project 1" />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>

                </div>
            ))}

        </div>
    )
}
