import React from 'react';
import { Card } from '@/components/ui/card';
import MarketSection from '@/components/MarketSection';
import OfferSection from '@/components/OfferSection';
import { 
  Clock, Star, Award, Shield, 
  MessageCircle, Phone, FileCheck, Mic 
} from 'lucide-react';

const PhoneMockup = ({ messages }) => (
  <div className="bg-gray-100 rounded-xl shadow-xl max-w-sm mx-auto overflow-hidden">
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>FoodSafety Assistant</div>
      <Mic className="w-5 h-5" />
    </div>
    <div className="p-4 space-y-4">
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
          <div className={`rounded-lg p-3 max-w-[80%] ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-white'}`}>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Presentation = () => {
  const sections = [
    {
      id: 'hero',
      className: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg',
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Rui Oliveira Dias</h1>
            <p className="text-2xl">Consultor em Segurança Alimentar</p>
            <h2 className="text-xl font-semibold">Proposta Comercial - Solução Digital em Segurança Alimentar</h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p>Especialista em Segurança Alimentar</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <p>Membro BNI Lisboa</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                <p>Consultor Pioneiro em IA</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market',
      content: <MarketSection />
    },
    {
      id: 'context',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Após Análise dos Seus Relatórios</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Desafios Atuais</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>2-3 horas por relatório</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  <span>Documentação manual intensiva</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Consultas frequentes à legislação</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Oportunidade</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-green-600" />
                  <span>95% dos consultores sem IA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span>Pioneirismo no setor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>Diferenciação competitiva</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      content: (
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
                { text: " 'Iniciar relatório de visita'", isUser: true },
                { text: "Gerando relatório padrão. Qual o estabelecimento?", isUser: false },
                { text: " 'Restaurante Central'", isUser: true },
                { text: "Iniciando relatório. Quer começar pela checklist HACCP?", isUser: false }
              ]}
            />
          </div>
        </div>
      )
    },
    {
      id: 'examples',
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Exemplos Práticos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhoneMockup
              messages={[
                { text: "Preciso verificar requisitos de temperatura", isUser: true },
                { text: "De acordo com o Codex Alimentarius e ASAE...", isUser: false }
              ]}
            />
            <PhoneMockup
              messages={[
                { text: " 'Registrar não conformidade na câmara fria'", isUser: true },
                { text: "Registrado. Sugerindo ações corretivas...", isUser: false }
              ]}
            />
          </div>
        </div>
      )
    },
    {
      id: 'roi',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Retorno do Investimento</h2>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4">
                <p className="text-3xl font-bold text-green-600">45h</p>
                <p>Economia Mensal</p>
                <p className="text-xl text-green-600">€1,350</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-green-600">+13</p>
                <p>Clientes/Mês</p>
                <p className="text-xl text-green-600">€1,950</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-green-600">490%</p>
                <p>ROI 1º Mês</p>
                <p className="text-xl text-green-600">€3,300</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'offer',
      content: <OfferSection />
    },
    {
      id: 'contact',
      content: (
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Vamos Conversar?</h2>
          <div className="space-y-2">
            <p> +351 918 911 308</p>
            <p> bilal.machraa@aiparati.pt</p>
            <p> aiparati.netlify.app</p>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Desenvolvido pela AiParaTi</p>
            <p>Sua parceira em soluções de IA</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4">
      {sections.map((section) => (
        <Card 
          key={section.id}
          className={`overflow-hidden ${section.className || 'p-6'}`}
        >
          {section.content}
        </Card>
      ))}
    </div>
  );
};

export default Presentation;
