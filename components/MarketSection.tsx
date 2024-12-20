import React from 'react';
import { AlertTriangle, TrendingUp, Clock, Shield, FileCheck } from 'lucide-react';

const MarketSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Realidade Portuguesa 2024</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">92,407</p>
            <p>Estabelecimentos de Restauração</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600">36,194</p>
            <p>Inspeções ASAE (2023)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-orange-600">€4.2M</p>
            <p>Coimas Aplicadas</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-purple-600">67%</p>
            <p>Com Irregularidades</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">Principais Infrações</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p>42% HACCP inadequado ou inexistente</p>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p>38% Falhas na documentação</p>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p>35% Registos desatualizados</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Tendências do Setor</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <p>Aumento de 23% nas fiscalizações</p>
              </div>
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <p>+15% novos estabelecimentos</p>
              </div>
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <p>Maior exigência documental</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Desafios do Consultor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-bold">Tempo</p>
                <p className="text-sm">15-20h semanais em documentação</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Shield className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-bold">Legislação</p>
                <p className="text-sm">Atualizações constantes</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <FileCheck className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-bold">Conformidade</p>
                <p className="text-sm">Maior complexidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;