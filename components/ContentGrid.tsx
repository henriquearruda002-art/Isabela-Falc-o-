
import React from 'react';
import { ContentItem, CreatorStats } from '../types';
import { PlayIcon } from './Icons';

interface ContentGridProps {
  items: ContentItem[];
  stats: CreatorStats;
}

const ContentGrid: React.FC<ContentGridProps> = ({ items, stats }) => {
  return (
    <div className="px-4 py-8">
      {/* Stats Divider */}
      <div className="flex justify-center items-center gap-3 text-sm font-bold mb-8">
        <span>{stats.posts} Postagens</span>
        <span className="text-gray-600">•</span>
        <span>{stats.videos} vídeos</span>
        <span className="text-gray-600">•</span>
        <span>{stats.photos} Fotos</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.id} className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#1c1c22] cursor-pointer shadow-xl">
            <img 
              src={item.thumbnail} 
              alt="Content" 
              className={`w-full h-full object-cover blur-3xl brightness-[0.4] scale-125`}
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-black/30 backdrop-blur-md rounded-full p-4 border border-white/20">
                 <PlayIcon className="w-10 h-10 text-white" />
               </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute top-3 left-3 flex gap-2">
               <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold">
                 <span>❤️ {item.likes.replace('K', ' mil')}</span>
               </div>
               <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold">
                 <span>💬 {item.comments.replace('K', ' mil')}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="text-[#ff5c28] font-black text-lg hover:underline transition-all">
          Mostrar mais
        </button>
      </div>
    </div>
  );
};

export default ContentGrid;
