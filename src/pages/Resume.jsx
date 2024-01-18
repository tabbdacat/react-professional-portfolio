export default function Resume() {

    const onResumeClick = () => {
        const pdfUrl = "resume-2024.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume-2024.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const proficiencies = [
        "Javascript",
        "HTML",
        "CSS",
        "React",
        "MongoDB",
        "SQL",
        "APIs",
        "SEOs",
        "Heroku",
        "Git",
        "Responsive design",
        "Testing/debugging"
    ]



    return (
        <div>
            <h3>Resume and Proficiencies</h3>
            <div className="text-center">
                <p>Want more details? Download Resume below:</p>
                <button
                    className="btn btn-outline-light mb-4"
                    onClick={onResumeClick}
                >
                    Download PDF
                </button>
            </div>
            <div className="card w-75 border border-light-subtle p-3">
                <h4 className="text-center  border border-light-subtle p-3"> Proficiencies</h4>

                <ul className="prof-list">
                    {
                        // key needs to be unique to avoid react warning (error) so put as index
                        proficiencies.map((proficiency, index) =>
                            <li
                                key={index}
                            >
                                {proficiency}
                            </li>)
                    }

                </ul>
            </div>
        </div>
    );
}
