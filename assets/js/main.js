
(function () {
	"use strict";

	/**
	 * Apply .scrolled class to the body as the page is scrolled down
	 */
	function toggleScrolled() {
		const selectBody = document.querySelector('body');
		const selectHeader = document.querySelector('#header');
		if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
		window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
	}

	document.addEventListener('scroll', toggleScrolled);
	window.addEventListener('load', toggleScrolled);

	/**
	 * Mobile nav toggle
	 */
	const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

	function mobileNavToogle() {
		document.querySelector('body').classList.toggle('mobile-nav-active');
		mobileNavToggleBtn.classList.toggle('bi-list');
		mobileNavToggleBtn.classList.toggle('bi-x');
	}
	mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

	/**
	 * Hide mobile nav on same-page/hash links
	 */
	document.querySelectorAll('#navmenu a').forEach(navmenu => {
		navmenu.addEventListener('click', () => {
			if (document.querySelector('.mobile-nav-active')) {
				mobileNavToogle();
			}
		});

	});

	/**
	 * Toggle mobile nav dropdowns
	 */
	document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
		navmenu.addEventListener('click', function (e) {
			e.preventDefault();
			this.parentNode.classList.toggle('active');
			this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
			e.stopImmediatePropagation();
		});
	});

	/**
	 * Preloader
	 */
	const preloader = document.querySelector('#preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove();
		});
	}

	/**
	 * Scroll top button
	 */
	let scrollTop = document.querySelector('.scroll-top');

	function toggleScrollTop() {
		if (scrollTop) {
			window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
		}
	}
	scrollTop.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);

	/**
	 * Animation on scroll function and init
	 */
	function aosInit() {
		AOS.init({
			duration: 600,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		});
	}
	window.addEventListener('load', aosInit);

	/**
	 * Init swiper sliders
	 */
	function initSwiper() {
		document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
			let config = JSON.parse(
				swiperElement.querySelector(".swiper-config").innerHTML.trim()
			);

			if (swiperElement.classList.contains("swiper-tab")) {
				initSwiperWithCustomPagination(swiperElement, config);
			} else {
				new Swiper(swiperElement, config);
			}
		});
	}

	window.addEventListener("load", initSwiper);

	/**
	 * Initiate Pure Counter
	 */
	new PureCounter();

	/**
	 * Animate the skills items on reveal
	 */
	let skillsAnimation = document.querySelectorAll('.skills-animation');
	skillsAnimation.forEach((item) => {
		new Waypoint({
			element: item,
			offset: '80%',
			handler: function (direction) {
				let progress = item.querySelectorAll('.progress .progress-bar');
				progress.forEach(el => {
					el.style.width = el.getAttribute('aria-valuenow') + '%';
				});
			}
		});
	});

	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
		selector: '.glightbox'
	});

	/**
	 * Init isotope layout and filters
	 */
	document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
		let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
		let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
		let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

		let initIsotope;
		imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
			initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
				itemSelector: '.isotope-item',
				layoutMode: layout,
				filter: filter,
				sortBy: sort
			});
		});

		isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
			filters.addEventListener('click', function () {
				isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
				this.classList.add('filter-active');
				initIsotope.arrange({
					filter: this.getAttribute('data-filter')
				});
				if (typeof aosInit === 'function') {
					aosInit();
				}
			}, false);
		});

	});

})();



window.addEventListener('contextmenu', function(e) {
	e.preventDefault();
});

