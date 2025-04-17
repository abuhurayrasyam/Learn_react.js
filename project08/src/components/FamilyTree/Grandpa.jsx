import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div>
            <h1>Grandpa</h1>
            <section>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;