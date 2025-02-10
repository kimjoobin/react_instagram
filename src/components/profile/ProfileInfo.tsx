import { Settings } from "lucide-react";

interface ProfileStats {
  posts: number;
  followers: number;
  following: number;
}

interface ProfileData {
  username: string;
  fullName: string;
  bio: string;
  stats: ProfileStats;
}

const ProfileInfo = () => {
  // 프로필 데이터 예시
  const profileData: ProfileData = {
    username: "username",
    fullName: "Full Name",
    bio: "This is a bio description\n🌍 Location\n📧 Contact",
    stats: {
      posts: 100,
      followers: 1500,
      following: 800
    }
  };
  return (
    <div className="flex-1">
      {/* 유저네임 및 버튼 */}
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-normal mr-4">{profileData.username}</h2>
        <button className="bg-gray-100 px-4 py-1.5 rounded-lg font-medium mr-3">
          프로필 편집
        </button>
        <button className="bg-gray-100 px-4 py-1.5 rounded-lg font-medium mr-3">
          보관된 스토리 보기
        </button>
        <Settings className="w-6 h-6 cursor-pointer text-gray-700" />
      </div>

      {/* 통계 */}
      <div className="flex items-center mb-6 space-x-10">
        <span><strong className="font-semibold">{profileData.stats.posts}</strong> 게시물</span>
        <span><strong className="font-semibold">{profileData.stats.followers}</strong> 팔로워</span>
        <span><strong className="font-semibold">{profileData.stats.following}</strong> 팔로잉</span>
      </div>

      {/* 이름 및 소개 */}
      <div>
        <h1 className="font-semibold mb-1">{profileData.fullName}</h1>
        <p className="whitespace-pre-line text-sm">{profileData.bio}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;