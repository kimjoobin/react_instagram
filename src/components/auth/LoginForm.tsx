import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../api';

interface LoginInfo {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginInfo>({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', formData);
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Login Form */}
      <form onSubmit={handleSubmit} className="flex flex-col">
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
      </form>
    </>
  );
}

export default LoginForm;