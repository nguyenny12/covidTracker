import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="h-28 w-full flex flex-col items-center justify-center dark:text-white">
      <Link to="./" className="text-sm text-center hover:text-blue-500">
        Powered by&nbsp;<span className="font-bold text-md ">@ngngcny</span>
      </Link>
      <span className="text-[13px] font-semibold mb-4">
        Nguồn dữ liệu từ Zing News && Vnexpress
      </span>
    </div>
  );
};

export default Footer;
