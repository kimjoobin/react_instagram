import * as React from 'react';
import instagramLogo from '../../assets/images/instagram-logo.jpg';
import LinkBox, { PageType } from '../../components/auth/LinkBox';
import LoginForm from '../../components/auth/LoginForm';
import AppDownload from '../../components/auth/AppDownload';
import { Link } from 'react-router-dom';
import Divider from '../../components/auth/Divider';
import PhoneImage from '../../assets/images/home-phones.png'
import Logo from '../../components/auth/Logo';


const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center w-full max-w-[935px] mx-auto">
        {/* Left Phone Image Section */}
        <div className="hidden md:block relative w-[468px] h-[634px]">
          <img
            src={PhoneImage}
            alt="Instagram app preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Login Section */}
        <div className="flex flex-col w-[350px] mx-auto md:mx-0">
          {/* Main Login Box */}
          <div className="bg-white border border-gray-300 rounded-sm p-10 mb-3">
            {/* Instagram Logo */}
            <Logo page='login' />
            {/* <div className="flex justify-center mb-8">
              <img
                src={instagramLogo}
                alt="Instagram"
                className="h-[51px] mt-2 mb-3"
              />
            </div> */}

            {/* Login Form */}
            <LoginForm />
            
            <Divider/>

            <div className='flex flex-col'>
              <button
                type="button"
                className="flex items-center justify-center text-sm text-blue-900 font-semibold mt-2"
              >
                <span className="mr-2 text-lg">f</span>
                Facebook으로 로그인
              </button>

              <Link
                to="/password/reset"
                className="text-xs text-blue-900 mt-3 text-center"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
          </div>

          {/* Sign Up Box */}
          <LinkBox page={PageType.LOGIN} />

          {/* App Download */}
          <AppDownload />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;