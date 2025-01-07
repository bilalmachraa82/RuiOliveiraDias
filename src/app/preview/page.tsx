'use client';

import React from 'react';

export default function PreviewPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Cabeçalho */}
        <div style={{
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e3a8a'
          }}>
            Solução Digital para Consultoria em Segurança Alimentar
          </h1>
        </div>

        {/* Conteúdo */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ marginBottom: '1rem' }}>Prezado Rui Oliveira Dias,</p>

          <p style={{ 
            marginBottom: '1.5rem',
            color: '#374151',
            lineHeight: '1.6'
          }}>
            Espero que esta mensagem o encontre bem. Venho apresentar-lhe a primeira versão da sua solução digital 
            para consultoria em segurança alimentar, desenvolvida com tecnologias modernas e focada em proporcionar 
            uma experiência profissional excepcional.
          </p>

          {/* Características */}
          <div style={{
            backgroundColor: '#eff6ff',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e3a8a',
              marginBottom: '1rem'
            }}>
              Principais Características Implementadas:
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#1d4ed8', fontWeight: '500' }}>Interface Moderna e Responsiva: </span>
                <span>Design profissional adaptável a todos os dispositivos</span>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#1d4ed8', fontWeight: '500' }}>Seções Estratégicas:</span>
                <ul style={{ 
                  listStyle: 'disc',
                  marginLeft: '1.5rem',
                  marginTop: '0.5rem',
                  color: '#374151'
                }}>
                  <li>Apresentação dos seus serviços</li>
                  <li>Demonstração do assistente com IA</li>
                  <li>Estatísticas do mercado português</li>
                  <li>Benefícios e retorno sobre investimento</li>
                </ul>
              </li>
              <li>
                <span style={{ color: '#1d4ed8', fontWeight: '500' }}>Demonstração Interativa: </span>
                <span>Simulação do assistente com IA em funcionamento</span>
              </li>
            </ul>
          </div>

          {/* Tecnologia */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
              A solução foi desenvolvida utilizando Next.js 14, garantindo:
            </p>
            <ul style={{ 
              listStyle: 'disc',
              marginLeft: '1.5rem',
              color: '#374151'
            }}>
              <li>Performance excepcional</li>
              <li>SEO otimizado</li>
              <li>Carregamento rápido das páginas</li>
              <li>Experiência fluida para os visitantes</li>
            </ul>
          </div>

          {/* Próximos Passos */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
              Para a próxima fase, sugiro focarmos em:
            </p>
            <ol style={{ 
              listStyle: 'decimal',
              marginLeft: '1.5rem',
              color: '#374151'
            }}>
              <li>Integração com sistema de análise de dados</li>
              <li>Implementação do formulário de contato</li>
              <li>Adição de mais casos de uso e demonstrações</li>
              <li>Otimização para mercados específicos</li>
            </ol>
          </div>

          <p style={{ color: '#374151', marginBottom: '2rem' }}>
            Gostaria de agendar uma reunião para apresentar pessoalmente a solução e discutir ajustes 
            ou melhorias que considere necessários?
          </p>
        </div>

        {/* Assinatura */}
        <div style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1.5rem',
          color: '#4b5563'
        }}>
          <div style={{ marginBottom: '0.25rem' }}>Melhores cumprimentos,</div>
          <div style={{ fontWeight: '500' }}>Bilal Machraa</div>
          <div>Desenvolvedor de Soluções Digitais</div>
          <div>+351 913 644 669</div>
        </div>
      </div>
    </div>
  );
}
