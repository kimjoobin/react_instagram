import * as React from 'react';
import { useState } from 'react';
import instagramLogo from '../../assets/images/instagram-logo.jpg';
import { Link } from 'react-router-dom';

interface LoginInfo {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginInfo>({
    email: '',
    password: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center w-full max-w-[935px] mx-auto">
        {/* Left Phone Image Section */}
        <div className="hidden md:block relative w-[468px] h-[634px]">
          <img 
            src="/api/placeholder/468/634"
            alt="Instagram app preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Login Section */}
        <div className="flex flex-col w-[350px] mx-auto md:mx-0">
          {/* Main Login Box */}
          <div className="bg-white border border-gray-300 rounded-sm p-10 mb-3">
            {/* Instagram Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={instagramLogo} 
                alt="Instagram"
                className="h-[51px] mt-2 mb-3"
              />
            </div>

            {/* Login Form */}
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                className="w-full bg-gray-50 border border-gray-300 rounded-[3px] px-2 py-[9px] text-xs mb-[6px] focus:outline-none focus:border-gray-400"
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full bg-gray-50 border border-gray-300 rounded-[3px] px-2 py-[9px] text-xs mb-[6px] focus:outline-none focus:border-gray-400"
              />
              
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg py-[7px] text-sm font-semibold mt-2 opacity-70"
              >
                로그인
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-sm font-semibold text-gray-500">또는</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

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
            </form>
          </div>

          {/* Sign Up Box */}
          <div className="bg-white border border-gray-300 rounded-sm p-5 text-sm text-center">
            계정이 없으신가요?{' '}
            <Link to="/signup" className="text-blue-500 font-semibold">
              가입하기
            </Link>
          </div>

          {/* App Download */}
          <div className="mt-5 text-center">
            <p className="text-sm">앱을 다운로드하세요.</p>
            <div className="flex justify-center space-x-2 mt-4">
              <img 
                src="/api/placeholder/136/40" 
                alt="App Store에서 다운로드"
                className="h-10"
              />
              <img 
                src="/api/placeholder/136/40" 
                alt="Google Play에서 다운로드"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default LoginPage;