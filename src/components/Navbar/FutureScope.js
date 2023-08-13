import React from 'react'
import FutureScopeCard from './FutureScopeCard';

const FutureScope = () => {
    const FeaturesData = [
        {
         
          Heading: "Add zkRollup",
          Description:
            "Using zkRollup we can reduce the gas fees and make the transactions faster",
        },
        {
         
          Heading: "Add task management",
          Description:
            "Organisations can manage the task status of their employees",
        },
        {
         
          Heading: "Metaverse meetings",
          Description:
            "Add a metaverse meeting feature to the application",
        },
      ];
    
      return (
        <div className="mt-10 font-poppins" id="features">
          <p className=" text-4xl text-[white] font-bold ml-48 mb-12">
            Future Scope{" "}
          </p>
          <div className="flex flex-row justify-center gap-10 p-20">
            <FutureScopeCard FeaturesData={FeaturesData[0]} />
            <FutureScopeCard FeaturesData={FeaturesData[1]} />
            <FutureScopeCard FeaturesData={FeaturesData[2]} />
          </div>
        </div>
      );
};

export default FutureScope