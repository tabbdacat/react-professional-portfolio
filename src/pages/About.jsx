import mePhoto from '../assets/images/me-2024.jpg';

export default function About() {
    return (
        <div>
            <h3>About Me</h3>
            <div className="container row  text-center">
                <div className="col">
                    <img src={mePhoto} className="pic-me img-fluid rounded col p-2" alt="Photo of Tabbatha"></img>
                </div>
                <div className="col-lg-7 col-md-5 my-auto ">
                    <blockquote className="blockquote mb-0">
                        <p>"People who say it cannot be done should not interrupt those who are doing it."</p>
                        <footer className="blockquote-footer mb-3">George Bernard Shaw, 
                        <cite title="Source Title">playwright</cite>
                        </footer>
                    </blockquote>
                    <p>
                        Full Stack Web Developer with a unique background in the healthcare field. Completing a certificate in Full Stack Web Development from the University of California Berkeley Coding Boot Camp. Critical thinker with a passion for solving complex problems. Strengths include teamwork, multitasking, and a strong desire to learn new skills as well as improve existing skills. Pursuing a career path that allows me to utilize my current skills and apply them in new creative ways.

                    </p>
                </div>
            </div>
        </div>
    );
}
