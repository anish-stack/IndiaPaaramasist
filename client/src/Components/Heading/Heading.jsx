import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div className="text-center flex items-center justify-center flex-col py-8">
            <h1 className="text-xl md:text-4xl font-bold text-[#D19E66]">{title} <span className='text-[#3F3F3F]'>{subtitle}</span></h1>
            <img className='mt-2' src="https://i.ibb.co/WVMNFyK/image.png" alt="" />
        </div>
    );
};

export default Heading;
