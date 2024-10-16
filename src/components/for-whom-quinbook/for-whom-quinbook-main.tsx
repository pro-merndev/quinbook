import React from 'react';
import PrimaryBadge from '../ui/primary-badge';

const ForWhomQuinbookMain = () => {
  return (
    <div>
      <div className="container py-10 lg:py-20">
      <div className="flex flex-col gap-24">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:gap-10 md:min-h-[750px]">
            <div className="flex justify-center items-center gap-10 max-md:mb-10">
              <div>
                <div>
                  <PrimaryBadge>Anwendungen</PrimaryBadge>
                </div>
                <h3 className="font-poppins font-extrabold md:leading-[90px] md:text-7xl text-5xl pt-5">Lasertag</h3>
                <p className='text-xl leading-7 text-grey-darker mt-4'>Gruppenbuchungen, Battlemodi oder Ressourcenmanagement – QuinBook erfüllt alle Voraussetzungen für spannende Laserkämpfe und gleichzeitig sorgen wir dafür, dass eure Bürokratie & Arbeitsprozesse kleiner als Laserpointer bleiben.</p>
              </div>
            </div>
            <img
              src="/images/features/feature_4_banner.jpeg"
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