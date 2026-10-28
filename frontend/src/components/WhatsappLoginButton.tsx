import React from 'react';

declare global {
  interface Window {
    FB: any;
  }
}

interface WhatsAppLoginButtonProps {
  empresaId: number | string;
}

export function WhatsAppLoginButton({ empresaId }: WhatsAppLoginButtonProps) {
  const lidarComConexao = () => {
    if (!window.FB) {
      alert('O SDK do Facebook ainda não foi carregado pelo navegador. Recarrega a página e tenta novamente.');
      return;
    }

    window.FB.login(
      function (response: any) {
        console.log('Resposta completa do FB.login:', response);

        if (response.authResponse) {
          const code = response.authResponse.code;

          fetch('https://neweris-food-opl5.vercel.app/whatsapp/conectar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, empresaId }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.sucesso) {
                alert('WhatsApp conectado com sucesso!');
              } else {
                alert('Erro ao conectar: ' + data.erro);
              }
            })
            .catch((err) => console.error('Erro na requisição:', err));
        } else {
          console.log('Utilizador cancelou o login.');
        }
      },
      {
        config_id: '1024949793966061', // <-- O ID gerado na Meta
        response_type: 'code',
        override_default_response_type: true,
      }
    );
  };

  return (
    <button
      onClick={lidarComConexao}
      style={{
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      Conectar WhatsApp Business
    </button>
  );
}