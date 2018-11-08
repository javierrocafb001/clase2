en el server.js se cambio la variable public
var public = application.path.join(__dirname, '${ext.dir}/build/examples/admin-dashboard');


el path el dirname es '${ext.dir}/build/examples/admin-dashboard' esto hace que corra el sistema en modo de produccion el codigo esta minificado y comprimido
se encuentra en 
\${ext.dir}/build/examples/admin-dashboard/modern/app.js

si se desea correr el app de forma modular hay que cambiar la varible public
del server.js

var public = application.path.join(__dirname, '/');

de esta forma cargara no el archivo build sino por modulos esto se usa unicamente para desarrollar el sistema se tarda un poco en cargar porque carga modulo por modulo solo cuando se desee programar o extender el app de modo local corriendo un servidor en la computadora de el programador
