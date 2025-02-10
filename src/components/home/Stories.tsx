interface Story {
  id: number;
  username: string;
  isMe: boolean;
}

interface StoryProps {
  stories: Story[];
}

const Stories: React.FC<StoryProps> = ({ stories }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg mb-4 p-4 overflow-x-auto">
      <div className="flex space-x-4">
        {stories.map(story => (
        <div key={story.id} className="flex flex-col items-center flex-shrink-0">
          <div className={`w-16 h-16 rounded-full ring-2 ${story.isMe ? 'ring-gray-300' : 'ring-pink-500'} p-[2px]`}>
            <img
              src="/api/placeholder/56/56"
              alt={story.username}
              className="w-full h-full rounded-full"
            />
          </div>
          <span className="text-xs mt-1 truncate w-16 text-center">{story.username}</span>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;