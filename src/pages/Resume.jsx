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

    return (
        <div>
            <h3>Resume and Proficiencies</h3>
            <div className="text-center">
            <p >Download Resume PDF here:</p>
            <button 
            className="btn btn-outline-light mb-4"
            onClick={onResumeClick}
            >
                Download PDF
            </button>
            </div>
            <h4>Proficiencies</h4>
            <ul>
                <li>
                    JavaScript
                </li>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    MongoDB
                </li>
                <li>
                    SQL
                </li>
                <li>
                    APIs 
                </li>
                <li>
                    SEOs
                </li>

            </ul>

        </div>
    );
}
