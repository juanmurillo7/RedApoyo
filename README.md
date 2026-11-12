# Red de apoyo

Red de apoyo es un prototipo web en español que reúne orientación inicial, información general sobre derechos, ejercicios sencillos de bienestar e ideas de autonomía económica. La experiencia está pensada para que cada persona explore a su ritmo, sin necesidad de crear una cuenta.

> **Importante:** es una demostración de interfaz, no un servicio de atención. No ofrece acompañamiento profesional en tiempo real ni sustituye los servicios de emergencia, asesoría legal o atención psicológica.

## Contenido

- [Recorrer la página](#recorrer-la-página)
- [Funciones de privacidad visibles](#funciones-de-privacidad-visibles)
- [Alcance y uso seguro](#alcance-y-uso-seguro)
- [Tecnologías y estructura](#tecnologías-y-estructura)
- [Instalar y ejecutar](#instalar-y-ejecutar)
- [Antes de publicar](#antes-de-publicar)

## Recorrer la página

La navegación principal tiene cuatro secciones. En escritorio se muestra en una barra lateral; en móvil se abre desde el botón de menú. Los botones de la portada llevan directamente a Atención, Mis derechos o Autonomía.

### Inicio

La portada presenta el propósito del sitio y tres accesos rápidos:

- **Necesito apoyo:** abre la sección Atención.
- **Quiero conocer mis derechos:** abre la guía Mis derechos.
- **Quiero empezar algo propio:** abre Autonomía.

También incluye un ejercicio de respiración opcional. Al iniciarlo, el círculo guía cuatro fases con indicaciones de inhalar, sostener, exhalar y soltar; el botón permite pausarlo. La tarjeta de emergencia muestra el número 123 de Colombia como referencia de demostración y enlaza a la llamada del dispositivo. Comprueba siempre los números aplicables en tu localidad.

### Atención

Esta sección reúne tres herramientas de orientación:

1. **Chequeo de seguridad:** presenta tres preguntas opcionales sobre agresiones recientes, sensación de riesgo actual y control. Se elige “Sí”, “No” o “No estoy segura” y, al responder todas, se muestra un mensaje general. Si hay al menos una respuesta afirmativa, sugiere buscar apoyo pronto; no calcula un nivel clínico ni reemplaza una evaluación profesional.
2. **Directorio de apoyo:** muestra recursos de ejemplo y permite filtrarlos por tipo. Los botones de llamada abren el marcador con 123 o 155. Los lugares presenciales son marcadores de ejemplo, no ubicaciones reales. La página no detecta la ubicación del dispositivo.
3. **Solicitud de orientación:** permite recorrer campos demostrativos sobre tipo de apoyo, horario seguro, medio de contacto y personas a cargo. Al confirmar, muestra un mensaje local; no se envía la solicitud ni se contacta a nadie.

El directorio, los teléfonos, los horarios, la cobertura y las rutas de atención deben confirmarse con fuentes locales antes de usar la información fuera de esta demostración.

### Mis derechos

Ofrece información general organizada en tres momentos: antes, durante y después de una agresión. Incluye sugerencias para pensar en personas de confianza, buscar un lugar seguro y guardar información solo si hacerlo no aumenta el riesgo. También presenta una lista orientativa para una bolsa de emergencia.

La sección aclara que consultar orientación no obliga a denunciar y que las rutas pueden variar según el lugar. No es asesoría legal, protocolo de emergencia ni una lista completa de derechos aplicables en cada jurisdicción.

Al final hay un ejercicio breve de atención al presente y el mismo control de respiración guiada disponible en Inicio. Son ejercicios opcionales; se pueden pausar o dejar en cualquier momento.

### Autonomía

Incluye un catálogo de ideas de negocio con filtros por categoría e inversión inicial. Las fichas describen una idea, sugieren un primer paso y ofrecen una recomendación básica para calcular precios. Las opciones de ejemplo incluyen gastronomía, servicios digitales, artesanías, comercio local y belleza.

El **buzón de ideas** acepta texto y una casilla de preferencia para compartir de forma anónima, pero solo muestra una confirmación visual: no guarda, publica ni transmite la propuesta. No escribas nombres, datos de contacto ni detalles que permitan identificarte.

La sección cierra con temas de formación en finanzas, marketing digital y capital semilla. Los enlaces y directorios de cursos o financiación todavía no están integrados; aparecen señalados como pendientes de validar.

### Modo discreto

El botón **Modo discreto** sustituye la interfaz por una página neutral de bienestar con una receta breve. **Volver al inicio** restaura la aplicación. Esta función solo cambia el contenido visible dentro de la página: no oculta la dirección del sitio, no cierra otras pestañas y no borra el historial ni los registros del dispositivo o de la red.

### Salida rápida

El botón **Salida rápida** o dos pulsaciones de `Escape` en un intervalo de dos segundos reemplazan la página por una búsqueda del pronóstico del tiempo. La redirección requiere conexión a internet y no elimina rastros del navegador, sistema operativo, proveedor de red ni herramientas de monitoreo. No es una función de seguridad garantizada.

## Funciones de privacidad visibles

- La aplicación no solicita crear una cuenta.
- Los formularios son interacciones locales de demostración: no hacen solicitudes de red ni guardan sus campos en almacenamiento local o una base de datos.
- Las respuestas del chequeo y el estado de la interfaz viven únicamente en la memoria de la página mientras está abierta; al recargar, se reinician.
- La página no implementa chat, geolocalización, gestión de casos, seguimiento de solicitudes, cifrado de extremo a extremo ni borrado del historial.
- La indicación de prototipo se muestra en pantalla para distinguir la demostración de un servicio activo.

No ingreses información personal o sensible. El uso de HTTPS, controles de acceso, almacenamiento seguro, eliminación verificable, consentimiento y políticas de privacidad requeriría diseño, implementación y auditorías adicionales.

## Alcance y uso seguro

El prototipo utiliza Colombia como contexto ilustrativo para los números 123 y 155. No se garantiza que sean accesibles, gratuitos, adecuados o vigentes en una zona determinada. Confirma los contactos y las rutas con entidades oficiales locales antes de publicarlos o depender de ellos.

Si existe peligro inmediato, utiliza los servicios de emergencia disponibles en tu localidad o contacta a una persona de confianza, siempre que hacerlo sea seguro. Esta web no recibe alertas y nadie monitorea sus formularios.

## Tecnologías y estructura

- **React y TypeScript:** interfaz y comportamiento de las secciones.
- **Vite:** servidor de desarrollo y compilación para producción.
- **Lucide React:** iconos de navegación y acciones.
- **CSS:** diseño adaptable, estilos, estados de interacción y preferencias de movimiento reducido.

Archivos principales:

- `src/App.tsx`: contenido, navegación y lógica interactiva de la página.
- `src/App.css`: estilos de componentes y reglas responsive.
- `src/index.css`: estilos globales, tipografía base y foco accesible.
- `index.html`: idioma, metadatos y título del documento.
- `.github/copilot-instructions.md`: convenciones y límites de seguridad del proyecto.

## Instalar y ejecutar

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Vite muestra la dirección local en la terminal. Para validar el proyecto y generar la compilación de producción:

```bash
npm run lint
npm run build
```

Para servir localmente la compilación generada:

```bash
npm run preview
```

## Antes de publicar

La publicación como servicio requiere, como mínimo:

- Confirmar directorios, contactos, horarios, cobertura y rutas con entidades responsables del territorio.
- Revisión legal, psicológica, de accesibilidad y de seguridad con personas expertas y organizaciones pertinentes.
- Definir responsables de atención y protocolos reales para recibir, derivar y responder solicitudes.
- Diseñar consentimiento informado, privacidad, retención y eliminación de datos antes de recopilar información.
- Implementar y auditar la infraestructura de seguridad necesaria; no se debe describir como cifrada o confidencial hasta verificarlo técnicamente.
- Evaluar los riesgos del modo discreto y la salida rápida en dispositivos compartidos, sin prometer que eliminan rastros.