import React from 'react';
import { Clock, FileCheck, Shield, Star, Award, MessageCircle } from 'lucide-react';

const ContextSection = () => (
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
);

export default ContextSection;