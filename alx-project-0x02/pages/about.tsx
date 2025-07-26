import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <>
      <Header />
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>

        <div className="flex flex-col space-y-4 max-w-xs">
          <Button size="small" shape="rounded-sm">Small & Rounded-sm</Button>
          <Button size="medium" shape="rounded-md">Medium & Rounded-md</Button>
          <Button size="large" shape="rounded-full">Large & Rounded-full</Button>
        </div>
      </div>
    </>
  );
};

export default About;