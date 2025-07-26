import React from 'react';
import { type UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: UserProps[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default UsersPage;