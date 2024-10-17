import React from 'react';
import PrimaryBadge from '../ui/primary-badge';
import { forWhomItems } from '@/constants/for-whom-items';

const ForWhomQuinbookMain = () => {
  return (
    <div id="for-whom-quinbook">
      <div  className="container py-10 lg:py-20">
      <div className="flex flex-col gap-24">
        {forWhomItems.map((item, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:gap-10 md:min-h-[750px]">
            <div className="flex justify-center items-center gap-10 max-md:mb-10">
              <div>
                <div>
                  <PrimaryBadge>{item?.badge}</PrimaryBadge>
                </div>
                <h3 className="font-poppins font-extrabold md:leading-[90px] md:text-7xl text-5xl pt-5">{item?.title}</h3>
                <p className='text-xl leading-7 text-grey-darker mt-4'>{item?.description_1}</p>
                {item?.description_2 && <p className='text-xl leading-7 text-grey-darker mt-4'>{item?.description_2}</p>}
              </div>
            </div>
            <img
              src={item?.image}
              alt="for whom quinbook"
              className="rounded-e-2xl h-full object-cover"
              style={{ aspectRatio: '16 / 9' }} // Adjust the aspect ratio as needed
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ForWhomQuinbookMain;