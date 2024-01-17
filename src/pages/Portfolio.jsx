import moveMixImg from '../assets/images/movieMixImg.jpg';
import culinaryConnectImg from '../assets/images/culinaryConnectImg.jpg';
import codingQuizImg from '../assets/images/codingQuizImg.jpg';
import techBlogImg from '../assets/images/techBlogImg.jpg';
import weatherDashImg from '../assets/images/weatherDashImg.jpg';
import socialAPIImg from '../assets/images/socialAPIImg.jpg';


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
        github: "https://github.com/ucb-allstars-project-1/movie-cocktail-combo",
        site: "https://ucb-allstars-project-1.github.io/movie-cocktail-combo/"
    },
    {
        title: "Tech Blog",
        image: techBlogImg,
        github: "https://github.com/tabbdacat/tech-blog",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "Weather Dashboard",
        image: weatherDashImg,
        github: "https://github.com/tabbdacat/weather-dashboard",
        site: "https://tabbdacat.github.io/weather-dashboard/"
    },
    {
        title: "Coding Quiz",
        image: codingQuizImg,
        github: "https://github.com/tabbdacat/coding-quiz",
        site: "https://tabbdacat.github.io/coding-quiz/"
    },
    {
        title: "Social Network API",
        image: socialAPIImg,
        github: "https://github.com/tabbdacat/social-network-api",
        site: "https://drive.google.com/file/d/1xwfROda1DgFF3f8CBdpaUapTH7MgSlPs/view"
    },

]

// map through projects array to render to page
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
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <a href={project.github} className="btn btn-outline-light">Github Repo</a>
                        <a href={project.site} className="btn btn-outline-light">Deployed app</a>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}
