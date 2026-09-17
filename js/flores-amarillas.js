/* ============================================================
   CAMPAÑA FLORES AMARILLAS · 21 DE SEPTIEMBRE
   Florería Andrea Celaya
   ------------------------------------------------------------
   - Flyer flotante al entrar al catálogo y a las landings
   - Mini sección especial arriba del catálogo con contador
   - Se apaga sola después del 21 de septiembre (FA_END)
   Requiere que ya exista el arreglo global `products` y las
   funciones formatPrice / productCode / productPhotoUrl.
   ============================================================ */
(function () {
    'use strict';

    // ---------- Configuración ----------
    var FA_IDS = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]; // productos de la campaña
    var FA_FLYER_IDS = [55, 60, 63, 57, 59];              // los 5 que se ven en el flyer
    var FA_TARGET = new Date('2026-09-21T00:00:00-06:00'); // llega el 21 (hora Celaya)
    var FA_CUTOFF = new Date('2026-09-21T14:00:00-06:00'); // corte para entrega el mismo día
    var FA_END    = new Date('2026-09-22T00:00:00-06:00'); // después de esto se oculta todo
    var FA_POPUP_DELAY = 1100;                             // ms antes de mostrar el flyer
    var FA_SESSION_KEY = 'fa2026-flyer-visto';
    var WA_NUMBER = '5214615048418';

    var now = new Date();
    if (now >= FA_END) return;                             // campaña terminada: no pinta nada
    if (typeof products === 'undefined') return;

    var faProducts = FA_IDS.map(function (id) {
        for (var i = 0; i < products.length; i++) if (products[i].id === id) return products[i];
        return null;
    }).filter(Boolean);
    if (!faProducts.length) return;

    // ---------- Helpers ----------
    function fmt(p) { return (typeof formatPrice === 'function') ? formatPrice(p) : '$' + p; }
    function code(p) { return (typeof productCode === 'function') ? productCode(p) : String(p.id); }
    function photoUrl(p) { return (typeof productPhotoUrl === 'function') ? productPhotoUrl(p) : p.image; }
    function imgSrc(p) { return '/' + p.image.replace(/^\//, ''); }
    function waLink(p) {
        var txt = 'Hola, quiero pedir para el 21 de septiembre: ' + p.name + ' (Ref. ' + code(p) + ') - ' + fmt(p.price) + ' | Foto: ' + photoUrl(p);
        return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(txt);
    }
    function waGeneral() {
        return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hola, quiero pedir flores amarillas para el 21 de septiembre. ¿Me ayudas a elegir?');
    }
    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
    function pad(n) { return (n < 10 ? '0' : '') + n; }

    var SUN_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

    // ---------- Contador (compartido entre flyer y sección) ----------
    function countdownHTML(prefix) {
        return '<div class="fa-countdown" data-fa-countdown>' +
            '<p class="fa-countdown-label" data-fa-label></p>' +
            '<div class="fa-countdown-boxes" data-fa-boxes>' +
                unit('dias', 'Días') + unit('horas', 'Horas') + unit('min', 'Min') + unit('seg', 'Seg') +
            '</div>' +
        '</div>';
        function unit(k, label) {
            return '<div class="fa-unit"><span class="fa-unit-num" data-fa-' + k + '>00</span><span class="fa-unit-txt">' + label + '</span></div>';
        }
    }

    function tick() {
        var t = new Date();
        var target, label, showBoxes = true;
        if (t < FA_TARGET) {
            target = FA_TARGET;
            label = 'Faltan para el 21 de septiembre';
        } else if (t < FA_CUTOFF) {
            target = FA_CUTOFF;
            label = '¡Hoy es 21 de septiembre! Pide antes de las 2:00 PM para entrega hoy';
        } else {
            showBoxes = false;
            label = '¡Hoy es 21 de septiembre! Escríbenos y coordinamos tu entrega';
        }
        var nodes = document.querySelectorAll('[data-fa-countdown]');
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];
            n.querySelector('[data-fa-label]').textContent = label;
            var boxes = n.querySelector('[data-fa-boxes]');
            if (!showBoxes) { boxes.style.display = 'none'; continue; }
            var diff = Math.max(0, target - t);
            var d = Math.floor(diff / 86400000);
            var h = Math.floor(diff / 3600000) % 24;
            var m = Math.floor(diff / 60000) % 60;
            var s = Math.floor(diff / 1000) % 60;
            n.querySelector('[data-fa-dias]').textContent = pad(d);
            n.querySelector('[data-fa-horas]').textContent = pad(h);
            n.querySelector('[data-fa-min]').textContent = pad(m);
            n.querySelector('[data-fa-seg]').textContent = pad(s);
        }
        if (t >= FA_END) {
            var sec = document.getElementById('fa-section'); if (sec) sec.remove();
            closeFlyer();
            clearInterval(timer);
        }
    }

    // ---------- Sección especial arriba del catálogo ----------
    function buildSection() {
        var anchor = document.querySelector('.results-counter') || document.querySelector('.catalog-section');
        if (!anchor || document.getElementById('fa-section')) return;

        var cards = faProducts.map(function (p) {
            return '<article class="fa-card">' +
                '<div class="fa-card-img" onclick="openLightbox(\'' + esc(p.image) + '\', \'' + esc(p.name).replace(/'/g, '\\\'') + '\', \'' + fmt(p.price) + '\')">' +
                    '<img src="' + imgSrc(p) + '" alt="' + esc(p.name) + ' - flores amarillas a domicilio en Celaya | Florería Andrea" loading="lazy">' +
                    '<span class="fa-card-tag">21 Sep</span>' +
                '</div>' +
                '<div class="fa-card-body">' +
                    '<span class="fa-card-ref">Ref. ' + code(p) + '</span>' +
                    '<h3 class="fa-card-name">' + esc(p.name) + '</h3>' +
                    '<div class="fa-card-foot">' +
                        '<span class="fa-card-price">' + fmt(p.price) + '</span>' +
                        '<a class="fa-card-btn" href="' + waLink(p) + '" target="_blank" rel="noopener">' + WA_SVG + 'Pedir</a>' +
                    '</div>' +
                '</div>' +
            '</article>';
        }).join('');

        var sec = document.createElement('section');
        sec.className = 'fa-section';
        sec.id = 'fa-section';
        sec.innerHTML =
            '<div class="fa-petals" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
            '<div class="container">' +
                '<div class="fa-head">' +
                    '<span class="fa-eyebrow">' + SUN_SVG + ' Edición especial · 21 de septiembre ' + SUN_SVG + '</span>' +
                    '<h2 class="fa-title">Flores Amarillas</h2>' +
                    '<p class="fa-sub">' + faProducts.length + ' diseños armados solo para esta fecha. Aparta el tuyo hoy y lo entregamos el 21 en cualquier colonia de Celaya.</p>' +
                    countdownHTML() +
                '</div>' +
                '<div class="fa-grid">' + cards + '</div>' +
                '<div class="fa-cta-row">' +
                    '<a class="fa-cta" href="' + waGeneral() + '" target="_blank" rel="noopener">' + WA_SVG + ' Apartar mis flores amarillas</a>' +
                    '<span class="fa-cta-note">Entrega a domicilio · Te mandamos foto del ramo antes de salir</span>' +
                '</div>' +
            '</div>';
        anchor.parentNode.insertBefore(sec, anchor);
    }

    // ---------- Flyer flotante ----------
    var flyerEl = null;
    function buildFlyer() {
        if (document.getElementById('fa-flyer')) return;
        var flyerProducts = faProducts.filter(function (p) { return FA_FLYER_IDS.indexOf(p.id) !== -1; });
        var tiles = flyerProducts.map(function (p) {
            return '<a class="fa-flyer-tile" href="' + waLink(p) + '" target="_blank" rel="noopener">' +
                '<img src="' + imgSrc(p) + '" alt="' + esc(p.name) + '" loading="lazy">' +
                '<span class="fa-flyer-tile-name">' + esc(p.name) + '</span>' +
                '<span class="fa-flyer-tile-price">' + fmt(p.price) + '</span>' +
            '</a>';
        }).join('');

        var el = document.createElement('div');
        el.className = 'fa-flyer';
        el.id = 'fa-flyer';
        el.setAttribute('role', 'dialog');
        el.setAttribute('aria-modal', 'true');
        el.setAttribute('aria-label', 'Flores amarillas para el 21 de septiembre');
        el.innerHTML =
            '<div class="fa-flyer-card">' +
                '<button class="fa-flyer-close" type="button" aria-label="Cerrar">&times;</button>' +
                '<div class="fa-flyer-top">' +
                    '<div class="fa-petals fa-petals-sm" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>' +
                    '<span class="fa-eyebrow">' + SUN_SVG + ' 21 de septiembre ' + SUN_SVG + '</span>' +
                    '<h2 class="fa-flyer-title">¿Ya apartaste<br>tus flores amarillas?</h2>' +
                    '<p class="fa-flyer-sub">' + faProducts.length + ' diseños especiales, solo para esta fecha. Llegan a domicilio en Celaya.</p>' +
                    countdownHTML() +
                '</div>' +
                '<div class="fa-flyer-tiles">' + tiles + '</div>' +
                '<div class="fa-flyer-actions">' +
                    '<button class="fa-flyer-btn fa-flyer-btn-ghost" type="button" data-fa-ver>Ver los ' + faProducts.length + ' diseños</button>' +
                    '<a class="fa-flyer-btn fa-flyer-btn-wa" href="' + waGeneral() + '" target="_blank" rel="noopener">' + WA_SVG + ' Apartar por WhatsApp</a>' +
                '</div>' +
            '</div>';
        document.body.appendChild(el);
        flyerEl = el;

        el.querySelector('.fa-flyer-close').addEventListener('click', closeFlyer);
        el.addEventListener('click', function (e) { if (e.target === el) closeFlyer(); });
        el.querySelector('[data-fa-ver]').addEventListener('click', function () {
            closeFlyer();
            var sec = document.getElementById('fa-section');
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
        tick();
        document.body.classList.add('fa-flyer-open');
        requestAnimationFrame(function () { flyerEl.classList.add('active'); });
    }
    function closeFlyer() {
        if (!flyerEl) return;
        flyerEl.classList.remove('active');
        document.body.classList.remove('fa-flyer-open');
        try { sessionStorage.setItem(FA_SESSION_KEY, '1'); } catch (e) {}
        document.removeEventListener('keydown', onKey);
        setTimeout(function () { if (flyerEl && flyerEl.parentNode) flyerEl.parentNode.removeChild(flyerEl); flyerEl = null; }, 350);
    }
    function alreadySeen() {
        try { return sessionStorage.getItem(FA_SESSION_KEY) === '1'; } catch (e) { return false; }
    }

    // ---------- Init ----------
    var timer;
    function init() {
        buildSection();
        tick();
        timer = setInterval(tick, 1000);
        if (!alreadySeen()) setTimeout(openFlyer, FA_POPUP_DELAY);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
