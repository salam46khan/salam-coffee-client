import { CiCoffeeBean } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";
import { TbAward } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";

const Feature = () => {
    return (
        <div className="feature py-10 px-3 bg-white">
            <div className="container flex flex-col md:flex-row gap-3">
                <div className="p-5">
                    <VscCoffee className="text-Secondary text-5xl"/>
                    <h2 className="font-subTitle text-xl text-primaryColor py-2">Awesome Aroma</h2>
                    <p className="text-slate-400">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="p-5">
                    <LiaAwardSolid className="text-Secondary text-5xl"/>
                    <h2 className="font-subTitle text-xl text-primaryColor py-2">High Quality</h2>
                    <p className="text-slate-400">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="p-5">
                    <CiCoffeeBean className="text-Secondary text-5xl"/>
                    <h2 className="font-subTitle text-xl text-primaryColor py-2">Pure Grades</h2>
                    <p className="text-slate-400">The coffee is made of the green coffee beans which you will love</p>
                </div>
                
            </div>
        </div>
    );
};

export default Feature;