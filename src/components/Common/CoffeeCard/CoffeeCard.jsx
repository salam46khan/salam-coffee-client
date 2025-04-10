import { Link } from 'react-router-dom';
import './Coffeecard.css';
import coffeeItem from '../../../assets/img/coffee-item.png'

const CoffeeCard = ({coffee}) => {
    return (
        <div className='coffee-card'>
            <div className='img-section'>
                <div className="img-bg-shadow"></div>
                <img className='h-36' src={coffeeItem} alt="" />
            </div>
            <div className='coffee-card-content'>
                <div className='grid grid-cols-2 items-stretch py-2'>
                    <div className='col-span-1 pr-2'>
                        <p className='text-md uppercase font-bold'>{coffee?.name}</p>
                        <p className='text-sm mt-2 text-slate-200'>
                            {
                                coffee?.details.length>45 ? coffee.details.slice(0,45)+"..." : coffee.details
                            }
                        </p>
                    </div>
                    <div className='border-l border-Secondary col-span-1 pl-2'>
                        <div className='pb-2'>
                            <p className='text-Secondary'>Category</p>
                            <p className='text-xs text-slate-200'>{coffee.category}</p>
                        </div>
                        
                        <div className=''>
                            <p className='text-Secondary'>supplier</p>
                            <p className='text-xs text-slate-200'>{coffee.taste}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-2'>
                    <Link to={`coffee/${coffee._id}`}>
                        <button className='my-btn'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;