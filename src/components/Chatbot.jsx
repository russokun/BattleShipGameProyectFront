import { useEffect } from 'react';

const useBotpress = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with S.H.I.P. !",
        botConversationDescription: "a helper on the high seas..",
        botId: "eee5251d-0f6a-4452-b0d3-daf036697196",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "eee5251d-0f6a-4452-b0d3-daf036697196",
        webhookId: "7a6356bd-9742-40ce-bfdb-7dab76df808c",
        lazySocket: true,
        themeName: "prism",
        botName: "S.H.I.P.",
        stylesheet: "https://webchat-styler-css.botpress.app/prod/47b00148-9de6-4954-8e1e-b77bf53190b8/v35428/style.css",
        frontendVersion: "v1",
        useSessionStorage: true,
        showBotInfoPage: true,
        showPoweredBy: true,
        theme: "prism",
        themeColor: "#2563eb",
        allowedOrigins: []
      });
    };

    return () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'destroy' });
        const chatContainer = document.querySelector('#bp-widget-root');
        if (chatContainer) {
          chatContainer.remove();
        }
      }
      document.body.removeChild(script);
    };
  }, []);
};

export default useBotpress;
