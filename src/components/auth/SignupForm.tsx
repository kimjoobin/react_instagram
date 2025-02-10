import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../api';

interface RequestDto {
  email: string;
  name: string;
  username: string;
  password: string;
}

const SignupForm = () => {
const [formData, setFormData] = useState<RequestDto>({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  const [duplicated, setDuplicated] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      if (response.status === 200) {
        console.log(response);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkEmailDuplicate = async () => {
    try {
      const response = await axiosInstance.get(`auth/email/check?email=${formData.email}`);
      if (response.data !== '') {
        console.log(response.data);
        setDuplicated(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder="휴대폰 번호 또는 이메일 주소"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
          />
          {duplicated && <p className='text-red-500 text-xs mt-1'>{duplicated}</p>}
        </div>
        <div>
          <input
            type="text"
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder="성명"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <input
            type="text"
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            placeholder="사용자 이름"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <input
            type="password"
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 focus:outline-none focus:border-gray-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm mb-4 flex items-center justify-center"
        >
          가입
        </button>
      </form>
    </>
  );
}

export default SignupForm;