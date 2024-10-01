import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses:{sm:string,md:string,lg:string} = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses:{blue:string,green:string,red:string,yellow:string} = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses.md} ${colorClasses.blue} border-4 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;