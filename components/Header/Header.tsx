import React from "react";

type HeaderType = {
  logo: string;
  count: number;
};

const Header: React.FC<HeaderType> = ({ logo, count }) => {
  return (
    <div>
      <>{logo}</>
      <br />
      <>{count}</>
    </div>
  );
};

export default Header;
