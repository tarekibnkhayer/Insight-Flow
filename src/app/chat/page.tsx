import React from 'react';

const ChatPage = () => {
    return (
        <div className='bg-slate-100 min-h-screen pl-3'>
          <p className='py-2 bg-black text-gray-50 text-xl font-semibold text-center uppercase rounded-full'>Insight-Flow</p>
          <div className='h-[calc(100vh-45px)] flex justify-center items-center rounded-t-xl bg-white'>
            <h1 className='text-4xl uppercase font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-blue-600 text-transparent bg-clip-text'>Let's Start Chatting!</h1>
          </div>
        </div>
    );
};

export default ChatPage;