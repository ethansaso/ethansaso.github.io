import ProjectsBanner from "../../assets/img/projects-banner.png"
import PhotosBanner from "../../assets/img/photos-banner.jpg"

function Home() {
    return (
        <div className="landing" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>

            <div className="photos-diag" style={{backgroundImage: `URL(${PhotosBanner})`}}/>
            <div className="projects-diag" style={{backgroundImage: `URL(${ProjectsBanner})`}}/>
        </div>
    );
}

export default Home;