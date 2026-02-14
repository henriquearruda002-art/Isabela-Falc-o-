import React from 'react';
import { LockIcon } from './Icons';

interface SubscriptionPlansProps {
  mainPrice: number;
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ mainPrice }) => {
  const TELEGRAM_SUBSCRIPTION_LINK = 'https://t.me/isabelaonly_bot';
  const TELEGRAM_PREVIEW_LINK = 'https://t.me/+egEzuuMN3D5jYjBh';

  const handleSubscriptionRedirect = () => {
    window.open(TELEGRAM_SUBSCRIPTION_LINK, '_blank');
  };

  const handlePreviewRedirect = () => {
    window.open(TELEGRAM_PREVIEW_LINK, '_blank');
  };

  return (
    <div className="px-4 py-4 space-y-4">
      {/* Exclusive Content Card */}
      <div className="bg-[#1c1c22] rounded-3xl p-6 border border-[#2d2d35] text-center shadow-xl">
        <h2 className="text-2xl font-black mb-1">Conteúdo Exclusivo</h2>
        <div className="text-[#ff5c28] text-xl font-black mb-6 flex items-center justify-center gap-2">
          ACESSE AGORA 🔥🔥
        </div>
        
        <div className="flex justify-start mb-4">
          <div className="bg-[#ff5c28] text-white text-[11px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">
            ACESSO VIP
          </div>
        </div>
        
        <button 
          onClick={handleSubscriptionRedirect}
          className="w-full bg-[#ff5c28] hover:bg-[#e64d1c] text-white rounded-2xl py-5 px-6 shadow-lg transition-all active:scale-95 mb-6"
        >
          <span className="text-xl font-black">Assinar Conteúdo VIP</span>
        </button>
        
        <p className="text-[#ff5c28] text-[11px] font-black mb-6 uppercase leading-tight tracking-tight">
          + CHAMADA DE VÍDEO COMIGO HOJE PARA OS PRIMEIROS 10 COMPRADORES!
        </p>
        
        <div className="flex items-center justify-center gap-2 text-gray-400 text-[12px] font-medium border-t border-[#2d2d35] pt-6">
          <div className="flex items-center gap-1.5">
            <LockIcon className="w-4 h-4" />
            <span>Pagamento 100% seguro</span>
          </div>
          <span className="text-gray-600">•</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14H11V21L20 10H13Z"/></svg>
            <span>Acesso imediato</span>
          </div>
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="space-y-3">
        <button 
          onClick={handleSubscriptionRedirect}
          className="w-full bg-[#ff5c28] hover:bg-[#e64d1c] text-white rounded-2xl py-5 px-6 text-xl font-black shadow-lg transition-all active:scale-95"
        >
          Agora de Assinar
        </button>
        <button 
          onClick={handlePreviewRedirect}
          className="w-full bg-[#1c1c22] hover:bg-[#25252d] text-white rounded-2xl py-5 px-6 text-lg font-black border border-[#2d2d35] shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          👀 Veja o meu grupo de prévios
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlans;