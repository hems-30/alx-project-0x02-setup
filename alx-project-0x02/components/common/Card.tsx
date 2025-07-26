import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;