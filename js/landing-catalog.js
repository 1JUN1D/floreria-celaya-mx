const products = [
    {
        id: 1,
        name: "Corona Grande Tradicional – Flor Variada",
        price: 2500,
        image: "assets/foto2.webp",
        description: "Corona grande de aro completo, montada sobre follaje de palma y hoja verde, con girasoles, gerberas rojas, crisantemos blancos y lirios repartidos en todo el contorno. Es la pieza que la familia ve al entrar y la que deja claro que alguien estuvo presente. Incluye listón con dedicatoria impresa y la llevamos directo a la funeraria, iglesia o panteón en Celaya.",
        categories: ["funebre", "mix", "precio-alto"]
    },
    {
        id: 2,
        name: "Corona Grande Blanca – Lirios y Crisantemos",
        price: 2500,
        image: "assets/foto3.webp",
        description: "Corona grande en tripié, toda en blanco: lirios abiertos en el copete, gerberas, crisantemos y nardo sobre base de follaje fino. El blanco completo es lo que se espera en una despedida formal y nunca queda fuera de lugar. Va con listón de dedicatoria y entrega coordinada en velorios y templos de Celaya.",
        categories: ["funebre", "mix", "precio-alto"]
    },
    {
        id: 3,
        name: "Centros de Mesa para Evento – Precio por Pieza",
        price: 225,
        image: "assets/foto4.webp",
        description: "Centros de mesa redondos en tonos pastel, con claveles, gerberas, lisianthus, crisantemos y eucalipto, de altura baja para que los invitados se vean la cara de un lado a otro de la mesa. Los armamos en la combinación de color que lleve tu evento y en la cantidad que necesites. El precio es por pieza, así que puedes pedir desde diez para una comida hasta cincuenta para un salón completo.",
        categories: ["mix", "precio-bajo"]
    },
    {
        id: 4,
        name: "Centro de Mesa de Rosas y Lirios",
        price: 250,
        image: "assets/foto5.webp",
        description: "Centro de mesa compacto con rosas rosas y blancas, lirios por abrir y espigas de statice morado entre follaje verde. Los lirios van en botón a propósito: abren durante el evento y siguen luciendo varios días después en casa. Perfecto para comidas, bautizos, primeras comuniones y mesas de honor.",
        categories: ["mix", "precio-bajo"]
    },
    {
        id: 5,
        name: "Ramo de 3 Docenas de Rosas",
        price: 750,
        image: "assets/foto6.webp",
        description: "Treinta y seis rosas entre rojas y rosas, acomodadas en domo cerrado con nubes de gypsophila y envoltura de papel rojo en capas. Tres docenas se sienten en las manos: es un ramo que hay que abrazar para cargarlo. Para aniversarios, pedidas de mano y esos días en que un detalle chico no alcanza.",
        categories: ["rosas-rojas", "precio-medio"]
    },
    {
        id: 6,
        name: "Arreglo de 15 Tulipanes con Flor Variada",
        price: 2250,
        image: "assets/foto7.webp",
        description: "Quince tulipanes amarillos y rosas montados en abanico, acompañados de girasoles, lirios orientales, nardo blanco y helecho sobre base baja. El tulipán es flor de importación y de temporada, así que este arreglo se pide con anticipación y se nota que no es de todos los días. Para cumpleaños importantes, Día de las Madres y regalos donde quieres salirte de lo común.",
        categories: ["tulipanes", "mix", "precio-alto"]
    },
    {
        id: 7,
        name: "Ramo de 6 Docenas – Rosas Rojas y Claveles",
        price: 2000,
        image: "assets/foto8.webp",
        description: "Setenta y dos flores entre rosas rojas y claveles blancos, montadas al ras en un domo perfecto sobre papel negro mate. El contraste rojo y blanco sobre negro hace que se vea el doble de grande de lo que ya es. Este es el ramo de las declaraciones en serio, los aniversarios de años y las reconciliaciones que no admiten medias tintas.",
        categories: ["rosas-rojas", "precio-alto"]
    },
    {
        id: 8,
        name: "Arreglo para Regalo – Flores Variadas",
        price: 1000,
        image: "assets/foto9.webp",
        description: "Arreglo vertical con torre de rosas rojas al centro, gerberas de colores, lirios amarillos, alstroemerias rosas y nardo abriéndose hacia los lados. Llega listo en su base, sin florero ni trabajo extra para quien lo recibe. Funciona igual de bien en una recámara, en un mostrador o en el escritorio de la oficina.",
        categories: ["mix", "precio-medio"]
    },
    {
        id: 9,
        name: "Ramo de Dos Docenas de Rosas Rosadas",
        price: 625,
        image: "assets/foto10.webp",
        description: "Veinticuatro rosas rosas en punto de botón, intercaladas con alstroemerias y hoja verde, envueltas en papel rosa con velo blanco. Van cerradas a propósito para que abran en casa y le duren toda la semana. El regalo de siempre, bien hecho y sin sorpresas: cumpleaños, agradecimientos o un martes cualquiera.",
        categories: ["mix", "precio-medio"]
    },
    {
        id: 10,
        name: "Caja de Girasoles con Globo Burbuja",
        price: 1625,
        image: "assets/foto11.webp",
        description: "Caja redonda forrada con girasoles al ras, coronada por un globo burbuja transparente con tu mensaje impreso en dorado y una guirnalda de globos dorados y blancos. Incluye tarjeta y mariposas decorativas. Es de esos regalos que la gente fotografía antes de tocarlos: cumpleaños, aniversarios y sorpresas que quieres que terminen en historias.",
        categories: ["girasoles", "cajas", "precio-alto"]
    },
    {
        id: 11,
        name: "Corona Grande con Listón de Dedicatoria",
        price: 2500,
        image: "assets/foto12.webp",
        description: "Corona grande sobre follaje de palma, con media luna de crisantemos blancos y un copete de girasoles, gerberas rojas y rosas blancas en la esquina superior. El listón lleva escrito a mano el nombre de quien la envía, que es lo que la familia lee y recuerda. La entregamos montada en tripié en funerarias, capillas y panteones de Celaya y alrededores.",
        categories: ["funebre", "mix", "precio-alto"]
    },
    {
        id: 12,
        name: "Corona de Puras Rosas Blancas",
        price: 2500,
        image: "assets/foto13.webp",
        description: "Corona mediana armada exclusivamente con rosas blancas, distribuidas una por una sobre base de nube, nardo y follaje verde. Puras rosas es el nivel más formal que hay en corona: se usa para despedidas institucionales, empresariales y de gente muy querida. Incluye listón impreso con el nombre de la empresa, la dependencia o la familia que la envía.",
        categories: ["funebre", "precio-alto"]
    },
    {
        id: 13,
        name: "Ramo de Girasoles con Rosas Rojas",
        price: 750,
        image: "assets/foto14.webp",
        description: "Seis girasoles bien abiertos con rosas rojas asomando entre ellos, nube blanca y hoja verde, sobre papel rojo en capas amplias. El girasol trae la alegría y la rosa roja pone el mensaje: juntos dicen las dos cosas al mismo tiempo. Para cumpleaños, para pedir disculpas o para levantarle el ánimo a alguien que anda de bajón.",
        categories: ["girasoles", "rosas-rojas", "precio-medio"]
    },
    {
        id: 14,
        name: "Ramo de XV Años – Tonos Pastel",
        price: 750,
        image: "assets/foto15.webp",
        description: "Ramo redondo en rosa, lila y palo de rosa, con rosas, claveles, lisianthus, statice y nube, montado al ras para que se vea parejo desde cualquier ángulo. Está pensado para las fotos de la quinceañera: liviano de cargar y del tamaño justo para que no le tape el vestido. También lo armamos en el color que lleve la fiesta.",
        categories: ["mix", "precio-medio"]
    },
    {
        id: 15,
        name: "Corazón de 13 Girasoles con 5 Docenas de Rosas y Chocolates",
        price: 2813,
        image: "assets/foto16.webp",
        description: "Trece girasoles enmarcando un corazón de sesenta rosas rojas, con chocolates Ferrero Rocher formando la inicial al centro. Es la pieza más vistosa del catálogo y no cabe en una mesa chica: hay que hacerle espacio. Para aniversarios, pedidas de mano y ese cumpleaños que quieres que se cuente durante años.",
        categories: ["girasoles", "rosas-rojas", "chocolates", "precio-alto"]
    },
    {
        id: 16,
        name: "Ramo Compacto de Rosas Rojas y Pompón Verde",
        price: 375,
        image: "assets/foto17.webp",
        description: "Ramo pequeño de rosas rojas con pompón verde y nardo, envuelto en papel blanco satinado y cruzado por un listón negro. Es el detalle económico que no se ve económico: cabe en una mano y entra por cualquier puerta sin anunciarse. Ideal para una primera cita, un aniversario de mes o un gracias que quieres dar hoy mismo.",
        categories: ["rosas-rojas", "precio-bajo"]
    },
    {
        id: 17,
        name: "Ramo de Gerberas de Colores con Rosas",
        price: 750,
        image: "assets/foto18.webp",
        description: "Gerberas amarillas, rojas y rosas de cabeza grande, con rosas rojas, nardo blanco y nube, en envoltura blanca con filo rojo. La gerbera es la flor más alegre que existe y aquí van seis o siete abiertas de par en par. Para cumpleaños, para una amiga o para cualquier excusa buena de celebrar.",
        categories: ["mix", "precio-medio"]
    },
    {
        id: 18,
        name: "Arreglo en Base de Cristal con Chocolates",
        price: 1125,
        image: "assets/foto19.webp",
        description: "Arreglo vertical en florero de cristal con lirios rosas, girasol, gerbera, rosas rojas y margaritas amarillas, acompañado de dos latas decoradas con chocolates Ferrero Rocher. El florero se queda de recuerdo y los chocolates se acaban el mismo día: doble regalo en un solo envío. Para cumpleaños, San Valentín y detalles con los que quieres quedar bien.",
        categories: ["chocolates", "mix", "precio-medio"]
    },
    {
        id: 19,
        name: "Ramo de XV Años – Rosas y Gypsophila",
        price: 625,
        image: "assets/foto20.webp",
        description: "Quince rosas en blanco, palo de rosa y rosa fuerte, montadas en domo cerrado sobre una nube densa de gypsophila, con el mango forrado en listón blanco. Es el ramo clásico de quinceañera y también el que más piden las novias de boda civil. Ligero de sostener y hecho para que se vea impecable en cada foto.",
        categories: ["mix", "precio-medio"]
    },
    {
        id: 20,
        name: "Arreglo en Canasta – Rosas, Girasoles y Lirios",
        price: 1250,
        image: "assets/foto21.webp",
        description: "Canasta de mimbre con torre de rosas rojas al centro, girasoles a un costado, lirios rosas por abrir, gerberas blancas y nardo abriéndose en abanico. Los lirios van en botón y siguen abriendo durante toda la semana, así que el arreglo cambia solo. Para cumpleaños, aniversarios de empresa y regalos que quieres que se vean de lejos.",
        categories: ["girasoles", "rosas-rojas", "mix", "precio-medio"]
    },
    {
        id: 21,
        name: "Ramo de Gerberas Rosas y Fucsia",
        price: 375,
        image: "assets/foto22.webp",
        description: "Ramo de gerberas en rosa claro y fucsia, con statice, nube y hoja verde, en envoltura blanca con papel fucsia y detalles de fresas. Toda la flor va abierta y de frente: no necesita nada más para llamar la atención. El detalle perfecto para un cumpleaños, para el Día de las Madres o para alegrarle el día a alguien sin gastar de más.",
        categories: ["mix", "precio-bajo"]
    },
    {
        id: 22,
        name: "Arreglo Grande con Girasoles y Corazón de Rosas",
        price: 2500,
        image: "assets/foto23.webp",
        description: "Arreglo de dos pisos: base amplia de girasoles, margaritas lilas, alstroemerias y nardo, coronada por un corazón de rosas rojas y rosas montado en alto sobre una nube blanca. Mide más de un metro y hay que entregarlo entre dos personas. Para aniversarios grandes, pedidas de mano y sorpresas que quieres que se vean desde la calle.",
        categories: ["girasoles", "rosas-rojas", "precio-alto"]
    },
    {
        id: 23,
        name: "Caja de Madera para Regalo",
        price: 563,
        image: "assets/foto24.webp",
        description: "Cajón de madera rústica con rosas rojas, gerberas amarillas, alstroemerias, lirios por abrir y statice morado, todo montado en oasis para que no necesite florero. Llega listo para poner sobre una mesa o un escritorio y se sostiene solo durante días. Para cumpleaños, agradecimientos y detalles de oficina.",
        categories: ["cajas", "mix", "precio-bajo"]
    },
    {
        id: 24,
        name: "Arreglo Funeral con Listón Dedicado",
        price: 625,
        image: "assets/foto25.webp",
        description: "Arreglo funeral en forma de domo con crisantemos blancos, lirios, gerberas rojas, rosas y un girasol al centro, cruzado por un listón con la frase que tú elijas escrita a mano. Es la opción cuando quieres estar presente sin llegar al tamaño ni al costo de una corona. Lo llevamos el mismo día a funerarias, capillas y domicilios de Celaya.",
        categories: ["funebre", "mix", "precio-medio"]
    },
    {
        id: 25,
        name: "Corona Mediana con Girasoles y Rosas",
        price: 2250,
        image: "assets/foto26.webp",
        description: "Corona mediana sobre palma, con media luna de crisantemos blancos y un copete de girasoles, gerberas rosas, rosas y nardo. Los girasoles le quitan la solemnidad pesada y la vuelven una despedida más cálida, muy pedida para mamás y abuelas. Va montada en tripié, con listón impreso y entrega coordinada donde se esté velando.",
        categories: ["funebre", "girasoles", "precio-alto"]
    },
    {
        id: 26,
        name: "Ramo en Colores Pastel – Flor Variada",
        price: 750,
        image: "assets/foto27.webp",
        description: "Ramo variado en tonos suaves: girasol al centro, gerberas rosa y naranja, rosas de spray, lirios naranjas y hortensia verde, en papel rosa con estampado. No hay dos iguales, porque lo armamos con lo mejor que llegó ese día al mercado. Para cumpleaños, para el Día de las Madres o para alguien que aprecia lo bonito sin estridencias.",
        categories: ["mix", "precio-medio"]
    },
    {
        id: 27,
        name: "Ramo Premium de Flor Variada con Hortensia",
        price: 1000,
        image: "assets/foto28.webp",
        description: "Ramo de gran volumen con rosas rojas, rosas de spray en palo de rosa, gerberas fucsia y naranja, pompón verde, alstroemerias y una hortensia verde completa en la base. La hortensia es la flor cara del ramo y se nota: le da un peso visual que las demás no alcanzan. Para regalos importantes, cumpleaños de alguien especial y gestos de agradecimiento serios.",
        categories: ["rosas-rojas", "mix", "precio-medio"]
    },
    {
        id: 28,
        name: "Arreglo Alto de Rosas, Girasoles y Lirios",
        price: 1875,
        image: "assets/foto29.webp",
        description: "Arreglo montado en altura con una cascada de rosas rojas y rosas bajando por el centro, girasoles arriba, lirios orientales por abrir, gerberas y margaritas blancas en la base. Sobrepasa los ochenta centímetros y domina cualquier espacio donde lo dejen. Para inauguraciones, aniversarios de empresa, cumpleaños grandes y homenajes.",
        categories: ["girasoles", "rosas-rojas", "mix", "precio-alto"]
    },
    {
        id: 29,
        name: "Caja Grande de Madera con Flor Variada",
        price: 1500,
        image: "assets/foto30.webp",
        description: "Cajón grande de madera con girasol, rosas naranjas y amarillas, lirios blancos por abrir, alstroemerias, margaritas y eucalipto, todo montado en oasis con un lazo de hoja verde. Es la versión grande del cajón: llena una mesa de centro completa. Para cumpleaños, agradecimientos formales y regalos de empresa a empresa.",
        categories: ["cajas", "girasoles", "mix", "precio-medio"]
    },
    {
        id: 30,
        name: "Canasta Grande Frutal con Flores",
        price: 2500,
        image: "assets/foto31.webp",
        description: "Canasta grande de mimbre con base de fruta de temporada —manzana, plátano, uva, sandía— y una montaña de flores encima: aves del paraíso, lirios blancos, girasoles, gerberas de colores, rosas y nardo, con moño de organza. Es el regalo que se lleva a un hospital, a una convalecencia o a una casa donde hay que quedar bien con toda la familia. Se come y se disfruta a la vista al mismo tiempo.",
        categories: ["cajas", "mix", "precio-alto"]
    },
    {
        id: 31,
        name: "Letras Florales Personalizadas",
        price: 1875,
        image: "assets/foto32.webp",
        description: "Letras e iniciales armadas flor por flor sobre estructura, combinando girasoles, rosas fucsia, pompón verde, margaritas y statice morado. Hacemos la inicial del festejado, un número o una palabra corta, en los colores que traiga tu evento. El precio es por letra e ideal para cumpleaños, XV años, bodas y mesas de bienvenida.",
        categories: ["mix", "precio-alto"]
    },
    {
        id: 32,
        name: "Arreglo en Base de Cristal con Rosas y Lirios",
        price: 1000,
        image: "assets/foto33.webp",
        description: "Florero de cristal con torre de rosas rosas y rojas subiendo por el centro, lirios blancos abiertos a los lados, gerberas rosas y margaritas amarillas en la base. El cristal deja ver los tallos y el agua, así que se ve limpio desde cualquier ángulo. Para recámaras, recepciones, consultorios y regalos que se quedan a la vista mucho tiempo.",
        categories: ["rosas-rojas", "mix", "precio-medio"]
    },
    {
        id: 33,
        name: "Ramo de Novia con Caída de Orquídeas y Peonías",
        price: 2875,
        image: "assets/foto34.webp",
        description: "Ramo de novia en cascada con peonías en coral y fucsia, lisianthus doble y una caída de orquídeas dendrobium lila que baja casi medio metro. Es flor de importación y se arma el mismo día de la boda, por eso se aparta con anticipación. Para novias que ya vieron todo en internet y quieren el ramo que nadie más va a llevar.",
        categories: ["mix", "precio-alto"]
    }
];

// ===== Estado =====
let currentFilter = document.body && document.body.dataset.initialFilter ? document.body.dataset.initialFilter : 'todos';
let searchTerm = '';

function productCode(p){ return String(p.id).padStart(3,'0'); }
function productPhotoUrl(p){ return 'http://floreriacelaya.dondeseria.com/' + p.image.replace(/^\//,''); }
function normalizeText(t){ return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); }
function formatPrice(price){ return '$' + price.toLocaleString('es-MX'); }

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
        filtered = filtered.filter(p => normalizeText(p.name).includes(q) || productCode(p).includes(q));
    }
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
                <img src="/${product.image}" alt="${product.name}" class="product-image" loading="lazy">
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
