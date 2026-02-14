
import React, { useState } from 'react';
import { isAdult } from '../utils/ageValidator';

interface AgeGateProps {
  onVerified: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerified }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);

    if (isNaN(d) || isNaN(m) || isNaN(y)) {
      setError('Por favor, preencha todos os campos corretamente.');
      return;
    }

    if (isAdult(d, m, y)) {
      localStorage.setItem('ageVerified', 'true');
      onVerified();
    } else {
      setError('Você deve ter 18 anos ou mais para acessar este conteúdo.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#1c1c22]/90 p-8 rounded-3xl border border-[#2d2d35] shadow-2xl backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Confirmação de Idade</h1>
          <p className="text-gray-400 text-sm">
            Este site contém conteúdo adulto. Por favor, confirme que você tem 18 anos ou mais para continuar.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1 ml-1 uppercase font-semibold">Dia</label>
              <input
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="01"
                className="w-full bg-[#0f0f12] border border-[#2d2d35] rounded-xl py-3 px-4 text-center focus:outline-none focus:border-[#ff5c28] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 ml-1 uppercase font-semibold">Mês</label>
              <input
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="01"
                className="w-full bg-[#0f0f12] border border-[#2d2d35] rounded-xl py-3 px-4 text-center focus:outline-none focus:border-[#ff5c28] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 ml-1 uppercase font-semibold">Ano</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2000"
                className="w-full bg-[#0f0f12] border border-[#2d2d35] rounded-xl py-3 px-4 text-center focus:outline-none focus:border-[#ff5c28] transition-colors"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs text-center font-medium">{error}</p>}

          <button
            onClick={handleVerify}
            className="w-full bg-[#ff5c28] hover:bg-[#e64d1c] text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95"
          >
            CONFIRMAR IDADE
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2d2d35] text-center">
          <p className="text-xs text-gray-500">
            Ao clicar em confirmar, você declara ter idade legal de acordo com as leis do seu país.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
