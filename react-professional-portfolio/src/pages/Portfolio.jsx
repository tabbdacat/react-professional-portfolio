import hanaWaterfall from '../assets/images/hana-waterfall-resize.jpg';
import kaauWaterfall from '../assets/images/kaau-waterfall-resize.jpg';
import kaena from '../assets/images/kaena-resize.jpg';
import koko from '../assets/images/koko-surise-resize.jpg';
import olomana from '../assets/images/olomana-resize.jpg';
// import waterfall from '../assets/images/hana-waterfall-resize.jpg';

export default function Portfolio() {
    return (
        <div className="projects row">
            <div className="card col-6">
                <img src={hanaWaterfall} className="card-img-top rounded img" alt="Waterfall" />
                <p className="card-img-overlay">Some text</p>
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
