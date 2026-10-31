/* ============================================================
   CAMPAÑA DÍA DE MUERTOS · PROMO
   Florería Andrea Celaya
   ------------------------------------------------------------
   - Flyer flotante al entrar al catálogo y a las landings,
     se cierra solo a los 4 segundos (DM_AUTOCLOSE)
   - Sección especial arriba del catálogo con contador
   - Se apaga sola después del 2 de noviembre (DM_END)
   Requiere que ya exista el arreglo global `products` y las
   funciones formatPrice / productCode / productPhotoUrl.
   ============================================================ */
(function () {
    'use strict';

    // ---------- Configuración ----------
    var DM_IDS = [86, 75, 76, 85, 83, 84, 77, 78, 79, 80, 81, 82]; // productos de la campaña (orden de la sección)
    var DM_FLYER_IDS = [86, 77, 76, 80];                          // los 4 que se ven en el flyer
    var DM_TARGET = new Date('2026-11-02T00:00:00-06:00');        // 2 de noviembre (hora Celaya)
    var DM_CUTOFF = new Date('2026-11-02T14:00:00-06:00');        // corte para entrega el mismo día
    var DM_END    = new Date('2026-11-03T00:00:00-06:00');        // después de esto se oculta todo
    var DM_POPUP_DELAY = 900;                                     // ms antes de mostrar el flyer
    var DM_AUTOCLOSE = 4000;                                      // ms que dura el flyer en pantalla
    var WA_NUMBER = '5214615048418';

    if (new Date() >= DM_END) return;                             // campaña terminada: no pinta nada
    if (typeof products === 'undefined') return;

    var dmProducts = DM_IDS.map(function (id) {
        for (var i = 0; i < products.length; i++) if (products[i].id === id) return products[i];
        return null;
    }).filter(Boolean);
    if (!dmProducts.length) return;

    // ---------- Helpers ----------
    function fmt(p) { return (typeof formatPrice === 'function') ? formatPrice(p) : '$' + p; }
    function code(p) { return (typeof productCode === 'function') ? productCode(p) : String(p.id); }
    function photoUrl(p) { return (typeof productPhotoUrl === 'function') ? productPhotoUrl(p) : p.image; }
    function imgSrc(p) { return '/' + p.image.replace(/^\//, ''); }
    function off(p) { return p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0; }
    function waLink(p) {
        var txt = 'Hola, quiero pedir de la promo Día de Muertos: ' + p.name + ' (Ref. ' + code(p) + ') - ' + fmt(p.price) +
                  (p.oldPrice ? ' (antes ' + fmt(p.oldPrice) + ')' : '') + ' | Foto: ' + photoUrl(p);
        return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(txt);
    }
    function waGeneral() {
        return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hola, quiero pedir flores de la promo Día de Muertos. ¿Me ayudas a elegir?');
    }
    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    var maxOff = dmProducts.reduce(function (m, p) { return Math.max(m, off(p)); }, 0);

    var FLOWER_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="2.6"/><path d="M12 2.5c1.5 0 2.4 2 2 4.2-.3 1.4-1.2 2.4-2 2.4s-1.7-1-2-2.4c-.4-2.2.5-4.2 2-4.2Zm0 19c-1.5 0-2.4-2-2-4.2.3-1.4 1.2-2.4 2-2.4s1.7 1 2 2.4c.4 2.2-.5 4.2-2 4.2ZM2.5 12c0-1.5 2-2.4 4.2-2 1.4.3 2.4 1.2 2.4 2s-1 1.7-2.4 2c-2.2.4-4.2-.5-4.2-2Zm19 0c0 1.5-2 2.4-4.2 2-1.4-.3-2.4-1.2-2.4-2s1-1.7 2.4-2c2.2-.4 4.2.5 4.2 2ZM5.3 5.3c1-1 3.1-.3 4.4 1.5.8 1.2.9 2.5.3 3.1s-1.9.5-3.1-.3C5 8.4 4.3 6.3 5.3 5.3Zm13.4 13.4c-1 1-3.1.3-4.4-1.5-.8-1.2-.9-2.5-.3-3.1s1.9-.5 3.1.3c1.8 1.3 2.5 3.4 1.6 4.3ZM18.7 5.3c1 1 .3 3.1-1.5 4.4-1.2.8-2.5.9-3.1.3s-.5-1.9.3-3.1c1.3-1.8 3.4-2.5 4.3-1.6ZM5.3 18.7c-1-1-.3-3.1 1.5-4.4 1.2-.8 2.5-.9 3.1-.3s.5 1.9-.3 3.1c-1.3 1.8-3.4 2.5-4.3 1.6Z"/></svg>';
    var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

    // Papel picado decorativo (tira de banderitas)
    function papelPicado(n) {
        var s = '<div class="dm-picado" aria-hidden="true">';
        for (var i = 0; i < n; i++) s += '<i></i>';
        return s + '</div>';
    }
    function petals(n) {
        var s = '<div class="dm-petals" aria-hidden="true">';
        for (var i = 0; i < n; i++) s += '<i></i>';
        return s + '</div>';
    }

    // ---------- Contador ----------
    function countdownHTML() {
        return '<div class="dm-countdown" data-dm-countdown>' +
            '<p class="dm-countdown-label" data-dm-label></p>' +
            '<div class="dm-countdown-boxes" data-dm-boxes>' +
                unit('dias', 'Días') + unit('horas', 'Horas') + unit('min', 'Min') + unit('seg', 'Seg') +
            '</div>' +
        '</div>';
        function unit(k, label) {
            return '<div class="dm-unit"><span class="dm-unit-num" data-dm-' + k + '>00</span><span class="dm-unit-txt">' + label + '</span></div>';
        }
    }

    var timer;
    function tick() {
        var t = new Date();
        var target, label, showBoxes = true;
        if (t < DM_TARGET) {
            target = DM_TARGET;
            label = 'Faltan para el 2 de noviembre';
        } else if (t < DM_CUTOFF) {
            target = DM_CUTOFF;
            label = '¡Hoy es Día de Muertos! Pide antes de las 2:00 PM para entrega hoy';
        } else {
            showBoxes = false;
            label = '¡Hoy es Día de Muertos! Escríbenos y coordinamos tu entrega';
        }
        var nodes = document.querySelectorAll('[data-dm-countdown]');
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];
            n.querySelector('[data-dm-label]').textContent = label;
            var boxes = n.querySelector('[data-dm-boxes]');
            if (!showBoxes) { boxes.style.display = 'none'; continue; }
            var diff = Math.max(0, target - t);
            n.querySelector('[data-dm-dias]').textContent = pad(Math.floor(diff / 86400000));
            n.querySelector('[data-dm-horas]').textContent = pad(Math.floor(diff / 3600000) % 24);
            n.querySelector('[data-dm-min]').textContent = pad(Math.floor(diff / 60000) % 60);
            n.querySelector('[data-dm-seg]').textContent = pad(Math.floor(diff / 1000) % 60);
        }
        if (t >= DM_END) {
            var sec = document.getElementById('dm-section'); if (sec) sec.remove();
            closeFlyer();
            clearInterval(timer);
        }
    }

    // ---------- Sección especial arriba del catálogo ----------
    function buildSection() {
        var anchor = document.querySelector('.results-counter') || document.querySelector('.catalog-section');
        if (!anchor || document.getElementById('dm-section')) return;

        var cards = dmProducts.map(function (p) {
            return '<article class="dm-card">' +
                '<div class="dm-card-img" onclick="openLightbox(\'' + esc(p.image) + '\', \'' + esc(p.name).replace(/'/g, '\\\'') + '\', \'' + fmt(p.price) + '\')">' +
                    '<img src="' + imgSrc(p) + '" alt="' + esc(p.name) + ' - arreglo floral Día de Muertos a domicilio en Celaya | Florería Andrea" loading="lazy">' +
                    (off(p) ? '<span class="dm-card-tag">-' + off(p) + '%</span>' : '') +
                '</div>' +
                '<div class="dm-card-body">' +
                    '<span class="dm-card-ref">Ref. ' + code(p) + '</span>' +
                    '<h3 class="dm-card-name">' + esc(p.name) + '</h3>' +
                    '<div class="dm-card-foot">' +
                        '<div class="dm-card-prices">' +
                            (p.oldPrice ? '<span class="dm-card-old">' + fmt(p.oldPrice) + '</span>' : '') +
                            '<span class="dm-card-price">' + fmt(p.price) + '</span>' +
                        '</div>' +
                        '<a class="dm-card-btn" href="' + waLink(p) + '" target="_blank" rel="noopener">' + WA_SVG + 'Pedir</a>' +
                    '</div>' +
                '</div>' +
            '</article>';
        }).join('');

        var sec = document.createElement('section');
        sec.className = 'dm-section';
        sec.id = 'dm-section';
        sec.innerHTML =
            papelPicado(14) +
            petals(10) +
            '<div class="container">' +
                '<div class="dm-head">' +
                    '<span class="dm-eyebrow">' + FLOWER_SVG + ' Promo especial · Día de Muertos ' + FLOWER_SVG + '</span>' +
                    '<h2 class="dm-title">Flores para Día de Muertos</h2>' +
                    '<p class="dm-sub">' + dmProducts.length + ' arreglos para la ofrenda y el panteón con hasta ' + maxOff + '% de descuento, entregamos a domicilio en cualquier colonia de Celaya.</p>' +
                    countdownHTML() +
                '</div>' +
                '<div class="dm-grid">' + cards + '</div>' +
                '<div class="dm-cta-row">' +
                    '<a class="dm-cta" href="' + waGeneral() + '" target="_blank" rel="noopener">' + WA_SVG + ' Apartar mi arreglo en promo</a>' +
                    '<span class="dm-cta-note">Precios de promoción por tiempo limitado · Te mandamos foto del arreglo antes de salir</span>' +
                '</div>' +
            '</div>';
        anchor.parentNode.insertBefore(sec, anchor);
    }

    // ---------- Flyer flotante (se cierra solo a los 4 s) ----------
    var flyerEl = null, autoTimer = null;
    function buildFlyer() {
        if (document.getElementById('dm-flyer')) return;
        var flyerProducts = DM_FLYER_IDS.map(function (id) {
            for (var i = 0; i < dmProducts.length; i++) if (dmProducts[i].id === id) return dmProducts[i];
            return null;
        }).filter(Boolean);
        var tiles = flyerProducts.map(function (p) {
            return '<a class="dm-flyer-tile" href="' + waLink(p) + '" target="_blank" rel="noopener">' +
                '<span class="dm-flyer-tile-img"><img src="' + imgSrc(p) + '" alt="' + esc(p.name) + '" loading="eager">' +
                    (off(p) ? '<b>-' + off(p) + '%</b>' : '') + '</span>' +
                '<span class="dm-flyer-tile-name">' + esc(p.name) + '</span>' +
                '<span class="dm-flyer-tile-prices">' +
                    (p.oldPrice ? '<s>' + fmt(p.oldPrice) + '</s>' : '') +
                    '<strong>' + fmt(p.price) + '</strong>' +
                '</span>' +
            '</a>';
        }).join('');

        var el = document.createElement('div');
        el.className = 'dm-flyer';
        el.id = 'dm-flyer';
        el.setAttribute('role', 'dialog');
        el.setAttribute('aria-modal', 'true');
        el.setAttribute('aria-label', 'Promo de Día de Muertos');
        el.style.setProperty('--dm-autoclose', DM_AUTOCLOSE + 'ms');
        el.innerHTML =
            '<div class="dm-flyer-card">' +
                '<button class="dm-flyer-close" type="button" aria-label="Cerrar">&times;</button>' +
                '<div class="dm-flyer-top">' +
                    papelPicado(9) +
                    petals(6) +
                    '<span class="dm-eyebrow">' + FLOWER_SVG + ' Día de Muertos ' + FLOWER_SVG + '</span>' +
                    '<h2 class="dm-flyer-title">Promo de flores<br>para tu ofrenda</h2>' +
                    '<p class="dm-flyer-sub"><span class="dm-flyer-off">Hasta -' + maxOff + '%</span> en ' + dmProducts.length + ' arreglos especiales, con entrega a domicilio en Celaya.</p>' +
                '</div>' +
                '<div class="dm-flyer-tiles">' + tiles + '</div>' +
                '<div class="dm-flyer-actions">' +
                    '<button class="dm-flyer-btn dm-flyer-btn-ghost" type="button" data-dm-ver>Ver la promo</button>' +
                    '<a class="dm-flyer-btn dm-flyer-btn-wa" href="' + waGeneral() + '" target="_blank" rel="noopener">' + WA_SVG + ' Pedir por WhatsApp</a>' +
                '</div>' +
                '<div class="dm-flyer-progress" aria-hidden="true"><span></span></div>' +
            '</div>';
        document.body.appendChild(el);
        flyerEl = el;

        el.querySelector('.dm-flyer-close').addEventListener('click', closeFlyer);
        el.addEventListener('click', function (e) { if (e.target === el) closeFlyer(); });
        el.querySelector('[data-dm-ver]').addEventListener('click', function () {
            closeFlyer();
            var sec = document.getElementById('dm-section');
            if (sec) {
                var y = sec.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
        document.addEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') closeFlyer(); }
    function openFlyer() {
        if (!flyerEl) buildFlyer();
        requestAnimationFrame(function () {
            if (!flyerEl) return;
            flyerEl.classList.add('active');
            autoTimer = setTimeout(closeFlyer, DM_AUTOCLOSE);     // se cierra solo
        });
    }
    function closeFlyer() {
        if (!flyerEl) return;
        clearTimeout(autoTimer);
        var el = flyerEl;
        flyerEl = null;
        el.classList.remove('active');
        document.removeEventListener('keydown', onKey);
        setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 400);
    }

    // ---------- Init ----------
    function init() {
        buildSection();
        tick();
        timer = setInterval(tick, 1000);
        setTimeout(openFlyer, DM_POPUP_DELAY);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
