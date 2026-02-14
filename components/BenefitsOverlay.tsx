import React from 'react';
/* Added LockIcon to the imports list from './Icons' */
import { CloseIcon, VerifiedBadge, CheckCircleIcon, LockIcon } from './Icons';
import { CreatorStats } from '../types';

interface BenefitsOverlayProps {
  onClose: () => void;
  stats: CreatorStats;
  name: string;
  username: string;
  avatar: string;
  cover: string;
}

const BenefitsOverlay: React.FC<BenefitsOverlayProps> = ({ onClose, stats, name, username, avatar, cover }) => {
  const TELEGRAM_LINK = 'https://t.me/isabelaonly_bot';

  const handleSubscribe = () => {
    window.open(TELEGRAM_LINK, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#0f0f12] overflow-y-auto">
      {/* Header with Exit Button */}
      <div className="relative h-64">
        <img src={cover} alt="Cover" className="w-full h-full object-cover blur-sm opacity-60" />
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <div className="absolute -bottom-10 left-8">
          <div className="w-24 h-24 rounded-full border-4 border-[#0f0f12] overflow-hidden shadow-2xl">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-8 pt-16 pb-12 space-y-8">
        {/* Profile Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black">{name}</h1>
            <VerifiedBadge className="w-6 h-6" />
          </div>
          <p className="text-gray-400 font-medium">@{username}</p>
        </div>

        {/* Stats Row */}
        <div className="flex gap-6 text-gray-200 font-bold">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/></svg>
            <span>{stats.photos}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z" strokeWidth="2"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeWidth="2"/></svg>
            <span>{stats.videos}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2"/></svg>
            <span>{stats.likes}</span>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-6">
          <h2 className="text-center text-lg font-black tracking-tight leading-tight uppercase max-w-xs mx-auto">
            ASSINE AGORA E OBTENHA ESTES BENEFÍCIOS
          </h2>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 flex-shrink-0" />
              <span className="text-[15px] font-bold text-gray-200">Acesso a todos conteúdos exclusivos</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 flex-shrink-0" />
              <span className="text-[15px] font-bold text-gray-200">Chat ao vivo com a {name}</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 flex-shrink-0" />
              <span className="text-[15px] font-bold text-gray-200">
                Vídeo chamada com a {name} enfiando os dedinhos para os 50 primeiros compradores
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 flex-shrink-0" />
              <span className="text-[15px] font-bold text-gray-200">E muito mais...</span>
            </li>
          </ul>
        </div>

        {/* Promo Text */}
        <div className="text-center">
          <p className="text-[#ff5c28] font-black text-sm leading-relaxed max-w-[250px] mx-auto uppercase">
            Presente surpresa para os +50 primeiros assinantes!
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleSubscribe}
          className="w-full bg-[#ff5c28] hover:bg-[#e64d1c] text-white rounded-2xl py-6 px-6 shadow-2xl transition-all active:scale-95 group"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black">Assine agora</span>
            <span className="text-sm font-bold opacity-90">por R$ 9,90</span>
          </div>
        </button>

        <div className="flex items-center justify-center gap-6 text-gray-500 text-[10px] font-bold uppercase pt-4">
           <span className="flex items-center gap-1"><LockIcon className="w-3 h-3" /> Pagamento 100% Seguro</span>
           <span className="flex items-center gap-1">🏠 Dados Protegidos</span>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOverlay;