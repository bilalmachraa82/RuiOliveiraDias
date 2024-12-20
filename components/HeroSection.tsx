import React from 'react';
import { Award, Star, MessageCircle } from 'lucide-react';

const HeroSection = () => (
  <div className="text-center space-y-8">
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Rui Oliveira Dias</h1>
      <p className="text-2xl">14 Anos de Expertise + Inteligência Artificial</p>
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
);

export default HeroSection;