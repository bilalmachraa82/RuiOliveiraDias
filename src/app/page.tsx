import React from 'react';
import { Card } from '@/components/ui/card';
import { MarketSection, OfferSection } from '@/components';
import Image from 'next/image';
import { 
  BadgeCheck, 
  Sparkles, 
  ClipboardCheck, 
  FileCheck, 
  Shield, 
  Clock, 
  BookOpen, 
  CheckCircle,
  Mic,
  Award,
  MessageCircle,
  Star,
  Phone
} from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';

interface Message {
  isUser: boolean;
  text: string;
}

interface PhoneMockupProps {
  messages: Message[];
}

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
            <h2 className="text-xl font-semibold max-w-2xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" /> Revolucione a sua Consultoria em Segurança Alimentar com IA
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" /> Transforme horas de trabalho em minutos. A nossa solução combina a sua experiência com IA avançada para relatórios mais precisos e eficientes.
              </span>
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white/15 p-6 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all group">
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="w-8 h-8 text-amber-300 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">Economia de Tempo</p>
                  <p className="text-sm opacity-80">Reduza em 75% o tempo gasto em relatórios</p>
                </div>
              </div>
              <div className="bg-white/15 p-6 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all group">
                <div className="flex flex-col items-center space-y-2">
                  <Shield className="w-8 h-8 text-amber-300 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">Conformidade Total</p>
                  <p className="text-sm opacity-80">Atenda a todas as normas ASAE</p>
                </div>
              </div>
              <div className="bg-white/15 p-6 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all group">
                <div className="flex flex-col items-center space-y-2">
                  <Award className="w-8 h-8 text-amber-300 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">Qualidade Superior</p>
                  <p className="text-sm opacity-80">Relatórios profissionais e detalhados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 space-y-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={section.className}
          >
            {section.content}
          </section>
        ))}
        <MarketSection />
        <OfferSection />
      </div>
    </main>
  );
};

export default Presentation;
