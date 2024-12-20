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
  <div className="flex items-start space-x-4">
    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
      {day}
    </div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const OfferSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4">
      <Card className="p-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Implementação Rápida</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="space-y-6">
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

      <Card className="overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Oferta Exclusiva Early Adopter</h2>
            <p className="text-lg">Para os primeiros consultores inovadores</p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex items-center justify-center space-x-4">
              <div>
                <p className="text-lg line-through opacity-75">555€ + IVA</p>
                <p className="text-5xl font-bold">444€ + IVA</p>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded">
                <Timer className="w-6 h-6 mb-1" />
                <p className="text-sm">Válido até</p>
                <p className="font-bold">31/12/2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">O Que Está Incluído:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Assistente GPT Personalizado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Comandos por Voz</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Base de Conhecimento Atualizada</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>3 Meses de Atualizações</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Suporte Técnico Dedicado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Treinamento Personalizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Pronto para Inovar?</h2>
            <p className="text-xl">Seja o primeiro consultor com um assistente IA personalizado</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg">
              <Phone className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="font-bold">+351 918 911 308</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <MessageCircle className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="font-bold">bilal.machraa@aiparati.pt</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Globe2 className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="font-bold">aiparati.netlify.app</p>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-5 h-5" />
              <p>Desenvolvido pela AiParaTi - Sua parceira em soluções de IA</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OfferSection;