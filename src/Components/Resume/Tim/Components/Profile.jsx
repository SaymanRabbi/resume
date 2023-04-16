import React from 'react';

const Profile = () => {
    return (
        <div className=' mt-8'>
            <div className=' w-full h-1 bg-[#1B3055] mb-3'></div>
            <div className='grid grid-cols-12'>
              <h2 className=' uppercase text-2xl font-semibold text-[#1B3055] tracking-wider col-span-3'>
                Profile
              </h2>
              <p className='user_profile font-medium col-span-9'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisl nec tincidunt lacinia, tortor
                mauris lacinia nisl, eu aliquet nisl nisl eu ante. Sed
                tincidunt, nisl eget aliquam tincidunt, nisl elit
                fermentum massa, nec luctus nisl ante eget nisl. Sed
                tincidunt, nisl eget aliquam tincidunt, nisl elit
                fermentum massa, nec luctus nisl ante

              </p>
            </div>
            <div className=' w-full h-1 bg-[#1B3055] mt-3'></div>
        </div>
    );
};

export default Profile;