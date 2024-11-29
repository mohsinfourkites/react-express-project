import React from 'react';
import { useUser } from '@clerk/clerk-react';

const UserProfilePage: React.FC = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center mb-6">
        <img 
          src={user.imageUrl} 
          alt="Profile" 
          className="w-24 h-24 rounded-full mr-6" 
        />
        <div>
          <h2 className="text-xl font-semibold">{user.fullName}</h2>
          <p className="text-gray-600">{user.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Username:</strong> {user.username || 'Not set'}
          </div>
          <div>
            <strong>Email Verified:</strong> 
            {user.primaryEmailAddress?.verification?.status === 'verified' 
              ? 'Yes' 
              : 'No'}
          </div>
          {/* Add more user details as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;