import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">{children}</div>
  );
};

export default RootLayout;
