import React, { useEffect } from 'react';

// Estende a interface Window para o TypeScript reconhecer o SDK do Facebook
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
  useEffect(() => {
    if (window.FB) return;

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      });
    };

    // Injeção assíncrona do script do SDK do Facebook
    (function (d, s, id) {
      var js: HTMLScriptElement, fjs = d.getElementsByTagName(s)[0] as HTMLElement;
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/pt_BR/sdk.js';
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const lidarComConexao = () => {
    if (!window.FB) {
      alert('O SDK do Facebook ainda está a carregar. Tenta novamente em instantes.');
      return;
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