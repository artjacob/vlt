# VLT Carioca (não-oficial)
Web App que mostra o tempo de espera pelos próximos trens do VLT Carioca, o sistema de bondes que opera no Centro do Rio de Janeiro desde 2016. O app não tem qualquer relação com a operadora do sistema.

As informações sobre os próximos trens vem da API não-documentada do VLT Carioca, e o status do sistema vem do app do Centro de Operações Rio.

O app surgiu a partir de dois desafios: criar a interface mais simples possível para ver os horários dos próximos trens, e usar recursos novos de JavaScript e CSS.

Foram usados os seguintes recursos de JavaScript e CSS:
- **Geolocation API:** usada para obter a localização do usuário, e com isso encontrar a estação/parada mais próxima.
- **Permissions API:** antes de consultar a localização, o app confere se o usuário já concedeu permissão para isso.
- **Service Worker:** com um Service Worker registrado, o web app pode ser "instalado" como um app nativo.
- **Cache API:** estilos, scripts e fontes são cacheados no navegador, deixando o app mais rápido e leve. Após o primeiro uso, só são feitos dois acessos à rede: um para obter os horários dos trens em tempo real, e outro para conferir se há uma atualização do app.
- **Page Visibility API:** o app só atualiza os dados quando está em primeiro plano.
- **Navigator.onLine e eventos online/offline:** o app avisa o usuário quando ele está sem conexão, e atualiza os dados imediatamente quando a conexão é reestabelecida.
- **prefers-color-scheme media query:** o app tem um tema claro e um tema escuro, e segue a definição do sistema.

O app é hospedado no **Firebase Hosting**, e as chamadas às APIs são feitas com o **Firebase Cloud Functions**.

## Nomenclatura
O VLT Carioca possui tanto "paradas" (pontos de embarque em calçadas, sem catracas) e "estações" (estruturas isoladas, com catracas na entrada). Para simplificar, o app usa o nome "estação" para todos os casos.

## Privacidade
A localização exata do usuário é usada apenas dentro de seu próprio aparelho para determinar a estação mais próxima, e nunca é transmitida pela internet.
