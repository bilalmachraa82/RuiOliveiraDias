import React from 'react';
import { Card } from '@/components/ui/card';
import MarketSection from '@/components/MarketSection';
import OfferSection from '@/components/OfferSection';
import { 
  BadgeCheck, ClipboardCheck, Sparkles,
  MessageCircle, Phone, Mic,
  Clock, FileCheck, Shield,
  Star, Award, TrendingUp
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-transparent bg-clip-text drop-shadow-sm">
              Rui Oliveira Dias
            </h1>
            <p className="text-2xl">Consultor em Segurança Alimentar</p>
            <h2 className="text-xl font-semibold max-w-2xl mx-auto">
              🚀 Revolucione sua Consultoria em Segurança Alimentar com IA
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              ⚡ Transforme horas de trabalho em minutos. Nossa solução combina sua expertise com IA avançada para relatórios mais precisos e eficientes.
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
      id: 'offer',
      content: <OfferSection />
    },
    {
      id: 'roi',
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Impacto no Seu Negócio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-3 rounded-xl w-fit">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">45h</p>
                  <p className="text-gray-600">Economia Mensal</p>
                  <p className="text-xl text-emerald-600 font-semibold">€1,350</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-3 rounded-xl w-fit">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">+13</p>
                  <p className="text-gray-600">Clientes/Mês</p>
                  <p className="text-xl text-blue-600 font-semibold">€1,950</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-3 rounded-xl w-fit">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">490%</p>
                  <p className="text-gray-600">ROI 1º Mês</p>
                  <p className="text-xl text-purple-600 font-semibold">€3,300</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Inovação e Diferenciação</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BadgeCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Primeiro consultor com assistente AI personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Destaque-se da concorrência com tecnologia de ponta</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <ClipboardCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Processos mais eficientes e profissionais</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-800">Alavancagem do Negócio</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Reduza o tempo gasto em tarefas repetitivas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Atenda mais clientes com a mesma qualidade</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Base de conhecimento sempre atualizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      content: (
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Pronto para Revolucionar sua Consultoria?
            </h2>
            <p className="text-xl text-gray-600">
              Vamos criar seu assistente AI personalizado e otimizar seus processos
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-lg">
                <Phone className="w-6 h-6 text-blue-600" />
                <a href="tel:+351918911308" className="text-blue-600 hover:text-blue-800 transition-colors">
                  +351 918 911 308
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-lg">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <a href="mailto:bilal.machraa@aiparati.pt" className="text-blue-600 hover:text-blue-800 transition-colors">
                  bilal.machraa@aiparati.pt
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>Desenvolvido pela AiParaTi</p>
            <p>Especialistas em Soluções AI para Consultoria</p>
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
