import hanaWaterfall from '../assets/images/hana-waterfall-resize.jpg';
import kaauWaterfall from '../assets/images/kaau-waterfall-resize.jpg';
import kaena from '../assets/images/kaena-resize.jpg';
import koko from '../assets/images/koko-surise-resize.jpg';
import olomana from '../assets/images/olomana-resize.jpg';
// import waterfall from '../assets/images/hana-waterfall-resize.jpg';

export default function Portfolio() {
    return (
        <div>
            <img src={hanaWaterfall} className="rounded float-start img" alt="Waterfall" />
            <img src={kaauWaterfall} className="rounded float-end img" alt="Waterfall" />
            <img src={kaena} className="rounded float-start img" alt="Waterfall" />
            <img src={koko} className="rounded float-end img" alt="Waterfall" />
            <img src={olomana} className="rounded float-start img" alt="Waterfall" />
            <img src={olomana} className="rounded float-end img" alt="Waterfall" />
        </div>
    )
}
