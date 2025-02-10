import { Bookmark, Grid, Settings, UserSquare2 } from 'lucide-react';
import * as React from 'react';
import NavigationBar from '../../components/ui/NavigationBar';
import ProfileInfo from '../../components/profile/ProfileInfo';

const ProfilePage = () => {
  
  return (
    <>
      <NavigationBar/>
      <div className="bg-white">
      {/* 네비게이션 바의 높이(h-16)만큼 상단 여백 추가 */}
      <div className="mt-16">
        {/* 프로필 컨테이너 */}
        <div className="max-w-5xl mx-auto px-4">
          {/* 프로필 헤더 섹션 */}
          <div className="flex items-start py-8">
            {/* 프로필 이미지 */}
            <div className="w-36 h-36 mr-8 flex-shrink-0">
              <img
                src="/api/placeholder/150/150"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border border-gray-200"
              />
            </div>

            {/* 프로필 정보 */}
            <ProfileInfo/>
          </div>

          {/* 탭 메뉴 */}
          <div className="border-t">
            <div className="flex justify-center space-x-16">
              <button className="flex items-center py-4 text-xs font-semibold border-t border-black -mt-px">
                <Grid className="w-3 h-3 mr-2" />
                게시물
              </button>
              <button className="flex items-center py-4 text-xs font-semibold text-gray-500">
                <Bookmark className="w-3 h-3 mr-2" />
                저장됨
              </button>
              <button className="flex items-center py-4 text-xs font-semibold text-gray-500">
                <UserSquare2 className="w-3 h-3 mr-2" />
                태그됨
              </button>
            </div>
          </div>

          {/* 게시물 그리드 */}
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-100">
                <img
                  src={`/api/placeholder/300/300`}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;