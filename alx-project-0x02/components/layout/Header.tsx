import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex space-x-6 items-center">
      <h1 className="text-2xl font-bold">ALX Project Header</h1>
      <nav className="flex space-x-4 ml-8">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
