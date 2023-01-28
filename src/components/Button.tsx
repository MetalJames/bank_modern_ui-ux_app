import React from 'react';

type ButtonStylesProps = {
    styles: string
};

const Button = ( props: ButtonStylesProps  ) => {
    return (
        <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${props.styles}`}>
            Get Started
        </button>
    )
}

export default Button