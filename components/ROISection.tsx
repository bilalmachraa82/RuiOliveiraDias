import React from 'react';

const ROISection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Retorno do Investimento</h2>
    <div className="bg-green-50 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Poupança Mensal</h3>
          <p className="text-3xl font-bold text-blue-600">€1.350</p>
          <p className="text-sm text-gray-600">45h × €30/h</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Clientes/Mês</h3>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold text-purple-600">+8</p>
          </div>
          <p className="text-sm text-gray-600">~4h/cliente poupadas</p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">Receita Extra</h3>
          <p className="text-3xl font-bold text-pink-600">€1.200</p>
          <p className="text-sm text-gray-600">8 × €150/cliente</p>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-rose-800 mb-2">ROI 1º Mês</h3>
          <p className="text-3xl font-bold text-rose-600">356%</p>
          <p className="text-sm text-gray-600">€2.550 benefício total</p>
        </div>
      </div>
    </div>
  </div>
);

export default ROISection;