function openModal() {
			document.getElementById('jobModal').style.display = 'block';
		}

		function closeModal() {
			document.getElementById('jobModal').style.display = 'none';
		}
		
		function closeWidget(){
			document.getElementById('job-widget').style.display = 'none';
		}

		function openFormModal() {
			closeModal();
			document.getElementById('formModal').style.display = 'block';
		}

		function closeFormModal() {
			document.getElementById('formModal').style.display = 'none';
		}

		function submitApplication(event) {
			event.preventDefault();
			document.getElementById('successMsg').style.display = 'block';
		}

		window.onclick = function(event) {
			if (event.target == document.getElementById('jobModal')) closeModal();
			if (event.target == document.getElementById('formModal')) closeFormModal();
		}

 const questions = document.querySelectorAll('.question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });





(function () {
  // --- Արգելող ֆունկցիա ---
  function protectAction(e, text) {
    // Թույլ ենք տալիս input, select, textarea դաշտերում
    const tag = (e.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag)) return;

    // Թույլ ենք տալիս նաև այն span-ները, որոնք ունեն onclick ֆունկցիա (օրինակ՝ պատճենման կոճակներ)
    if (!e.target.closest("span[onclick]")) {
      e.preventDefault();
      e.stopPropagation();
      console.warn("Արգելված գործողություն:", text);
      return false;
    }
  }

  // --- Արգելել աջ կոճակը ---
  document.addEventListener("contextmenu", (e) =>
    protectAction(e, "Աջ կոճակը արգելված է։")
  );

  // --- Արգելել տեքստի նշումը (բացառությամբ input, select, textarea) ---
  document.addEventListener("selectstart", (e) =>
    protectAction(e, "Տեքստի ընտրությունը արգելված է։")
  );

  // --- Արգելել քաշելը կամ նշելը ---
  document.addEventListener("mousedown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag)) return;
    if (!e.target.closest("span[onclick]")) {
      if (e.button === 0 || e.button === 2) {
        protectAction(e, "Քաշելը կամ նշելը արգելված է։");
      }
    }
  });

  // --- Արգելել drag գործողությունը ---
  document.addEventListener("dragstart", (e) =>
    protectAction(e, "Քաշելու գործողությունը արգելված է։")
  );

  // --- Արգելել ստեղնաշարի կոդերը ---
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    // Թույլ ենք տալիս գրել input, textarea, select-ում
    if (["input", "textarea", "select"].includes(tag)) return;

    const key = (e.key || "").toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    // Արգելել F1–F12
    if (e.keyCode >= 112 && e.keyCode <= 123) {
      protectAction(e, "F1–F12 կոճակները արգելված են։");
      return false;
    }

    // Արգելել Ctrl + ...
    if (ctrl && ["a", "c", "v", "s", "p"].includes(key)) {
      protectAction(e, `Ctrl + ${key.toUpperCase()} արգելված է։`);
      return false;
    }
  });

  // --- Developer Tools հայտնաբերում ---
  const devDetector = new Image();
  Object.defineProperty(devDetector, "id", {
    get: function () {
      console.warn("🚫 Developer Tools բացվել է։");
    },
  });
  console.log("%c", devDetector);

  // --- Մոբայլ մենյուի բացման թույլտվություն ---
  document.addEventListener("click", (e) => {
    const toggler = e.target.closest(".navbar-toggler");
    if (toggler) {
      const menu = document.querySelector(".navbar-collapse");
      if (menu) menu.classList.toggle("show");
    }
  });
})();

// --- Screenshot-ի արգելանք ---

