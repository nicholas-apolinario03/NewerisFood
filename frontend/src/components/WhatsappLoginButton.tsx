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
  const [sdkCarregado, setSdkCarregado] = useState(false);

  useEffect(() => {
    // Se o FB já estiver carregado e inicializado
    if (window.FB) {
      setSdkCarregado(true);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      });
      setSdkCarregado(true);
    };

    // Injeção assíncrona do script do SDK do Facebook
    if (!document.getElementById('facebook-jssdk')) {
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
    }
  }, []);

  const lidarComConexao = () => {
    if (!window.FB || !sdkCarregado) {
      alert('O SDK do Facebook ainda está a carregar. Aguarda um segundo e tenta novamente.');
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
      disabled={!sdkCarregado}
      style={{
        backgroundColor: sdkCarregado ? '#25D366' : '#ccc',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: sdkCarregado ? 'pointer' : 'not-allowed',
        fontWeight: 'bold',
      }}
    >
      {sdkCarregado ? 'Conectar WhatsApp Business' : 'A carregar SDK da Meta...'}
    </button>
  );
}