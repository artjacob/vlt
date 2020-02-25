# VLT Carioca (não-oficial)
Web App que mostra o tempo de espera pelos próximos trens do [VLT Carioca](https://pt.wikipedia.org/wiki/VLT_Carioca), o sistema de bondes que opera no Centro do Rio de Janeiro desde 2016. O app não tem qualquer relação com a operadora do sistema.

As informações sobre os próximos trens vem da API não-documentada do VLT Carioca, e o status do sistema vem do app do Centro de Operações Rio.

O app surgiu a partir de dois desafios: criar a interface mais simples possível para ver os horários dos próximos trens, e usar recursos novos de JavaScript e CSS.

Foram usados os seguintes recursos de JavaScript e CSS:
- **[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API):** usada para obter a localização do usuário, e com isso encontrar a estação/parada mais próxima. Se o dispositivo não tiver suporte a geolocalização, o app abre direto na lista de estações.
- **[Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API):** antes de consultar a localização, o app confere se o usuário já concedeu permissão para isso. Se o usuário não permitiu o uso da geolocalização, o app abre direto na lista de estações.
- **[Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers):** com um Service Worker registrado, o web app pode ser "instalado" como um app nativo, com o ícone aparecendo na lista de apps.
- **[Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache):** estilos, scripts e fontes são cacheados no navegador, deixando o app mais rápido e leve. Após o primeiro uso, só são feitos três acessos à rede: um para obter os horários dos trens em tempo real, outro para obter o status do sistema, e outro para conferir se há uma atualização do app.
- **[Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API):** o app só atualiza os dados quando está em primeiro plano, para economizar chamadas às APIs.
- **[Navigator.onLine e eventos online/offline](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine):** o app avisa o usuário quando ele está sem conexão, e atualiza os dados imediatamente quando a conexão é reestabelecida.
- **[prefers-color-scheme media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme):** o app tem um tema claro e um tema escuro, e segue a definição do sistema.

O app é hospedado no **[Firebase Hosting](https://firebase.google.com/docs/hosting)**, e as chamadas às APIs são feitas com o **[Firebase Cloud Functions](https://firebase.google.com/docs/functions)**.

## Nomenclatura
O VLT Carioca possui tanto "paradas" (pontos de embarque em calçadas, sem catracas) quanto "estações" (estruturas isoladas, com catracas na entrada). Para simplificar, o app usa o nome "estação" em todos os casos.

## Privacidade
A localização exata do usuário é usada apenas dentro de seu próprio aparelho para determinar a estação mais próxima, e nunca é transmitida pela internet.

## Roadmap
Próximos recursos a serem implementados:
- Versão desktop
- Opção de alterar o idioma pela interface (hoje segue o idioma do sistema, não é possível alterar no app)
- Tradução do status do sistema para inglês e espanhol com alguma API de tradução (Google Cloud Translation, Amazon Translate...)
