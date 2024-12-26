import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Clock, Star, Award, Shield, 
  MessageCircle, Phone, FileCheck, Mic,
  AlertTriangle, TrendingUp, CheckCircle,
  Calendar, Timer, Globe2
} from 'lucide-react';

interface TimelineItemProps {
  day: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ day, title, description }) => (
  <div className="flex items-start space-x-4 bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
      {day}
    </div>
    <div>
      <h4 className="font-bold text-lg text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const OfferSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4">
      <Card className="p-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Implementação Rápida</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <div className="space-y-4">
              <TimelineItem 
                day="48h"
                title="Versão Beta"
                description="Seu assistente personalizado pronto para uso inicial"
              />
              <TimelineItem 
                day="1 Semana"
                title="Projeto Finalizado"
                description="Ajustes e personalização completa baseados no seu feedback"
              />
              <TimelineItem 
                day="3 Meses"
                title="Suporte Contínuo"
                description="Atualizações e suporte técnico dedicado"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 text-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
              Proposta Especial
            </h2>
            <p className="text-xl text-blue-100">Solução AI desenvolvida exclusivamente para sua consultoria</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center space-x-8">
              <div className="space-y-2">
                <div className="relative">
                  <p className="text-lg line-through opacity-75 absolute -top-8 right-0">555€ + IVA</p>
                  <p className="text-6xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">444€</p>
                  <p className="text-xl text-blue-200">+ IVA</p>
                </div>
                <p className="text-sm text-blue-200">Economia de 111€</p>
              </div>
              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 px-6 py-4 rounded-xl">
                <Timer className="w-8 h-8 mb-2 text-amber-300" />
                <p className="text-sm text-amber-200">Válido até</p>
                <p className="font-bold text-amber-300">31/12/2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="font-bold text-2xl mb-6 text-amber-200">Inclui:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-amber-400/20 to-yellow-400/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-blue-100">Assistente GPT Personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-amber-400/20 to-yellow-400/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-blue-100">Comandos por Voz</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-amber-400/20 to-yellow-400/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-blue-100">Base de Conhecimento Atualizada</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-amber-400/20 to-yellow-400/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-blue-100">3 Meses de Atualizações</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-amber-400/20 to-yellow-400/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-blue-100">Suporte Técnico Dedicado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OfferSection;