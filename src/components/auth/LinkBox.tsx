import * as React from 'react';
import { Link } from 'react-router-dom';

export enum PageType {
  LOGIN = 'login',
  SIGNUP = 'signup'
}

interface LinkProps {
  page: PageType;
}

const PAGE_CONFIG = {
  [PageType.LOGIN]: {
    message: '계정이 없으신가요?',
    link: '/signup',
    linkText: ' 가입하기'
  },
  [PageType.SIGNUP]: {
    message: '계정이 있으신가요?',
    link: '/login',
    linkText: ' 로그인'
  }
};

const LinkBox: React.FC<LinkProps> = ({ page }) => {
  const config = PAGE_CONFIG[page];
  
  return (
    <div className='bg-white w-[350px] border border-gray-300 mt-3 p-4'>
      <p className="text-sm text-center">
        {config.message}
        <Link to={config.link} className="text-blue-500 font-semibold">
          {config.linkText}
        </Link>
      </p>
    </div>
  );
}

export default LinkBox;