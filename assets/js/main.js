
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

/*Protect+GPS Modal JS
  - Ավելացիր որպես առանձին .js ֆայլ կամ էջի <script> մակնիշում։
  - Պետք է էջը լինի HTTPS որպեսզի GPS աշխատի։
*/
(function () {
  // ========================
  // Utility: safeFetch with timeout
  // ========================
  function fetchWithTimeout(url, opts = {}, timeout = 8000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("timeout")), timeout);
      fetch(url, opts)
        .then((r) => {
          clearTimeout(timer);
          if (!r.ok) reject(new Error("network"));
          else resolve(r);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  }

  // ========================
  // Reverse geocode lat/lon -> human place using Nominatim
  // ========================
  async function reverseGeocode(lat, lon) {
    try {
      const url =
        "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
        encodeURIComponent(lat) +
        "&lon=" +
        encodeURIComponent(lon) +
        "&accept-language=hy";
      const res = await fetchWithTimeout(url, {
        headers: { "User-Agent": "gdprint-protect/1.0 (contact@example.com)" },
      }, 9000);
      const data = await res.json();
      const addr = data.address || {};
      const place =
        addr.city || addr.town || addr.village || addr.hamlet || addr.county || addr.state || data.display_name || "անհայտ";
      return { ok: true, place, raw: data };
    } catch (err) {
      return { ok: false, reason: String(err) };
    }
  }

  // ========================
  // Try to get GPS coords (with timeout). Returns {ok:true, lat, lon} or {ok:false, reason}
  // ========================
  function tryGetGPS(timeoutMs = 8000) {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve({ ok: false, reason: "no-geolocation" });
        return;
      }
      let done = false;
      const success = (pos) => {
        if (done) return;
        done = true;
        resolve({ ok: true, lat: pos.coords.latitude, lon: pos.coords.longitude });
      };
      const fail = (err) => {
        if (done) return;
        done = true;
        resolve({ ok: false, reason: err && err.message ? err.message : "geolocation-error" });
      };
      try {
        navigator.geolocation.getCurrentPosition(success, fail, { enableHighAccuracy: true, timeout: timeoutMs, maximumAge: 0 });
      } catch (ex) {
        resolve({ ok: false, reason: "exception" });
      }
      setTimeout(() => {
        if (!done) {
          done = true;
          resolve({ ok: false, reason: "geolocation-timeout" });
        }
      }, timeoutMs + 1200);
    });
  }

  // ========================
  // Build modal + audio UI once
  // ========================
  const audio = document.createElement("audio");
  audio.id = "protectAudio";
  // Placeholder alarm - change to your own file path if desired
  audio.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_9f3c6b6c56.mp3?filename=warning-alarm-111447.mp3";
  audio.loop = true;
  audio.volume = 0.45;
  audio.preload = "auto";
  document.body.appendChild(audio);

  // Modal container (top overlay)
  const modal = document.createElement("div");
  modal.id = "protectModal";
  Object.assign(modal.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "none",
    alignItems: "flex-start",
    justifyContent: "center",
    zIndex: "2147483647",
    paddingTop: "30px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(2px)"
  });

  // Card (centered horizontally, near top)
  const card = document.createElement("div");
  Object.assign(card.style, {
    width: "92%",
    maxWidth: "560px",
    background: "#fff",
    borderRadius: "10px",
    padding: "16px 18px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
    textAlign: "center",
    transform: "translateY(0)",
    animation: "slideDownModal 0.45s ease"
  });

  // Add icon, title, reason, info, button
  const icon = document.createElement("div");
  icon.textContent = "⛔";
  Object.assign(icon.style, { fontSize: "44px", color: "#b33", marginBottom: "8px" });

  const title = document.createElement("h3");
  title.textContent = "Գործողությունը արգելված է";
  Object.assign(title.style, { margin: "0 0 6px 0", color: "#b33", fontSize: "18px" });

  const reason = document.createElement("div");
  reason.id = "protectReason";
  Object.assign(reason.style, { fontWeight: 600, marginBottom: "8px", color: "#333" });

  const info = document.createElement("div");
  info.id = "protectInfo";
  Object.assign(info.style, { fontSize: "14px", color: "#444", lineHeight: "1.4", marginBottom: "10px" });
  info.innerHTML = '<i>Տեղը ճշտվում է (GPS)...</i>';

  const okBtn = document.createElement("button");
  okBtn.textContent = "Հասկացա";
  Object.assign(okBtn.style, {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600
  });

  okBtn.addEventListener("click", () => {
    modal.style.display = "none";
    try { audio.pause(); audio.currentTime = 0; } catch(e){}
  });

  card.append(icon, title, reason, info, okBtn);
  modal.appendChild(card);
  document.body.appendChild(modal);

  // Add simple slideDown keyframes
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDownModal {
      from { transform: translateY(-18px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // ========================
  // show modal + try GPS and display results
  // ========================
  async function showProtectModalWithGPS(text) {
    reason.textContent = text || "Արգելված գործողություն";
    info.innerHTML = "<i>Տեղը ճշտվում է (GPS) — խնդրում ենք թույլատրել տեղորոշման հարցումը...</i>";
    modal.style.display = "flex";

    // start audio (try play; browsers may block autoplay until user interacts; we'll ignore errors)
    try { audio.currentTime = 0; audio.play().catch(()=>{}); } catch(e){}

    // Try GPS
    const gpsRes = await tryGetGPS(8000);
    if (gpsRes.ok) {
      // reverse geocode
      const rg = await reverseGeocode(gpsRes.lat, gpsRes.lon);
      if (rg.ok) {
        info.innerHTML =
          `<b>Տեղ:</b> ${escapeHtml(rg.place)}<br>` +
          `<b>Կոորդինատներ:</b> ${gpsRes.lat.toFixed(6)}, ${gpsRes.lon.toFixed(6)}<br>` +
          `<small>Ըստ GPS (ճշգրիտ)</small>`;
        return;
      } else {
        info.innerHTML =
          `<b>Կոորդինատներ:</b> ${gpsRes.lat.toFixed(6)}, ${gpsRes.lon.toFixed(6)}<br>` +
          `<small>Բայց reverse-geocode-ը ձախողվեց: ${escapeHtml(rg.reason || "")}</small>`;
        return;
      }
    } else {
      // GPS not available or denied
      info.innerHTML =
        `<b>GPS չի մատչելի կամ մերժվել է:</b> ${escapeHtml(gpsRes.reason || "մերժում/ոչ-HTTPS")}<br>` +
        `<small>Խնդրում ենք թույլատրել տեղորոշումը կամ ստուգել կապը։</small>`;
      return;
    }
  }

  // small escape
  function escapeHtml(s) {
    if (!s && s !== 0) return "";
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  // ========================
  // Global blocking handlers
  // - allow actions if target is span[onclick] (your copy buttons)
  // ========================
  function isAllowedTarget(el) {
    try {
      return !!(el && el.closest && el.closest("span[onclick]"));
    } catch (e) {
      return false;
    }
  }

  // block context menu
  document.addEventListener("contextmenu", function (e) {
    if (!isAllowedTarget(e.target)) {
      e.preventDefault();
      showProtectModalWithGPS("Աջ կոճակը արգելված է։");
    }
  }, true);

  // block selectstart
  document.addEventListener("selectstart", function (e) {
    if (!isAllowedTarget(e.target)) {
      e.preventDefault();
      showProtectModalWithGPS("Տեքստի նշումը արգելված է։");
    }
  }, true);

  // block drag
  document.addEventListener("dragstart", function(e) {
    if (!isAllowedTarget(e.target)) {
      e.preventDefault();
      showProtectModalWithGPS("Ձևափոխումը արգելված է։");
    }
  }, true);

  // block clipboard events
  ["copy","cut","paste"].forEach(evt=>{
    document.addEventListener(evt, function(e){
      if (!isAllowedTarget(e.target)) {
        e.preventDefault();
        showProtectModalWithGPS(`Clipboard գործողությունը (${evt}) արգելված է։`);
      }
    }, true);
  });

  // block key combos
  document.addEventListener("keydown", function (e) {
    const key = (e.key || "").toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    // F1-F12
    if (e.keyCode >= 112 && e.keyCode <= 123) {
      if (!isAllowedTarget(e.target)) {
        e.preventDefault();
        showProtectModalWithGPS("F1–F12 կոճակները արգելված են։");
      }
      return;
    }
    // Ctrl combos
    if (ctrl && ["a","c","v","s","u","p"].includes(key)) {
      if (!isAllowedTarget(e.target)) {
        e.preventDefault();
        showProtectModalWithGPS(`Ctrl + ${key.toUpperCase()} արգելված է։`);
      }
    }
  }, true);

  // Developer-tools detector (best-effort)
  (function devtoolsDetect(){
    const img = new Image();
    Object.defineProperty(img, 'id', {
      get: function() {
        // opened console will trigger this getter in some cases
        showProtectModalWithGPS("Developer Tools բացվել է — մուտքը արգելված է։");
      }
    });
    console.log('%c', img);
  })();

  // ========================
  // Expose helper to call elsewhere
  // ========================
  window.showProtectModalWithGPS = showProtectModalWithGPS;

  // Optional: auto-hook old showProtectModal calls by alias
  window.showProtectModal = function (text) { showProtectModalWithGPS(text); };

  // Optional debug export (comment out in production)
  // window._protectDebug = { tryGetGPS, reverseGeocode };

})();


