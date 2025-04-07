import './Banner.css';
import bannerImg from '../../assets/img/banner-img.png'
import userPic from '../../assets/img/user.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container h-[100%] relative ">
                <h1 className='banner-title text-center font-bannerTitle relative font-extrabold text-white top-10 md:top-5'>COFFEE</h1>
                <div className='flex gap-5 md:items-center flex-col md:flex-row-reverse justify-between p-3'>

                    <div className='flex items-center gap-4'>
                        <div className="user-img flex ">

                            <img className='h-10 w-10 rounded-full border-2 border-white object-cover ' src={userPic} alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-white object-cover -ml-2' src={userPic} alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-white object-cover -ml-2' src={userPic} alt="" />


                        </div>
                        <div>
                            <p className='text-2xl text-white'>450+</p>
                            <p className='text-Secondary'>Customer</p>
                        </div>
                    </div>
                    <div className='border-l-4 banner-box pl-2 border-Secondary text-primaryColor font-subTitle'>
                        <p>Handcrafted Coffee,</p>
                        <p>Fresh Pastries & Warm Vibes</p>
                    </div>
                </div>
                <div className="banner-img absolute w-full max-w-xl left-1/2 -translate-x-1/2 bottom-0">
                    <img className='w-full' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;