# VLT Carioca (não-oficial)
Web App que mostra o tempo de espera pelos próximos trens do VLT Carioca, o sistema de bondes que opera no Centro do Rio de Janeiro desde 2016. O app acessa os dados da API não-documentada do VLT Carioca, mas não tem qualquer relação com a operadora do sistema.

O app foi criado por dois motivos: eu queria ver os horários dos próximos trens da forma mais simples possível, e aproveitar para lidar com recursos novos de JavaScript e CSS que eu nunca tinha usado antes.

Os recursos de JavaScript usados são:
- **Geolocation API:** usada para obter a localização do usuário, e com isso encontrar a estação/parada mais próxima.
- **Permissions API:** antes de consultar a localização, o app confere se o usuário já concedeu permissão para isso.
- **Service Worker:** com um Service Worker registrado, o web app pode ser "instalado" como um app nativo.
- **Cache API:** estilos, scripts e fontes são cacheados no navegador, deixando o app mais rápido e leve. Após o primeiro uso, só são feitos dois acessos à rede: um para obter os horários dos trens em tempo real, e outro para conferir se há uma atualização do app.
- **Page Visibility API:** o app só atualiza os dados quando está em primeiro plano.
- **Navigator.onLine e eventos online/offline:** o app avisa o usuário quando ele está sem conexão, e atualiza os dados imediatamente quando a conexão é reestabelecida.

E os recursos de CSS:
- **prefers-color-scheme media query:** o app tem um tema claro e um tema escuro, e segue a definição do sistema.
- **Variáveis CSS:** as cores dos temas são guardadas em variáveis CSS.

Também aproveitei a oportunidade para testar o Firebase. O web app é hospedado no **Firebase Hosting**, e as chamadas à API do VLT são feitas com o **Firebase Cloud Functions**.
