import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    return (
        <div className='container mx-auto my-5'>
            <h2 className='lg:text-5xl md:text-4xl text-3xl my-10 text-center font-semibold'>Get Our Membership</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-10'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;