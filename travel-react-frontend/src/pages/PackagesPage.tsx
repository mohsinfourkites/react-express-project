import React from 'react';
import { PackageCard } from '../components/PackageCard/PackageCard';



const PackagesPage: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold">Available Packages</h1>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <PackageCard 
        id="1" 
        title="Sample Package" 
        location="Sample Location" 
        duration="3 days" 
        price={299} 
        description="This is a sample package description." 
        imageUrl="sample-image-url.jpg" 
      />
    </div>
  </div>
);

export default PackagesPage;
