
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
           <button className="btn btn-secondary">Breaking news</button>
           <Marquee className="mr-12" pauseOnHover={true} speed={200} >
           <Link to="/">i can be a react component,multiple react components...</Link>
            </Marquee>
           <Marquee className="mr-12" pauseOnHover={true} speed={200} >
           <Link to="/">i can be a react component,multiple react components...</Link>
            </Marquee>
           <Marquee className="mr-12" pauseOnHover={true} speed={200} >
           <Link to="/">i can be a react component,multiple react components...</Link>
            </Marquee>
           <Marquee className="mr-12" pauseOnHover={true} speed={200} >
           <Link to="/">i can be a react component,multiple react components...</Link>
            </Marquee>
           
        </div>
    );
};

export default BreakingNews;