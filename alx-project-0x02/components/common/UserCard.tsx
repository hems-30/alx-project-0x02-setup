import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;