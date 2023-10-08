import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-4'>
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                   Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                  Github
                </button>
            </div>
            <div className='p-4 mb-4'>
                <h2 className="text-2xl">Find Us on </h2>
               <a href="" className='p-4 flex font-lg items-center border
               rounded-t-lg'>
                <FaFacebook className='mr-3'></FaFacebook>
                Facebook
               </a>
               <a href="" className='p-4 flex font-lg items-center border
               rounded-y'>
                <FaTwitter className='mr-3'></FaTwitter>
               Twitter
               </a>
               <a href="" className='p-4 flex font-lg items-center border
               rounded-b-lg'>
                <FaInstagram className='mr-3'></FaInstagram>
               Instagram
               </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-4 mb-4'>
                <h2 className="text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;