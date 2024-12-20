import React from 'react';
import { FileCheck, Mic, Shield } from 'lucide-react';
import PhoneMockup from '../PhoneMockup';

const SolutionSection = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold">Seu Assistente Pessoal com IA</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Funcionalidades Principais</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start space-x-3">
              <FileCheck className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-bold">Automação de Relatórios</p>
                <p className="text-sm text-gray-600">De 2 horas para 15 minutos</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start space-x-3">
              <Mic className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-bold">Comandos por Voz</p>
                <p className="text-sm text-gray-600">Mãos livres durante inspeções</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-bold">Base de Conhecimento</p>
                <p className="text-sm text-gray-600">Legislação sempre atualizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PhoneMockup
        messages={[
          { text: "🎤 'Iniciar relatório de visita'", isUser: true },
          { text: "Gerando relatório padrão. Qual o estabelecimento?", isUser: false },
          { text: "🎤 'Restaurante Central'", isUser: true },
          { text: "Iniciando relatório. Quer começar pela checklist HACCP?", isUser: false }
        ]}
      />
    </div>
  </div>
);

export default SolutionSection;