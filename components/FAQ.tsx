
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const FAQ_ITEMS = [
  {
    question: "É sigiloso? Vai aparecer no meu extrato o nome do pix?",
    answer: "Sim, é totalmente sigiloso. O nome que aparece no extrato é de uma processadora de pagamentos genérica, sem qualquer menção ao conteúdo ou à plataforma."
  },
  {
    question: "Quando tenho acesso depois do pagamento?",
    answer: "O acesso é imediato após a confirmação do pagamento. No Pix, leva apenas alguns segundos."
  },
  {
    question: "Posso cancelar quando quiser? Uma assinatura renovada?",
    answer: "Sim, você pode cancelar a renovação automática a qualquer momento nas configurações do seu perfil."
  },
  {
    question: "Tem reembolso?",
    answer: "Por se tratar de conteúdo digital de consumo imediato, não oferecemos reembolso após o acesso aos conteúdos."
  },
  {
    question: "Como funciona a \"chamada de vídeo\"?",
    answer: "As chamadas de vídeo são agendadas diretamente via chat após a assinatura dos planos que contemplam este benefício."
  },
  {
    question: "Posso pedir conteúdo personalizado?",
    answer: "Sim, assinantes VIP podem solicitar conteúdos personalizados mediante orçamento via chat privado."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-black mb-8">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="bg-[#1c1c22] rounded-2xl border border-[#2d2d35] overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-[#25252d]"
            >
              <span className="text-sm font-bold leading-tight pr-4">{item.question}</span>
              <ChevronDownIcon 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-[#2d2d35] pt-4 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest pb-8">
        individual de Uso • Política de
      </div>
    </div>
  );
};

export default FAQ;
