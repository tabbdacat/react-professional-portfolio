// import hanaWaterfall from '../assets/images/hana-waterfall-resize.jpg';
import kaauWaterfall from '../assets/images/kaau-waterfall-resize.jpg';
import kaena from '../assets/images/kaena-resize.jpg';
import koko from '../assets/images/koko-surise-resize.jpg';
import olomana from '../assets/images/olomana-resize.jpg';
// import waterfall from '../assets/images/hana-waterfall-resize.jpg';

export default function Portfolio() {
    return (
        <div className="projects row">
            <div className="card col-10 col-md-5">
                <img src={kaena} className="card-img-top rounded img" alt="project 1" />
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>
            </div>
            <div className="card col-5">
                <img src={kaena} className="card-img-top rounded img" alt="project 2" />
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>
            </div>            <div className="card col-5">
                <img src={kaena} className="card-img-top rounded img" alt="project 3" />
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>
            </div>            <div className="card col-5">
                <img src={kaena} className="card-img-top rounded img" alt="project 4" />
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>
            </div>            <div className="card col-5">
                <img src={kaena} className="card-img-top rounded img" alt="project 5" />
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>
            </div>            <div className="card col-5">
                <img src={kaena} className="card-img-top rounded img" alt="project 6" />
                    <div className="card-body">
                        <h5 className="card-title">Project title</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-link"> link</p>
                        <p className="card-link">Another link</p>
                    </div>
            </div>



            <div className="col-6">
                <img src={kaauWaterfall} className="rounded img" alt="Waterfall" />
            </div>
            <div className="col-6">
                <img src={kaena} className="rounded img" alt="Waterfall" />
            </div>
            <div className="col-6">
                <img src={koko} className="rounded img" alt="Waterfall" />
            </div>
            <div className="col-6">
                <img src={olomana} className="rounded img" alt="Waterfall" />
            </div>
            <div className="col-6">
                <img src={olomana} className="rounded img" alt="Waterfall" />
            </div>
        </div>
    )
}
