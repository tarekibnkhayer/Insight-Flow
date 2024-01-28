import React from 'react';
import ChatNav from '../components/ChatNav';

const ChatLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-4'><ChatNav></ChatNav></div>
            <div className='col-span-6'>{children}</div>
        </div>
    );
};

export default ChatLayout;