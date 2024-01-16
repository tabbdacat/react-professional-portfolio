import mePhoto from '../assets/images/me-2024.jpg';

export default function About() {
    return (
        <div class="container px-4">
        <div className="row gx-5">
            <h3>About Me</h3>
            <img src={mePhoto} className="rounded col-3 p-4" alt="Photo of Tabbatha"></img>
            <p className="col-6 p-4">
                Full Stack Web Developer with a unique background in the healthcare field. Completing a certificate in Full Stack Web Development from the University of California Berkeley Coding Boot Camp. Critical thinker with a passion for solving complex problems. Strengths include teamwork, multitasking, and a strong desire to learn new skills as well as improve existing skills. Pursuing a career path that allows me to utilize my current skills and apply them in new creative ways.

            </p>
        </div>
        </div>
    );
}
