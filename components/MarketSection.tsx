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
                <p>Aumento na demanda por consultoria</p>
              </div>
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <p>Maior foco em segurança alimentar</p>
              </div>
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <p>Adoção de tecnologias digitais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg mt-6 border border-yellow-100/50">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 text-transparent bg-clip-text mb-2 text-center">
            Desafios do Consultor
          </h3>
          <p className="text-gray-600 mb-6 text-center">Obstáculos diários que impactam a sua produtividade</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white/70 p-6 rounded-xl hover:shadow-lg transition-all border border-yellow-100/50 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-3 rounded-xl group-hover:scale-110 transition-transform mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-lg text-amber-800 mb-3">Tempo</p>
                  <div className="space-y-2">
                    <p className="text-gray-600">15-20h semanais em:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Documentação manual</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Relatórios repetitivos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/70 p-6 rounded-xl hover:shadow-lg transition-all border border-yellow-100/50 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-3 rounded-xl group-hover:scale-110 transition-transform mb-4">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-lg text-amber-800 mb-3">Legislação</p>
                  <div className="space-y-2">
                    <p className="text-gray-600">Complexidade em:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Atualizações constantes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Interpretação das normas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/70 p-6 rounded-xl hover:shadow-lg transition-all border border-yellow-100/50 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-3 rounded-xl group-hover:scale-110 transition-transform mb-4">
                  <FileCheck className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-lg text-amber-800 mb-3">Conformidade</p>
                  <div className="space-y-2">
                    <p className="text-gray-600">Exigências em:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Maior complexidade</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Documentação detalhada</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;