import * as React from 'react';
import { useState } from 'react';
import { Bookmark, Compass, Heart, Home, MessageCircle, MoreHorizontal, PlusSquare, Search, Share } from "lucide-react";
import { Link } from "react-router-dom";
import Stories from '../../components/home/Stories';
import NavigationBar from '../../components/ui/NavigationBar';

const Main = () => {
  const stories = [
    { id: 1, username: 'your_story', isMe: true },
    { id: 2, username: 'user1', isMe: false },
    { id: 3, username: 'user2', isMe: false },
    { id: 4, username: 'user3', isMe: false },
    { id: 5, username: 'user4', isMe: false },
    { id: 6, username: 'user5', isMe: false },
  ];

  const posts = [
    {
      id: 1,
      username: 'user1',
      location: 'Seoul, Korea',
      image: '/api/placeholder/468/468',
      likes: 1234,
      caption: '오늘의 일상 📸✨ #데일리 #일상',
      comments: 89,
      time: '3시간 전'
    },
    {
      id: 2,
      username: 'user2',
      image: '/api/placeholder/468/468',
      likes: 856,
      caption: '맛있는 저녁 🍽️ #맛스타그램',
      comments: 45,
      time: '5시간 전'
    }
  ];

  const suggestions = [
    { id: 1, username: 'suggested_user1' },
    { id: 2, username: 'suggested_user2' },
    { id: 3, username: 'suggested_user3' },
    { id: 4, username: 'suggested_user4' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar/>

      {/* Main Content */}
      <main className="pt-20 pb-8 max-w-5xl mx-auto flex">
        {/* Stories and Posts Feed */}
        <div className="flex-grow max-w-[470px] mx-auto md:mr-8">
          {/* Stories */}
          <Stories stories={stories} />

          {/* Posts */}
          {posts.map(post => (
            <article key={post.id} className="bg-white border border-gray-300 rounded-lg mb-6">
              {/* Post Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <img src="/api/placeholder/32/32" alt={post.username} className="w-8 h-8 rounded-full" />
                  <div className="ml-3">
                    <span className="font-semibold text-sm">{post.username}</span>
                    {post.location && (
                      <p className="text-xs text-gray-500">{post.location}</p>
                    )}
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5" />
              </div>

              {/* Post Image */}
              <img src={post.image} alt="post" className="w-full" />

              {/* Post Actions */}
              <div className="p-3">
                <div className="flex justify-between mb-2">
                  <div className="flex space-x-4">
                    <Heart className="w-6 h-6" />
                    <MessageCircle className="w-6 h-6" />
                    <Share className="w-6 h-6" />
                  </div>
                  <Bookmark className="w-6 h-6" />
                </div>
                <p className="font-semibold text-sm mb-1">{post.likes.toLocaleString()}개의 좋아요</p>
                <p className="text-sm">
                  <span className="font-semibold mr-2">{post.username}</span>
                  {post.caption}
                </p>
                <button className="text-gray-500 text-sm mt-1">댓글 {post.comments}개 모두 보기</button>
                <span className="text-gray-400 text-xs block mt-1">{post.time}</span>
              </div>

              {/* Comment Input */}
              <div className="flex items-center border-t border-gray-300 p-3">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="flex-grow text-sm focus:outline-none"
                />
                <button className="text-blue-500 text-sm font-semibold opacity-50">게시</button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar - Only visible on desktop */}
        <div className="hidden lg:block w-[320px]">
          {/* User Profile */}
          <div className="flex items-center mb-6">
            <img src="/api/placeholder/56/56" alt="profile" className="w-14 h-14 rounded-full" />
            <div className="ml-4">
              <p className="font-semibold text-sm">username</p>
              <p className="text-gray-500 text-sm">사용자 이름</p>
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 text-sm font-semibold">회원님을 위한 추천</span>
              <button className="text-xs font-semibold">모두 보기</button>
            </div>
            
            {suggestions.map(suggestion => (
              <div key={suggestion.id} className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img src="/api/placeholder/32/32" alt={suggestion.username} className="w-8 h-8 rounded-full" />
                  <div className="ml-3">
                    <p className="text-sm font-semibold">{suggestion.username}</p>
                    <p className="text-xs text-gray-500">회원님을 위한 추천</p>
                  </div>
                </div>
                <button className="text-blue-500 text-xs font-semibold">팔로우</button>
              </div>
            ))}
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-xs text-gray-400">
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              <Link to="#">소개</Link>·
              <Link to="#">도움말</Link>·
              <Link to="#">홍보 센터</Link>·
              <Link to="#">API</Link>·
              <Link to="#">채용 정보</Link>·
              <Link to="#">개인정보처리방침</Link>·
              <Link to="#">약관</Link>·
              <Link to="#">위치</Link>·
              <Link to="#">언어</Link>
            </div>
            <p className="mt-6">© 2024 INSTAGRAM FROM META</p>
          </div>
        </div>
      </main>
    </div>
  );
}
 
export default Main;