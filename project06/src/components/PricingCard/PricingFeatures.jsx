import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex gap-2'><CircleCheckBig></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeatures;