import React, { useState } from 'react';
import SignupForm from '../../components/auth/SignupForm';
import LinkBox, { PageType } from '../../components/auth/LinkBox';
import Divider from '../../components/auth/Divider';
import Logo from '../../components/auth/Logo';

const JoinPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white w-[350px] border border-gray-300">
        <div className="p-8 pb-6">
          {/* Instagram Logo */}
          {/* <div className="flex justify-center mb-8">
            <img 
              src={instagramLogo} 
              alt="Instagram" 
              className="h-12"
            />
          </div> */}
          <Logo page='signup' />

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
          <Divider/>

          {/* Signup Form */}
          <SignupForm/>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500 mt-4">
            가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
          </p>
        </div>
      </div>

      {/* Login Link */}
      <LinkBox page={PageType.SIGNUP}/>
    </div>
  );
}
 
export default JoinPage;
