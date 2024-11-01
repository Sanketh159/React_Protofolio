import '../public/Resume.css';
import Resume1 from '../assets/Resume/Sanketh-S-Nayak-Resume.pdf';

function Resume(){
    return(
        <section id="wrapper">
            <div className="heading">
                <h1>Resume</h1>
            </div>
            <div id="resume-wrapper">
                <iframe src={Resume1}></iframe>
            </div>
            <div id='Contact' style={{position:'absolute', bottom:'100px'}}></div>
        </section>
    )
}

export default Resume;
