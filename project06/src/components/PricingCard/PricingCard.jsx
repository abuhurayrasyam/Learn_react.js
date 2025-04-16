import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features, popular} = pricing;
    return (
        <div className='bg-amber-300 border rounded-md p-4 flex flex-col gap-3'>
            {popular && <span className='bg-amber-500 py-1 px-2 rounded-xl mx-auto'>Most Popular</span>}
            <div>
                <h1 className='text-6xl font-semibold'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            <div className='bg-amber-100 rounded-sm p-2'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className="btn w-full bg-amber-200">Subscribe</button>
            </div>
        </div>
    );
};

export default PricingCard;