import React from 'react';
import profiles from '../profiles.json';

const ProfileCard = ({ name, qualifications, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 m-4 w-full md:w-3/4 lg:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <h3 className="text-xl text-gray-600 mt-2">{qualifications}</h3>
      <p className="text-gray-700 mt-4">{description}</p>
    </div>
  );
};

const ProfileList = () => {
  return (
    <div className="flex flex-col items-center py-8"
        //  style={{ background: 'linear-gradient(to right, #2C3E50, #2980B0)'}}
          >
      <h1 className="text-3xl font-bold text-black mb-8">Our Expert Chartered Accountants</h1>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          qualifications={profile.qualifications}
          description={profile.description}
        />
      ))}
    </div>
  );
};

export default ProfileList;
