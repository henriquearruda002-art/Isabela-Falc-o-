import React, { useState } from 'react';
import { VerifiedBadge, ShareIcon } from './Icons';
import { CreatorStats } from '../types';

interface ProfileHeaderProps {
  name: string;
  username: string;
  stats: CreatorStats;
  description: string;
  avatar: string;
  cover: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, username, stats, description, avatar, cover }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `Perfil de ${name}`,
        text: `Confira o conteúdo exclusivo de ${name} (@${username})`,
        url: url,
      }).catch(() => {
        // Fallback to clipboard if share fails or is cancelled
        copyToClipboard(url);
      });
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-48 md:h-64 overflow-hidden relative">
        <img src={cover} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 flex gap-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
           <span className="flex items-center gap-1">📄 {stats.posts}</span>
           <span className="flex items-center gap-1">🎥 {stats.videos}</span>
           <span className="flex items-center gap-1">❤️ {stats.likes}</span>
        </div>
      </div>

      {/* Profile Info Container */}
      <div className="px-4 pb-4">
        <div className="flex justify-between items-end -mt-12 md:-mt-16 mb-4 px-2">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#0f0f12] overflow-hidden bg-[#1c1c22]">
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 border-2 border-[#0f0f12] rounded-full"></div>
          </div>
          
          <div className="flex gap-2 mb-2">
            <button 
              onClick={handleShare}
              className="p-2.5 rounded-full bg-[#1c1c22] border border-[#2d2d35] hover:bg-[#2d2d35] transition-all active:scale-95 relative group"
              title="Compartilhar Perfil"
            >
              <ShareIcon className="w-6 h-6 text-white" />
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#ff5c28] text-white text-[10px] font-bold py-1 px-2 rounded-lg whitespace-nowrap animate-bounce">
                  Link Copiado!
                </span>
              )}
            </button>
            <button className="p-2.5 rounded-full bg-[#1c1c22] border border-[#2d2d35] hover:bg-[#2d2d35] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
            </button>
          </div>
        </div>

        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl font-bold">{name}</h1>
            <VerifiedBadge className="w-6 h-6" />
            <span className="text-xl">🌸</span>
          </div>
          <p className="text-[#ff5c28] font-medium text-sm">@{username}</p>
          <div className="text-green-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mt-1">
            DISPONÍVEL AGORA <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-300 leading-relaxed max-w-2xl">
          <p className={showFullDesc ? "" : "line-clamp-2"}>
            {description}
          </p>
          <button 
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-[#ff5c28] font-bold mt-2 hover:underline focus:outline-none"
          >
            {showFullDesc ? "Mostrar menos" : "Mostrar mais"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;