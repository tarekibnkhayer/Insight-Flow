import React from 'react';

const ChatLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <h2>This is Navbar</h2>
            {children}
        </div>
    );
};

export default ChatLayout;