import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="h-screen w-full bg-black absolute z-30 top-0 left-0">
        <div className="flex justify-center items-center h-screen flex-col gap-5 px-3">
          <img className='animate-bounce' src="/android-chrome-192x192.png" alt="logo"/>
        </div>
      </div>
    </>
  );
};

export default Loading;
