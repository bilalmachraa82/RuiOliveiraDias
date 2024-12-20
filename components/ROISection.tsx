import React from 'react';

const ROISection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Retorno do Investimento</h2>
    <div className="bg-green-50 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <p className="text-3xl font-bold text-green-600">45h</p>
          <p>Economia Mensal</p>
          <p className="text-xl text-green-600">€1,350</p>
        </div>
        <div className="p-4">
          <p className="text-3xl font-bold text-green-600">+13</p>
          <p>Clientes/Mês</p>
          <p className="text-xl text-green-600">€1,950</p>
        </div>
        <div className="p-4">
          <p className="text-3xl font-bold text-green-600">490%</p>
          <p>ROI 1º Mês</p>
          <p className="text-xl text-green-600">€3,300</p>
        </div>
      </div>
    </div>
  </div>
);

export default ROISection;