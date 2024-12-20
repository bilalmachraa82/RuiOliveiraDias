import React from 'react';

const OfferSection = () => (
  
  
  <div className="text-center space-y-6">
    <h2 className="text-3xl font-bold">Oferta Exclusiva</h2>
    <div>
      <p className="text-lg line-through">555€ + IVA</p>
      <p className="text-5xl font-bold">444€ + IVA</p>
      <p className="text-xl mt-2">Economia de 111€</p>
    </div>
    <div className="bg-white/20 p-4 rounded-lg">
      <h3 className="font-bold mb-4">Inclui:</h3>
      <ul className="space-y-2 text-left">
        <li>✓ Versão beta em 48h</li>
        <li>✓ Projeto finalizado em 1 semana</li>
        <li>✓ 3 meses de atualizações</li>
        <li>✓ Suporte técnico dedicado</li>
      </ul>
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
    </div>
  );
};

export default OfferSection;