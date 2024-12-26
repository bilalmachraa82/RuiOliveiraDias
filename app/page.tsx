import React from 'react';
import { Card } from '@/components/ui/card';
import MarketSection from '@/components/MarketSection';
import OfferSection from '@/components/OfferSection';
import Image from 'next/image';
import { 
  BadgeCheck, 
  Sparkles, 
  ClipboardCheck, 
  MessageCircle, 
  Star,
  Phone,
  Clock,
  FileCheck,
  Shield,
  Award,
  Mic
} from 'lucide-react';

interface Message {
  isUser: boolean;
  text: string;
}

interface PhoneMockupProps {
  messages: Message[];
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ messages }) => (
  <div className="bg-gray-100 rounded-xl shadow-xl max-w-sm mx-auto overflow-hidden">
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>Assistente de Segurança Alimentar</div>
      <Mic className="w-5 h-5 text-white" />
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-transparent bg-clip-text drop-shadow-sm">
              Rui Oliveira Dias
            </h1>
            <p className="text-2xl">Consultor em Segurança Alimentar</p>
            <h2 className="text-xl font-semibold max-w-2xl mx-auto">
              🚀 Revolucione a sua Consultoria em Segurança Alimentar com IA
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              ⚡ Transforme horas de trabalho em minutos. A nossa solução combina a sua experiência com IA avançada para relatórios mais precisos e eficientes.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white/15 p-6 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all group">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg">
                  <BadgeCheck className="w-8 h-8 mx-auto text-white" />
                </div>
                <p className="font-semibold text-lg">🛡️ 20+ Anos de Experiência</p>
              </div>
              <div className="bg-white/15 p-6 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all group">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg">
                  <ClipboardCheck className="w-8 h-8 mx-auto text-white" />
                </div>
                <p className="font-semibold text-lg">📊 Relatórios Inteligentes</p>
              </div>
              <div className="bg-white/15 p-6 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all group">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg">
                  <Sparkles className="w-8 h-8 mx-auto text-white" />
                </div>
                <p className="font-semibold text-lg">⚡ 70% Mais Rápido</p>
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
          <h2 className="text-3xl font-bold">O Seu Assistente Pessoal com IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Funcionalidades Principais</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-start space-x-3">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-bold">Automatização de Relatórios</p>
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
                { isUser: true, text: 'Iniciar relatório de visita' },
                { isUser: false, text: 'A gerar relatório padrão. Qual o estabelecimento?' },
                { isUser: true, text: 'Restaurante Central' },
                { isUser: false, text: 'A iniciar relatório. Quer começar pela lista HACCP?' }
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
                { isUser: true, text: 'Preciso verificar requisitos de temperatura' },
                { isUser: false, text: 'De acordo com o Codex Alimentarius e ASAE...' }
              ]}
            />
            <PhoneMockup
              messages={[
                { isUser: true, text: 'Registrar não conformidade na câmara fria' },
                { isUser: false, text: 'Registrado. Sugerindo ações corretivas...' }
              ]}
            />
          </div>
        </div>
      )
    },
    {
      id: 'offer',
      content: <OfferSection />
    },
    {
      id: 'innovation',
      content: (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Inovação e Diferenciação
            </h2>
            <p className="text-xl text-gray-600">
              Transforme a sua consultoria com tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white/70 p-6 rounded-xl hover:shadow-lg transition-all border border-blue-100/50 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-xl group-hover:scale-110 transition-transform mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-blue-800 mb-3">Automação Inteligente</p>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>🤖 Assistente IA dedicado</li>
                      <li>⚡ Processos otimizados</li>
                      <li>📱 Acesso em qualquer lugar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/70 p-6 rounded-xl hover:shadow-lg transition-all border border-purple-100/50 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-xl group-hover:scale-110 transition-transform mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-purple-800 mb-3">Diferenciação</p>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>🎯 Serviço personalizado</li>
                      <li>🔍 Análise preditiva</li>
                      <li>📊 Relatórios detalhados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/70 p-6 rounded-xl hover:shadow-lg transition-all border border-pink-100/50 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-xl group-hover:scale-110 transition-transform mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-pink-800 mb-3">Potencialização</p>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>⚡ Maior produtividade</li>
                      <li>🎯 Foco estratégico</li>
                      <li>🌟 Qualidade superior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Rui, vamos revolucionar
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                a sua consultoria em conjunto?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              O seu assistente IA personalizado está pronto para começar
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="group">
                <a href="tel:+351918911308" className="block">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group-hover:bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-105">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-full group-hover:bg-white">
                        <Phone className="w-8 h-8 mx-auto text-blue-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors">
                          Ligar Agora
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-blue-100 transition-colors">
                          +351 918 911 308
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="group">
                <a href="mailto:bilal.machraa@aiparati.pt" className="block">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group-hover:bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-105">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-full group-hover:bg-white">
                        <MessageCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors">
                          Enviar Email
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-blue-100 transition-colors">
                          bilal.machraa@aiparati.pt
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>Desenvolvido pela AiParaTi</p>
            <p>Especialistas em Soluções IA para Consultoria</p>
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
