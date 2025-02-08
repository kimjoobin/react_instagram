import React, { useState } from 'react';
import instagramLogo from '../../assets/images/instagram-logo.jpg';
import { Link } from 'react-router-dom';

interface RequestDto {
  email: string;
  name: string;
  username: string;
  password: string;
}

const JoinPage = () => {
  const [formData, setFormData] = useState<RequestDto>({
    email: '',
    name: '',
    username: '',
    password: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white w-[350px] border border-gray-300">
        <div className="p-8 pb-6">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-8">
            <img 
              className="h-12"
              src={instagramLogo} 
              alt="Instagram" 
            />
          </div>

          {/* Signup Message */}
          <h2 className="text-center font-semibold text-lg text-gray-500 mb-6">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </h2>

          {/* Facebook Login Button */}
          <button className="w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm mb-4 flex items-center justify-center">
            <i className="fab fa-facebook-square mr-2 text-lg"></i>
            Facebook으로 로그인
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm font-semibold text-gray-500">또는</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Signup Form */}
          <form className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="휴대폰 번호 또는 이메일 주소"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="성명"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="사용자 이름"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0095f6] text-white py-2 rounded font-semibold text-sm opacity-90 hover:opacity-100"
            >
              가입
            </button>
          </form>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500 mt-4">
            가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
          </p>
        </div>
      </div>

      {/* Login Link */}
      <div className="bg-white w-[350px] border border-gray-300 mt-3 p-4">
        <p className="text-sm text-center">
          계정이 있으신가요?{' '}
          <Link to={'/login'} className="text-[#0095f6] font-semibold">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
 
export default JoinPage;