(function(){
  // Config
  const SHOW_LOG = false; // true եթե ուզում ես console-ում տեսնել հայտնաբերվումները
  const IP_API = "https://ipapi.co/json/"; // կարող ես փոխել եթե ունես ուրիշ ծառայություն
  const WATERMARK_SPEED_MS = 2000;
  const POPUP_TIMEOUT = 5000; // որքան ժամանակ popup-ն ցույց մնա (մես)
  const TRY_CLEAR_CLIPBOARD_ON_PRINTSCREEN = true;

  // State
  let userInfo = { ip: '---', city:'', country:'' };
  let watermarkEl = null, watermarkTimer = null;

  // Create bottom popup (for screenshot warning)
  function createPopup(){
    if(document.getElementById('gd-screenshot-popup')) return;
    const p = document.createElement('div');
    p.id = 'gd-screenshot-popup';
    p.style.position = 'fixed';
    p.style.left = '50%';
    p.style.transform = 'translateX(-50%)';
    p.style.bottom = '20px';
    p.style.zIndex = '2147483647';
    p.style.background = 'rgba(0,0,0,0.85)';
    p.style.color = '#fff';
    p.style.padding = '12px 18px';
    p.style.borderRadius = '8px';
    p.style.boxShadow = '0 6px 20px rgba(0,0,0,0.5)';
    p.style.fontFamily = 'Arial, sans-serif';
    p.style.fontSize = '14px';
    p.style.display = 'none';
    p.style.maxWidth = '90%';
    p.style.textAlign = 'center';
    p.innerHTML = '<strong>Արգելվում է</strong> — Դուք նշում կամ զբաղվել եք էկրանային պատկերի ստացման գործողությամբ։ Խնդրում ենք չզբաղվել դրանով։';
    document.documentElement.appendChild(p);
  }

  function showPopupOnce(){
    createPopup();
    const p = document.getElementById('gd-screenshot-popup');
    if(!p) return;
    p.style.display = 'block';
    // small animation
    p.style.opacity = '0';
    p.style.transition = 'opacity 220ms ease';
    requestAnimationFrame(()=> p.style.opacity = '1');
    setTimeout(()=> {
      p.style.opacity = '0';
      setTimeout(()=>{ if(p.parentNode) p.style.display = 'none'; }, 300);
    }, POPUP_TIMEOUT);
  }

  // Watermark: tiled moving IP + time
  function initWatermark(){
    if(watermarkEl) return;
    watermarkEl = document.createElement('div');
    watermarkEl.id = 'gd-watermark-overlay';
    Object.assign(watermarkEl.style, {
      position: 'fixed',
      inset: '0',
      pointerEvents: 'none',
      zIndex: '2147483646',
      overflow: 'hidden',
      mixBlendMode: 'overlay'
    });
    const inner = document.createElement('div');
    inner.style.position = 'absolute';
    inner.style.left = '0';
    inner.style.top = '0';
    inner.style.width = '220%';
    inner.style.height = '220%';
    inner.style.transform = 'rotate(-15deg)';
    inner.style.opacity = '0.14';
    inner.style.fontSize = '16px';
    inner.style.fontWeight = '700';
    inner.style.color = '#ff0000';
    inner.style.fontFamily = 'Segoe UI, Roboto, Arial, sans-serif';
    inner.style.letterSpacing = '1px';
    inner.style.display = 'flex';
    inner.style.flexWrap = 'wrap';
    inner.style.alignItems = 'center';
    inner.style.padding = '30px';
    // fill repeated
    function fillText(){
      inner.innerHTML = '';
      const base = `${userInfo.ip || '---'} ${userInfo.city?userInfo.city+',' : ''}${userInfo.country||''} ${new Date().toLocaleString()}`;
      for(let i=0;i<80;i++){
        const s = document.createElement('span');
        s.textContent = base + '    ';
        s.style.marginRight = '36px';
        inner.appendChild(s);
      }
    }
    fillText();
    watermarkEl.appendChild(inner);
    document.documentElement.appendChild(watermarkEl);
    // animate
    let x = 0, y = 0;
    watermarkTimer = setInterval(()=>{
      x = (x + 24) % 900;
      y = (y + 7) % 300;
      inner.style.transform = `translate3d(-${x}px, -${y}px, 0) rotate(-15deg)`;
      // occasionally refresh timestamp
      if(Math.random()<0.06) fillText();
    }, WATERMARK_SPEED_MS);
  }

  // remove watermark if needed
  function removeWatermark(){
    if(watermarkTimer) { clearInterval(watermarkTimer); watermarkTimer = null; }
    if(watermarkEl && watermarkEl.parentNode) watermarkEl.parentNode.removeChild(watermarkEl);
    watermarkEl = null;
  }

  // fetch IP info for watermark text
  (function fetchIP(){
    try {
      fetch(IP_API).then(r=>r.json()).then(j=>{
        userInfo.ip = j.ip || userInfo.ip;
        userInfo.city = j.city || userInfo.city;
        userInfo.country = j.country_name || userInfo.country;
        initWatermark();
      }).catch(()=> initWatermark());
    } catch(e){ initWatermark(); }
  })();

  // Heuristics for screenshot detection:
  // 1) PrintScreen key (keyCode 44 / 'PrintScreen')
  // 2) visibilitychange -> if document becomes hidden quickly (some platforms hide when screenshot)
  // 3) window blur (focus lost)
  // 4) rapid attempt to print (Ctrl+P)
  // On detect -> showPopupOnce() and optionally try to clear clipboard
  let lastHiddenAt = 0;
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){
      lastHiddenAt = Date.now();
      // small delay: consider this suspicious
      setTimeout(()=> {
        // if still hidden after short delay -> treat as potential screenshot
        if(document.hidden){
          if(SHOW_LOG) console.log('visibilitychange:hidden -> suspected screenshot');
          showPopupOnce();
          // optional: log to server (not included)
        }
      }, 250);
    } else {
      // page became visible again
      const dt = Date.now() - lastHiddenAt;
      if(dt>0 && dt < 3000){
        // short hide (user likely switched app briefly) -> possible screenshot
        if(SHOW_LOG) console.log('visibilitychange:visible after short hide -> suspected screenshot');
        showPopupOnce();
      }
    }
  });

  // blur/focus
  window.addEventListener('blur', ()=>{
    // sometimes blur happens on screenshot tools; mark time
    lastHiddenAt = Date.now();
    setTimeout(()=> {
      if(document.hasFocus && !document.hasFocus()){
        if(SHOW_LOG) console.log('window.blur -> suspected screenshot');
        showPopupOnce();
      }
    }, 220);
  });

  window.addEventListener('focus', ()=>{
    // if we lost focus briefly
    const dt = Date.now() - lastHiddenAt;
    if(dt>0 && dt < 3000){
      if(SHOW_LOG) console.log('window.focus after short blur -> suspected screenshot');
      showPopupOnce();
    }
  });

  // detect PrintScreen key
  window.addEventListener('keyup', async (e)=>{
    try {
      const isPrint = (e.key === 'PrintScreen') || (e.keyCode === 44);
      if(isPrint){
        if(SHOW_LOG) console.log('PrintScreen key detected');
        // try clear clipboard (best-effort)
        if(TRY_CLEAR_CLIPBOARD_ON_PRINTSCREEN && navigator.clipboard && navigator.clipboard.writeText){
          try { await navigator.clipboard.writeText(''); if(SHOW_LOG) console.log('clipboard cleared'); } catch(err){ if(SHOW_LOG) console.log('clipboard clear failed', err); }
        }
        showPopupOnce();
      }
    } catch(err){}
  }, true);

  // intercept common print shortcuts (Ctrl+P, Ctrl+Shift+S etc.)
  document.addEventListener('keydown', function(e){
    const key = (e.key||'').toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    if(ctrl && (key === 'p' || key === 's' || key === 'u')){
      e.preventDefault();
      e.stopImmediatePropagation();
      showPopupOnce();
      return false;
    }
    // block F12 (devtools)
    if(e.keyCode >= 112 && e.keyCode <= 123){
      e.preventDefault();
      e.stopImmediatePropagation();
      showPopupOnce();
      return false;
    }
  }, true);

  // also block context menu (but allow inputs/selects)
  document.addEventListener('contextmenu', function(e){
    const tag = (e.target.tagName||'').toLowerCase();
    if(['input','textarea','select'].includes(tag)) return; // allow form fields
    e.preventDefault();
    showPopupOnce();
  }, true);

  // prevent select start (allow inputs)
  document.addEventListener('selectstart', function(e){
    const tag = (e.target.tagName||'').toLowerCase();
    if(['input','textarea','select'].includes(tag)) return;
    e.preventDefault();
  }, true);

  // CSS print block (in case user tries File->Print->Save as PDF)
  const css = document.createElement('style');
  css.innerHTML = `@media print { *{ visibility:hidden !important } body:after{ content:"Printing disabled"; } }`;
  document.head.appendChild(css);

  // expose for debug
  window._gdProtect = { showPopupOnce, removeWatermark, initWatermark, userInfo };

  // initial popup creation
  createPopup();

})();


