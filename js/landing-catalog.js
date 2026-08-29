const products = [
{
    "id": 1,
    "name": "Su Vida en Colores",
    "price": 2500,
    "image": "assets/foto2.webp",
    "description": "Cuando la familia entra a la sala, lo primero que ven es esta corona: un aro completo montado sobre follaje de palma y hoja verde, con girasoles, gerberas rojas, crisantemos blancos y lirios repartidos en todo el contorno. No es una pieza apagada, es la vida de quien se fue contada en color.",
    "categories": [
        "funebre",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 2,
    "name": "Paz Absoluta",
    "price": 2500,
    "image": "assets/foto3.webp",
    "description": "Corona grande en tripié, toda en blanco: lirios abiertos en el copete, gerberas, crisantemos y nardo sobre una base de follaje fino. El blanco completo es lo que se espera en una despedida formal y nunca queda fuera de lugar, sin importar quién más esté en la sala.",
    "categories": [
        "funebre",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 3,
    "name": "Conversación a la Altura",
    "price": 225,
    "image": "assets/foto4.webp",
    "description": "Centros de mesa redondos en tonos pastel, con claveles, gerberas, lisianthus, crisantemos y eucalipto, montados a baja altura para que tus invitados se vean la cara de un lado a otro de la mesa. Un centro alto se ve bonito en la foto y arruina la plática toda la noche; este hace exactamente lo contrario.",
    "categories": [
        "mix",
        "precio-bajo"
    ]
},
{
    "id": 4,
    "name": "Abre Durante la Fiesta",
    "price": 250,
    "image": "assets/foto5.webp",
    "description": "Centro de mesa compacto con rosas rosas y blancas, lirios todavía en botón y espigas de statice morado entre follaje verde. Los lirios van cerrados a propósito: abren durante el evento, frente a los invitados, y siguen luciendo varios días después en casa de quien se lo lleve.",
    "categories": [
        "mix",
        "precio-bajo"
    ]
},
{
    "id": 5,
    "name": "Un Ramo Para Abrazar",
    "price": 750,
    "image": "assets/foto6.webp",
    "description": "Treinta y seis rosas entre rojas y rosas, acomodadas en domo cerrado sobre nubes de gypsophila y envueltas en papel rojo en capas. Tres docenas se sienten en las manos: no es un ramo que se sostiene, es un ramo que hay que abrazar para poder cargarlo.",
    "categories": [
        "rosas-rojas",
        "precio-medio"
    ]
},
{
    "id": 6,
    "name": "No Es de Todos los Días",
    "price": 2250,
    "image": "assets/foto7.webp",
    "description": "Quince tulipanes amarillos y rosas montados en abanico, acompañados de girasoles, lirios orientales, nardo blanco y helecho sobre base baja. El tulipán no se consigue en cualquier esquina de Celaya: es flor de importación y de temporada, y quien lo recibe lo nota antes de leer la tarjeta.",
    "categories": [
        "tulipanes",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 7,
    "name": "Sin Medias Tintas",
    "price": 1750,
    "image": "assets/foto8.webp",
    "description": "Setenta y dos flores entre rosas rojas y claveles blancos, montadas al ras en un domo perfecto sobre papel negro mate. El contraste del rojo y el blanco sobre el negro hace que se vea el doble de grande de lo que ya es, y ya es enorme.",
    "categories": [
        "rosas-rojas",
        "precio-alto"
    ]
},
{
    "id": 8,
    "name": "Sin Florero, Sin Pretextos",
    "price": 750,
    "image": "assets/foto9.webp",
    "description": "Arreglo vertical con una torre de rosas rojas al centro, gerberas de colores, lirios amarillos, alstroemerias rosas y nardo abriéndose hacia los lados. Llega parado en su propia base: quien lo recibe no tiene que buscar florero, cortar tallos ni resolver nada.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 9,
    "name": "Le Dura Toda la Semana",
    "price": 625,
    "image": "assets/foto10.webp",
    "description": "Veinticuatro rosas rosas en punto de botón, intercaladas con alstroemerias y hoja verde, envueltas en papel rosa con velo blanco. Van cerradas a propósito para que abran en casa: el ramo que recibe hoy no es el mismo que va a tener el viernes.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 10,
    "name": "Lo Van a Fotografiar",
    "price": 1625,
    "image": "assets/foto11.webp",
    "description": "Caja redonda forrada de girasoles al ras, coronada por un globo burbuja transparente con tu mensaje impreso en dorado y una guirnalda de globos dorados y blancos. Incluye tarjeta y mariposas decorativas.",
    "categories": [
        "girasoles",
        "cajas",
        "precio-alto"
    ]
},
{
    "id": 11,
    "name": "El Nombre Que Se Recuerda",
    "price": 2500,
    "image": "assets/foto12.webp",
    "description": "Corona grande sobre follaje de palma, con una media luna de crisantemos blancos y un copete de girasoles, gerberas rojas y rosas blancas en la esquina superior. Al centro cruza el listón con el nombre de quien la envía, escrito a mano.",
    "categories": [
        "funebre",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 12,
    "name": "Máximo Honor",
    "price": 2500,
    "image": "assets/foto13.webp",
    "description": "Corona armada exclusivamente con rosas blancas, colocadas una por una sobre base de nube, nardo y follaje verde. Puras rosas es el nivel más alto que existe en corona fúnebre: no lleva relleno, y eso se distingue desde la entrada de la sala.",
    "categories": [
        "funebre",
        "precio-alto"
    ]
},
{
    "id": 13,
    "name": "Levanta el Ánimo",
    "price": 750,
    "image": "assets/foto14.webp",
    "description": "Seis girasoles bien abiertos con rosas rojas asomando entre ellos, nube blanca y hoja verde, sobre papel rojo en capas amplias. El girasol trae la alegría y la rosa roja pone el mensaje: juntos dicen las dos cosas al mismo tiempo, sin que tengas que escribirlas.",
    "categories": [
        "girasoles",
        "rosas-rojas",
        "precio-medio"
    ]
},
{
    "id": 14,
    "name": "Hecho Para Sus Fotos",
    "price": 750,
    "image": "assets/foto15.webp",
    "description": "Ramo redondo en rosa, lila y palo de rosa, con rosas, claveles, lisianthus, statice y nube, montado al ras para que se vea parejo desde cualquier ángulo de la cámara. Está pensado para el vals y la sesión: liviano de cargar y del tamaño justo para que no le tape el vestido.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 15,
    "name": "Se Va a Contar Por Años",
    "price": 2813,
    "image": "assets/foto16.webp",
    "description": "Trece girasoles enmarcando un corazón de sesenta rosas rojas, con chocolates Ferrero Rocher formando la inicial al centro. Es la pieza más vistosa de todo el catálogo y no cabe en una mesa chica: hay que hacerle espacio antes de que llegue.",
    "categories": [
        "girasoles",
        "rosas-rojas",
        "chocolates",
        "precio-alto"
    ]
},
{
    "id": 16,
    "name": "Cabe en una Mano",
    "price": 375,
    "image": "assets/foto17.webp",
    "description": "Ramo pequeño de rosas rojas con pompón verde y nardo, envuelto en papel blanco satinado y cruzado por un listón negro. Cabe en una mano y entra por cualquier puerta sin anunciarse, que a veces es justo lo que necesitas.",
    "categories": [
        "rosas-rojas",
        "precio-bajo"
    ]
},
{
    "id": 17,
    "name": "Puro Buen Humor",
    "price": 750,
    "image": "assets/foto18.webp",
    "description": "Gerberas amarillas, rojas y rosas de cabeza grande, con rosas rojas, nardo blanco y nube, en envoltura blanca con filo rojo. Van seis o siete abiertas de par en par: la gerbera es la flor más alegre que existe y no necesita que nadie la explique.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 18,
    "name": "Dos Regalos en Uno",
    "price": 1125,
    "image": "assets/foto19.webp",
    "description": "Arreglo vertical en florero de cristal con lirios rosas, girasol, gerbera, rosas rojas y margaritas amarillas, acompañado de dos latas decoradas con chocolates Ferrero Rocher. El florero se queda de recuerdo y los chocolates se acaban el mismo día.",
    "categories": [
        "chocolates",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 19,
    "name": "Quince Rosas, Quince Años",
    "price": 625,
    "image": "assets/foto20.webp",
    "description": "Quince rosas en blanco, palo de rosa y rosa fuerte, montadas en domo cerrado sobre una nube densa de gypsophila, con el mango forrado en listón blanco. Una rosa por cada año, que es justo el detalle que la festejada nota y presume.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 20,
    "name": "Cambia Solo Cada Día",
    "price": 1000,
    "image": "assets/foto21.webp",
    "description": "Canasta de mimbre con una torre de rosas rojas al centro, girasoles a un costado, lirios rosas todavía en botón, gerberas blancas y nardo abriéndose en abanico. Los lirios van cerrados y siguen abriendo toda la semana: el arreglo no es el mismo el lunes que el viernes.",
    "categories": [
        "girasoles",
        "rosas-rojas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 21,
    "name": "Alegría de Bolsillo",
    "price": 750,
    "image": "assets/foto22.webp",
    "description": "Ramo de gerberas en rosa claro y fucsia, con statice, nube y hoja verde, en envoltura blanca con papel fucsia y detalles de fresas. Toda la flor va abierta y de frente: no necesita nada más para llamar la atención de quien entra al cuarto.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 22,
    "name": "Se Ve Desde la Calle",
    "price": 2000,
    "image": "assets/foto23.webp",
    "description": "Arreglo de dos pisos: una base amplia de girasoles, margaritas lilas, alstroemerias y nardo, coronada por un corazón de rosas rojas y rosas montado en alto sobre una nube blanca. Mide más de un metro y hay que entregarlo entre dos personas.",
    "categories": [
        "girasoles",
        "rosas-rojas",
        "precio-alto"
    ]
},
{
    "id": 23,
    "name": "Listo Para la Mesa",
    "price": 563,
    "image": "assets/foto24.webp",
    "description": "Cajón de madera rústica con rosas rojas, gerberas amarillas, alstroemerias, lirios por abrir y statice morado, todo montado en oasis. No necesita florero, no hay que cortarle nada y no se cae: llega y se pone donde quieras.",
    "categories": [
        "cajas",
        "mix",
        "precio-bajo"
    ]
},
{
    "id": 24,
    "name": "Siempre Te Recordaré",
    "price": 625,
    "image": "assets/foto25.webp",
    "description": "Arreglo funeral en forma de domo con crisantemos blancos, lirios, gerberas rojas, rosas y un girasol al centro, cruzado por un listón con la frase que tú elijas, escrita a mano. Se coloca junto al féretro o sobre una mesa y llena el espacio sin robarle protagonismo a la corona principal.",
    "categories": [
        "funebre",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 25,
    "name": "La Despedida Más Cálida",
    "price": 2250,
    "image": "assets/foto26.webp",
    "description": "Corona mediana sobre palma, con media luna de crisantemos blancos y un copete de girasoles, gerberas rosas, rosas y nardo. Los girasoles le quitan la solemnidad pesada y la convierten en una despedida cálida, más parecida a la persona que a la ocasión.",
    "categories": [
        "funebre",
        "girasoles",
        "precio-alto"
    ]
},
{
    "id": 26,
    "name": "No Hay Dos Iguales",
    "price": 625,
    "image": "assets/foto27.webp",
    "description": "Ramo variado en tonos suaves: girasol al centro, gerberas rosa y naranja, rosas de spray, lirios naranjas y hortensia verde, en papel rosa con estampado. Nunca sale idéntico dos veces, porque lo armamos con lo mejor que llegó esa mañana al mercado.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 27,
    "name": "El Ramo Que Se Nota",
    "price": 750,
    "image": "assets/foto28.webp",
    "description": "Ramo de gran volumen con rosas rojas, rosas de spray en palo de rosa, gerberas fucsia y naranja, pompón verde, alstroemerias y una hortensia verde completa en la base. La hortensia es la flor cara del ramo y se nota: le da un peso visual que ninguna otra alcanza.",
    "categories": [
        "rosas-rojas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 28,
    "name": "Domina el Salón",
    "price": 1250,
    "image": "assets/foto29.webp",
    "description": "Arreglo montado en altura, con una cascada de rosas rojas y rosas bajando por el centro, girasoles arriba, lirios orientales por abrir, gerberas y margaritas blancas en la base. Sobrepasa los ochenta centímetros y manda en cualquier espacio donde lo dejen.",
    "categories": [
        "girasoles",
        "rosas-rojas",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 29,
    "name": "Llena la Mesa Completa",
    "price": 1000,
    "image": "assets/foto30.webp",
    "description": "Cajón grande de madera con girasol, rosas naranjas y amarillas, lirios blancos por abrir, alstroemerias, margaritas y eucalipto, todo montado en oasis y rematado con un lazo de hoja verde. Es la versión grande del cajón: ocupa una mesa de centro entera.",
    "categories": [
        "cajas",
        "girasoles",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 30,
    "name": "Queda Bien con Toda la Familia",
    "price": 2500,
    "image": "assets/foto31.webp",
    "description": "Canasta grande de mimbre con base de fruta de temporada —manzana, plátano, uva, sandía— y encima una montaña de flores: aves del paraíso, lirios blancos, girasoles, gerberas de colores, rosas y nardo, rematada con moño de organza. Se ve y se come al mismo tiempo.",
    "categories": [
        "cajas",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 31,
    "name": "Su Inicial en Flores",
    "price": 1500,
    "image": "assets/foto32.webp",
    "description": "Letras e iniciales armadas flor por flor sobre estructura, combinando girasoles, rosas fucsia, pompón verde, margaritas y statice morado. Hacemos la inicial del festejado, un número o una palabra corta, en los colores exactos que traiga tu evento.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 32,
    "name": "Se Queda a la Vista",
    "price": 875,
    "image": "assets/foto33.webp",
    "description": "Florero de cristal con una torre de rosas rosas y rojas subiendo por el centro, lirios blancos abiertos a los lados, gerberas rosas y margaritas amarillas en la base. El cristal deja ver los tallos y el agua, así que se ve limpio desde cualquier ángulo.",
    "categories": [
        "rosas-rojas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 33,
    "name": "El Que Nadie Más Va a Llevar",
    "price": 2875,
    "image": "assets/foto34.webp",
    "description": "Ramo de novia en cascada con peonías en coral y fucsia, lisianthus doble y una caída de orquídeas dendrobium lila que baja casi medio metro. Es flor de importación y se arma el mismo día de la boda, con la flor recién llegada.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 34,
    "name": "Rojo Que No Pide Permiso",
    "price": 875,
    "image": "assets/foto35.webp",
    "description": "Domo cerrado de rosas rojas con gerberas naranjas abiertas alrededor, pompones lila, alstroemerias blancas y follaje verde, todo envuelto en papel rosa con marco dorado. El rojo manda al centro y el naranja lo empuja hacia afuera, así que se ve enorme desde lejos y desde la foto.",
    "categories": [
        "rosas-rojas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 35,
    "name": "Suave Pero Se Nota",
    "price": 812.5,
    "image": "assets/foto36.webp",
    "description": "Ramo en tonos pastel con rosas rosas y blancas, pompones lila, margaritas, alstroemerias y ramas de nube abiertas por todo el contorno, en papel rosa con filo dorado. La nube es la que le da el vuelo: hace que un ramo de tamaño medio ocupe el doble de espacio en las manos.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 36,
    "name": "Seis Docenas en Pastel",
    "price": 1875,
    "image": "assets/foto37.webp",
    "description": "Setenta y dos rosas en tonos durazno, palo de rosa y crema, montadas en domo apretado con lirios todavía en botón asomando por arriba y un cinturón completo de nube alrededor, en papel nude con filo dorado. Los lirios van cerrados a propósito: abren durante los días siguientes y el ramo se transforma en casa de quien lo recibe.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 37,
    "name": "Ochenta Gerberas de Golpe",
    "price": 3125,
    "image": "assets/foto38.webp",
    "description": "Ramo gigante de seis docenas de gerberas en rojo, naranja, amarillo, fucsia, rosa y blanco, acomodadas una por una en domo plano y rematado con un moño de listón rosa, sobre papel blanco con filo dorado. Es color puro: no lleva relleno ni follaje que le baje intensidad.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 38,
    "name": "Todo en Uno",
    "price": 1125,
    "image": "assets/foto39.webp",
    "description": "Cajón de madera con una hilera de rosas rojas arriba, girasol al centro, lirios, margaritas fucsia, tulipán y solidago amarillo, más chocolates surtidos, una caja de bombones en forma de corazón, tarjeta y dos globos metálicos en rosa dorado. Flores, dulce y globo en una sola entrega.",
    "categories": [
        "chocolates",
        "cajas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 39,
    "name": "Cilindro Floral",
    "price": 625,
    "image": "assets/foto40.webp",
    "description": "Florero cilíndrico de cristal con rosas fucsia y rosa palo, alstroemerias blancas, nube, solidago y hoja verde brillante, con una mariposa decorativa asomando arriba y un moño fucsia en la base. Llega con agua, listo para poner sobre la mesa sin que nadie tenga que cortar ni acomodar nada.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 40,
    "name": "Maxi Ramo Fucsia",
    "price": 2500,
    "image": "assets/foto41.webp",
    "description": "Maxi ramo de rosas fucsia y rosa palo con rosas de spray, alstroemerias blancas y follaje verde, envuelto en papel negro mate en capas de picos y amarrado con listón fucsia. El negro es lo que lo cambia todo: hace que el fucsia se vea el doble de intenso y le quita cualquier aire de ramo común.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 41,
    "name": "Cinco Docenas de Rosas",
    "price": 1375,
    "image": "assets/foto42.webp",
    "description": "Sesenta rosas entre rojas, rosas, blancas y palo de rosa, acomodadas en domo cerrado sobre una cama completa de nube y envueltas en papel durazno. La mezcla de tonos hace que el ramo se lea con profundidad, en lugar de verse como un bloque plano de un solo color.",
    "categories": [
        "rosas-rojas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 42,
    "name": "Maxi Ramo de Cumpleaños",
    "price": 2500,
    "image": "assets/foto43.webp",
    "description": "Maxi ramo de rosas en rojo, naranja, amarillo, fucsia y rosa, con nube repartida en todo el contorno, mariposas decorativas entre las flores y una banda impresa con la frase que tú elijas, sobre papel fucsia en capas. Es el ramo de cumpleaños llevado al tamaño máximo.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 43,
    "name": "Maxi Ramo de Rosas Amarillas",
    "price": 3125,
    "image": "assets/foto44.webp",
    "description": "Maxi ramo armado solo con rosas amarillas, más de cien tallos en domo cerrado, con un aro completo de nube alrededor y una tarjeta escrita a mano al frente, sobre papel blanco traslúcido. Puro amarillo, sin relleno de otro color: es un sol completo.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 44,
    "name": "Chico Pero Bien Hecho",
    "price": 625,
    "image": "assets/foto45.webp",
    "description": "Ramo de dos docenas de rosas rosas y blancas en domo, con nube abierta en todo el contorno, tarjeta con pinza y papel blanco traslúcido rematado con listón. Chico de precio, no de presencia: la nube lo abre y el papel en picos lo levanta.",
    "categories": [
        "mix",
        "precio-medio"
    ]
},
{
    "id": 45,
    "name": "Todo Rojo, Tamaño Chico",
    "price": 625,
    "image": "assets/foto46.webp",
    "description": "Ramo compacto en rojo total: gerberas rojas abiertas, rosas rojas, rosas de spray en rosa pálido, bayas de hypericum y hojas de eucalipto redondo. El eucalipto plateado es el detalle que lo sube de nivel y es flor que casi nadie mete en un ramo de este precio.",
    "categories": [
        "rosas-rojas",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 46,
    "name": "Maxi Ramo de Girasoles",
    "price": 1400,
    "image": "assets/foto47.webp",
    "description": "Maxi ramo de girasoles grandes con rosas amarillas y crema entre ellos, solidago y follaje verde, envuelto en papel blanco en capas de picos. Los girasoles van todos a la misma altura, así que se ve como una sola superficie de amarillo en lugar de un ramo desordenado.",
    "categories": [
        "girasoles",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 47,
    "name": "El Más Elegante del Catálogo",
    "price": 2500,
    "image": "assets/foto48.webp",
    "description": "Maxi ramo en tonos lila, rosa palo y durazno: gerberas rosa claro, rosas lavanda, rosas de spray, lisianthus morado, limonium rosa y encaje blanco, envuelto en papel lila traslúcido con costura. Es una paleta completa trabajada tono sobre tono, no una mezcla de colores sueltos.",
    "categories": [
        "mix",
        "precio-alto"
    ]
},
{
    "id": 48,
    "name": "Ramo Chico Variado",
    "price": 500,
    "image": "assets/foto49.webp",
    "description": "Ramo alto con girasoles, tulipanes rosas, claveles, hortensia verde, perritos rosas, eucalipto y nube, en papel blanco traslúcido. Lleva tulipán y hortensia, que son las dos flores que normalmente disparan el precio de un ramo, y aun así se queda en quinientos.",
    "categories": [
        "girasoles",
        "tulipanes",
        "mix",
        "precio-medio"
    ]
},
{
    "id": 49,
    "name": "Corona Mediana en Tonos Rosa",
    "price": 2250,
    "image": "assets/foto50.webp",
    "description": "Corona mediana en tripié sobre follaje de palma, con aro de crisantemos blancos y crema, y copetes de lirios rosas, gerberas fucsia, rosas blancas y palo de rosa, perritos y nube arriba y abajo. Cruza el listón negro con letra dorada donde va el nombre de quien la envía.",
    "categories": [
        "funebre",
        "mix",
        "precio-alto"
    ]
},
{
    "id": 50,
    "name": "Cubre Caja Fúnebre",
    "price": 625,
    "image": "assets/foto51.webp",
    "description": "Arreglo alargado que se coloca encima del féretro, con girasoles, lirios blancos abiertos, crisantemos, rosas rojas y blancas, perritos, hypericum y solidago sobre follaje verde, cruzado por un listón impreso con el texto que tú elijas. Se monta directo sobre la tapa y cubre a lo largo.",
    "categories": [
        "funebre",
        "girasoles",
        "mix",
        "precio-medio"
    ]
}
];

// ===== Estado =====
let currentFilter = document.body && document.body.dataset.initialFilter ? document.body.dataset.initialFilter : 'todos';
let searchTerm = '';

function productCode(p){ return String(p.id).padStart(3,'0'); }
function productPhotoUrl(p){ return 'http://floreriacelaya.dondeseria.com/' + p.image.replace(/^\//,''); }
function normalizeText(t){ return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); }
function isFunebre(p){ return p.categories.indexOf('funebre') !== -1; }
function sortCatalog(a,b){
    const fa = isFunebre(a) ? 1 : 0, fb = isFunebre(b) ? 1 : 0;
    if(fa !== fb) return fa - fb;
    if(a.price !== b.price) return a.price - b.price;
    return a.id - b.id;
}
function formatPrice(price){ const dec = (price % 1 !== 0) ? 2 : 0; return '$' + price.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: 2 }); }

function renderProducts(){
    const filter = currentFilter;
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');
    if(!grid) return;
    let filtered = products;
    if(filter !== 'todos'){ filtered = products.filter(p => p.categories.includes(filter)); }
    if(searchTerm.trim()){
        const q = normalizeText(searchTerm.trim());
        filtered = filtered.filter(p => normalizeText(p.name).includes(q) || normalizeText(p.description).includes(q) || productCode(p).includes(q));
    }
    // Orden: catálogo floral de menor a mayor precio, fúnebres siempre al final
    filtered = filtered.slice().sort(sortCatalog);
    if(filtered.length === 0){
        grid.style.display='none';
        if(emptyState) emptyState.classList.add('active');
        if(resultsCount) resultsCount.textContent='0';
        return;
    }
    grid.style.display='grid';
    if(emptyState) emptyState.classList.remove('active');
    if(resultsCount) resultsCount.textContent = filtered.length;
    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-categories="${product.categories.join(' ')}">
            <div class="product-image-container" onclick="openLightbox('${product.image}', '${product.name}', '${formatPrice(product.price)}')">
                <img src="/${product.image}" alt="${product.name} - arreglo floral a domicilio en Celaya | Florería Andrea" class="product-image" loading="lazy">
                <div class="zoom-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                </div>
            </div>
            <div class="product-info">
                <div class="product-ref">Ref. ${productCode(product)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div>
                        <span class="price-label">Desde</span>
                        <div class="product-price">${formatPrice(product.price)}</div>
                    </div>
                    <a href="https://wa.me/5214615048418?text=${encodeURIComponent('Hola, me interesa el producto: ' + product.name + ' (Ref. ' + productCode(product) + ') - ' + formatPrice(product.price) + ' | Foto: ' + productPhotoUrl(product))}" class="btn-order" target="_blank">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Pedir Ahora
                    </a>
                </div>
            </div>
        </div>`).join('');
}

function openLightbox(image, name, price){
    document.getElementById('lightbox-image').src = '/' + image.replace(/^\//,'');
    document.getElementById('lightbox-image').alt = name;
    document.getElementById('lightbox-title').textContent = name;
    document.getElementById('lightbox-price').textContent = price;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox(){ document.getElementById('lightbox').classList.remove('active'); }

async function loadComponent(id, path){
    try{
        const r = await fetch(path);
        if(!r.ok) throw new Error(path);
        document.getElementById(id).innerHTML = await r.text();
    }catch(e){ console.error('Error loading', path, e); }
}
function toggleMobileMenu(){
    const menu = document.getElementById('navbarMenu');
    const ham = document.querySelector('.hamburger');
    if(menu && ham){ menu.classList.toggle('active'); ham.classList.toggle('active'); }
}
function trackWhatsAppClick(src){ /* noop */ }

document.addEventListener('DOMContentLoaded', function(){
    loadComponent('navbar-container', '/components/navbar.html');
    loadComponent('service-areas-container', '/components/service-areas.html');
    loadComponent('contact-info-container', '/components/contact-info.html');
    loadComponent('footer-container', '/components/footer.html');
    loadComponent('whatsapp-button-container', '/components/whatsapp-button.html');

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function(){
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderProducts();
            window.scrollTo({ top: 400, behavior: 'smooth' });
        });
    });
    // sincronizar botón activo con filtro inicial
    const initBtn = document.querySelector('.filter-btn[data-filter="'+currentFilter+'"]');
    if(initBtn){ document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); initBtn.classList.add('active'); }

    const search = document.getElementById('product-search');
    if(search){ search.addEventListener('input', function(){ searchTerm = this.value; renderProducts(); }); }

    const lbClose = document.getElementById('lightbox-close');
    if(lbClose) lbClose.addEventListener('click', closeLightbox);
    const lb = document.getElementById('lightbox');
    if(lb) lb.addEventListener('click', function(e){ if(e.target===this) closeLightbox(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeLightbox(); });

    const scrollTopBtn = document.getElementById('scroll-top');
    if(scrollTopBtn){
        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 600) scrollTopBtn.classList.add('visible');
            else scrollTopBtn.classList.remove('visible');
        });
        scrollTopBtn.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); });
    }

    window.addEventListener('scroll', function(){
        const navbar = document.querySelector('.navbar');
        if(!navbar) return;
        if(window.pageYOffset > 100) navbar.classList.add('navbar-scrolled');
        else navbar.classList.remove('navbar-scrolled');
    });

    renderProducts();
});
