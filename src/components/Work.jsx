import React from 'react';

export default function Work ()
{
    return (
        <div name='work' className="w-full h-screen md:h-screen bg-[#0a192f] text-gray-300  px-8 justify-center flex">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center '>
                <div className="sm:text-left px-auto pb-10">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                        Work
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center '>
                        <div>
                            <span></span>
                            <div>
                                <a href="">
                                    <button></button>
                                </a>
                                <a href="">
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
