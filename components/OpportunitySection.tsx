import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const OpportunitySection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Oportunidade Única</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">Seu Diferencial</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Star className="w-5 h-5 text-green-600" />
              <p>Primeiro consultor com IA em Portugal</p>
            </div>
            <div className="flex items-start space-x-2">
              <Star className="w-5 h-5 text-green-600" />
              <p>Destaque no BNI e no mercado</p>
            </div>
            <div className="flex items-start space-x-2">
              <Star className="w-5 h-5 text-green-600" />
              <p>14 anos de experiência + tecnologia</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Vantagem Competitiva</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <p>95% dos consultores sem IA</p>
            </div>
            <div className="flex items-start space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <p>Mercado valoriza inovação</p>
            </div>
            <div className="flex items-start space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <p>Momento ideal para pioneirismo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;