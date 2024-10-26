# Descripciones Generales
El proyecto "ejecutable" o "testeable" se encuentra alojado en la página de Glitch: https://piramidesmayas.glitch.me. Para fines prácticos en este repositorio he colocado los documentos imprimibles necesarios para que usted pueda probar el programa, como El Cubo Maya, el Mapa Maya y los marcadores.

# Código
## gesture-detector.js
Este segmento de código no es mío, lo he modificado y puede ser encontrado en: https://github.com/fcor/arjs-gestures.

## gesture-handler.js
Este segmento de código no es mío, lo he modificado y puede ser encontrado en: https://github.com/fcor/arjs-gestures.

## Explicación breve de index.html
Contiene toda la lógica que permite ejecutar la funcionalidad del programa. Es importante que para reproducir este programa
usted cree una cuenta de Glitch y acceda a través de la siguiente liga https://glitch.com/edit/#!/piramidesmayas para poder 
modificar, copiar o utilizar los assets del código.

A continuación describo los elementos más importantes utilizados en el index.html.
### Head / Cabecera   
    <head>

    <title>ProyectoFinal - RA - Daniel Rodríguez Orozco</title>

    <meta charset="utf-8" />
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
    <link rel="stylesheet" href="styles.css" />
    
    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
   
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    
    <script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>
    
    <script src="https://raw.githubusercontent.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>        
    
    <script src="gesture-detector.js"></script>
   
    <script src="gesture-handler.js"></script>
* Se importan varios scripts externos que son esenciales para el funcionamiento del proyecto.
  * Estos scripts incluyen A-Frame, un framework que permite crear experiencias de realidad virtual; AR.js, 
  * Una biblioteca para integrar realidad aumentada en aplicaciones web;
  * A-Frame Extras, que proporciona funcionalidades adicionales a A-Frame.
  * También se incluyen scripts personalizados, como gesture-detector.js y gesture-handler.js, que gestionan interacciones basadas en gestos, proporcionando una experiencia 
    más rica y dinámica para los usuarios.

### Importar modelos desde la carpeta de *Assets* de glitch hacia el *index.html* del documento
Este es el formato que se repite varias veces en el documento para precargar un modelo 3D en la página.
<!----------------------------------------- MODELOS 3D DE PIRÁMIDES------------------>
    <a-asset-item
      id="PiramideChichen"
      src="https://cdn.glitch.global/4eeb3eb8-4a12-4636-a02f-9ee09cb02a0d/chichen.glb?v=1700160185190">
    </a-asset-item>
Glitch tiene una carpeta especial en donde se guardan los modelos 3d o assets que se cargarán para el proyecto. Es importante denotar que el formato de estos
modelos 3d se encuentran en **.glb** para poder rederizarse en páginas web.
A continuación se enlista los nombres de los modelos 3D que se cargan:
* Modelos de Pirámides:
  *  chichen.glb
  *  dzibil.glb
  *  kinich.glb
  *  mayapan.glb
  *  uxmal.glb
  *  ekbalam.glb
* Modelos de carteles informativos:
  *  chichen_info.glb
  *  dzibil_info.glb
  *  ekbalam_info.glb
  *  kinich_info.glb
  *  mayapan_info.glb
  *  uxmal_info.glb
### Definición de un marcador de realidad aumentada
    <a-marker
        type="pattern"
        url="https://cdn.glitch.global/4eeb3eb8-4a12-4636-a02f-9ee09cb02a0d/ChichenMarker_2.patt?v=1700329642481"
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
        id="markerChichen"
        >

        <a-entity
          id="ChichenModel"
          active
          gltf-model="https://cdn.glitch.global/4eeb3eb8-4a12-4636-a02f-9ee09cb02a0d/chichen.glb?v=1700160185190"
          position="0 0 0"
          rotation="0 0 0"
          scale="1 1 1"
          animation-mixer
        >
        </a-entity>
        
        <a-entity
          id="infoChichenModel"
          active
          gltf-model="#infoChichen"
          position="0 2 0"
          rotation="0 0 0"
          scale="1 1 1"
        >
        </a-entity>
      </a-marker>
Este bloque de código define un marcador de realidad aumentada utilizando la etiqueta `<a-marker>`, que se identifica mediante un patrón específico, permitiendo la interacción con modelos 3D cuando se escanea con una cámara compatible. Este marcador se utiliza para representar diversas pirámides en un entorno de realidad aumentada.

Dentro del marcador, se incluyen dos entidades 3D, para este caso:

* ChichenModel: Este es un modelo 3D que se carga desde una URL específica y se posiciona en el origen del sistema de coordenadas. Está configurado para ser animado, lo que significa que puede mostrar diversas acciones o efectos visuales mediante el componente animation-mixer.

* infoChichenModel: Esta entidad representa información adicional relacionada con el modelo 3D principal. Está posicionada a 2 unidades sobre el primer modelo, lo que permite que el usuario visualice detalles complementarios, como descripciones o datos históricos.

Este código es utilizado para cada pirámide del proyecto, lo que permite que diferentes modelos aparezcan y ofrezcan información contextual cuando se detecta el marcador correspondiente, creando así una experiencia inmersiva de realidad aumentada que enriquece el aprendizaje sobre las estructuras históricas.

### Script

        var markerChichen = document.getElementById('markerChichen');  
        markerChichen.addEventListener('markerFound', function (event) {
        });
        markerChichen.addEventListener('markerLost', function (event) {
        });
Este fragmento de código JavaScript gestiona la interacción con un marcador en una aplicación de realidad aumentada. Primero, se utiliza document.getElementById para obtener una referencia al marcador, identificado por su ID, que corresponde a una pirámide específica.

A continuación, se añaden dos event listeners: uno para el evento markerFound, que se activa cuando el marcador es detectado por la cámara, y otro para el evento markerLost, que se dispara cuando el marcador deja de ser visible. Estos eventos permiten ejecutar acciones específicas, como mostrar o ocultar elementos en la escena, permitiendo así una experiencia interactiva y dinámica.

Este enfoque se aplica de manera general a cada elemento pirámide en el código, facilitando la gestión de la interacción con múltiples marcadores en la aplicación.
