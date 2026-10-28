import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void; // <--- Adiciona esta linha aqui
  }
}

interface WhatsAppLoginButtonProps {
  empresaId: number | string;
}

export function WhatsAppLoginButton({ empresaId }: WhatsAppLoginButtonProps) {
  const [sdkPronto, setSdkPronto] = useState(false);

  useEffect(() => {
    // Se o FB já existir globalmente
    if (window.FB) {
      setSdkPronto(true);
      return;
    }

    // Função de callback global exigida pelo Facebook
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      });
      setSdkPronto(true);
    };

    // Injeção do script do SDK
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/pt_BR/sdk.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Garantia extra caso o fbAsyncInit já tenha passado ou demore a disparar
        if (window.FB && !sdkPronto) {
          try {
            window.FB.init({
              appId: import.meta.env.VITE_FACEBOOK_APP_ID,
              cookie: true,
              xfbml: true,
              version: 'v20.0',
            });
            setSdkPronto(true);
          } catch (e) {
            console.error('Erro ao inicializar FB manualmente:', e);
          }
        }
      };
      document.body.appendChild(script);
    }
  }, [sdkPronto]);

  const lidarComConexao = () => {
    // Verificação de segurança adicional no clique
    if (!window.FB) {
      alert('O SDK da Meta ainda não foi carregado. Aguarde um instante.');
      return;
    }

    // Garante que o init foi chamado antes do login, caso o onLoad tenha falhado
    try {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      });
    } catch (e) {
      // Ignora se já estiver inicializado
    }

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