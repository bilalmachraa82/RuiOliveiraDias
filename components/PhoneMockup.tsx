import React from 'react';

interface Message {
  isUser: boolean;
  text: string;
}

interface PhoneMockupProps {
  messages: Message[];
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ messages }) => (
  <div className="bg-gray-100 rounded-xl shadow-xl max-w-sm mx-auto overflow-hidden">
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>Assistente de Segurança Alimentar</div>
    </div>
    <div className="p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`rounded-lg px-4 py-2 max-w-[80%] ${
              message.isUser
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PhoneMockup;
