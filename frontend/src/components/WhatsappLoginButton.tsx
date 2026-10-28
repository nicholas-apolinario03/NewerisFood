import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

interface WhatsAppLoginButtonProps {
  empresaId: number | string;
}

export function WhatsAppLoginButton({ empresaId }: WhatsAppLoginButtonProps) {
  const [carregandoSdk, setCarregandoSdk] = useState(true);

  useEffect(() => {
    // Se o FB já estiver carregado e pronto
    if (window.FB) {
      setCarregandoSdk(false);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      });
      setCarregandoSdk(false);
    };

    // Injeção limpa do script do SDK
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/pt_BR/sdk.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        if (window.FB && carregandoSdk) {
          try {
            window.FB.init({
              appId: import.meta.env.VITE_FACEBOOK_APP_ID,
              cookie: true,
              xfbml: true,
              version: 'v20.0',
            });
            setCarregandoSdk(false);
          } catch (e) {
            console.error('Erro ao inicializar no onload:', e);
          }
        }
      };

      document.body.appendChild(script);
    }
  }, [carregandoSdk]);

  const lidarComConexao = () => {
    if (!window.FB) {
      alert('O SDK da Meta ainda está a carregar. Aguarde um segundo e tente novamente.');
      return;
    }

    // Chamada segura do login após validação do SDK
    window.FB.login(
      function (response: any) {
        if (response.authResponse) {
          const code = response.authResponse.code;

          fetch('https://teu-backend.vercel.app/api/whatsapp/conectar', {
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
          console.log('O utilizador cancelou o login ou fechou o pop-up.');
        }
      },
      {
        scope: 'whatsapp_business_management,whatsapp_business_messaging',
        response_type: 'code',
        override_default_response_type: true,
      }
    );
  };

  return (
    <button
      onClick={lidarComConexao}
      disabled={carregandoSdk}
      style={{
        backgroundColor: carregandoSdk ? '#ccc' : '#25D366',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: carregandoSdk ? 'not-allowed' : 'pointer',
        fontWeight: 'bold',
      }}
    >
      {carregandoSdk ? 'A carregar Meta SDK...' : 'Conectar WhatsApp Business'}
    </button>
  );
}