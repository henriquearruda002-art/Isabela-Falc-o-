
import React, { useState, useEffect } from 'react';
import AgeGate from './components/AgeGate';
import ProfileHeader from './components/ProfileHeader';
import ContentGrid from './components/ContentGrid';
import SubscriptionPlans from './components/SubscriptionPlans';
import FAQ from './components/FAQ';
import BenefitsOverlay from './components/BenefitsOverlay';
import { CreatorStats, ContentItem } from './types';

const CREATOR_DATA = {
  name: "Isabela Falcão",
  username: "isabe_lafalcao",
  description: "Olá, sou uma novinha bem animada de 20 anos entrando nesse universo de criação de conteúdos! Conteúdos bem caseiros e amadores, sozinha e acompanhada e pode entrar sem medo que eu cuido de você...",
  avatar: "https://i.ibb.co/BKTM91T0/IMG-20260212-215348.jpg",
  cover: "https://i.ibb.co/LzZfPNqd/IMG-20260212-225508.jpg",
  stats: {
    posts: 502,
    videos: 148,
    photos: 354,
    likes: "20.2K"
  } as CreatorStats
};

const CONTENT_ITEMS: ContentItem[] = [
  { id: '1', type: 'video', thumbnail: 'https://picsum.photos/id/642/400/500', likes: '67.4K', comments: '1.9K', isLocked: true },
  { id: '2', type: 'video', thumbnail: 'https://picsum.photos/id/643/400/500', likes: '89.6K', comments: '7.1K', isLocked: true },
  { id: '3', type: 'video', thumbnail: 'https://picsum.photos/id/645/400/500', likes: '55.3K', comments: '8.4K', isLocked: true },
  { id: '4', type: 'video', thumbnail: 'https://picsum.photos/id/649/400/500', likes: '42.1K', comments: '3.2K', isLocked: true },
  { id: '5', type: 'photo', thumbnail: 'https://picsum.photos/id/651/400/500', likes: '12.4K', comments: '452', isLocked: true },
  { id: '6', type: 'photo', thumbnail: 'https://picsum.photos/id/652/400/500', likes: '18.9K', comments: '612', isLocked: true },
];

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [showBenefits, setShowBenefits] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified') === 'true';
    setIsVerified(verified);
    setLoading(false);
  }, []);

  if (loading) return <div className="min-h-screen"></div>;

  if (!isVerified) {
    return <AgeGate onVerified={() => setIsVerified(true)} />;
  }

  return (
    <div className="min-h-screen max-w-lg mx-auto border-x border-[#2d2d35]/30 bg-[#0f0f12]/60 backdrop-blur-md relative">
      {showBenefits && (
        <BenefitsOverlay 
          onClose={() => setShowBenefits(false)} 
          stats={CREATOR_DATA.stats}
          name={CREATOR_DATA.name}
          username={CREATOR_DATA.username}
          avatar={CREATOR_DATA.avatar}
          cover={CREATOR_DATA.cover}
        />
      )}
      
      <main className="pb-12">
        <ProfileHeader 
          name={CREATOR_DATA.name}
          username={CREATOR_DATA.username}
          stats={CREATOR_DATA.stats}
          description={CREATOR_DATA.description}
          avatar={CREATOR_DATA.avatar}
          cover={CREATOR_DATA.cover}
        />
        
        <SubscriptionPlans 
          mainPrice={9.90}
        />
        
        <ContentGrid items={CONTENT_ITEMS} stats={CREATOR_DATA.stats} />
        
        <FAQ />
      </main>
    </div>
  );
};

export default App;
