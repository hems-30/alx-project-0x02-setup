import React from 'react';
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <Card
        title="Card One"
        content="This is the content of the first card."
      />
      <Card
        title="Card Two"
        content="Here is some different content for the second card."
      />
      <Card
        title="Card Three"
        content="And this is the third card's content."
      />
    </div>
  );
};

export default Home;