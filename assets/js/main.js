
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
  // --- Ստանում ենք IP և գտնվելու վայրը ---
  let userInfo = { ip: "անհայտ", city: "անհայտ", country: "անհայտ" };

  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      userInfo.ip = data.ip;
      userInfo.city = data.city;
      userInfo.country = data.country_name;
    })
    .catch(() => {
      console.warn("Չհաջողվեց ստանալ IP հասցեն։");
    });

  // --- Արգելող ձայն ---
  const audio = document.createElement("audio");
  audio.src ="assets/audio/Alarm-Sound.mp3";
  audio.loop = true;
  audio.volume = 1;

  // --- Մոդալ պաշտպանություն ---
  const modal = document.createElement("div");
  modal.id = "protectModal";
  Object.assign(modal.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "none",
    alignItems: "flex-start",
    justifyContent: "center",
    zIndex: "99999",
    fontFamily: "Arial, sans-serif",
    paddingTop: "30px",
    backdropFilter: "blur(2px)",
    transition: "opacity 0.5s ease",
  });

  const card = document.createElement("div");
  Object.assign(card.style, {
    background: "#fff",
    borderRadius: "12px",
    padding: "5px 7.5px",
    textAlign: "center",
    maxWidth: "480px",
    width: "90%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    animation: "slideDown 0.5s ease",
  });

  const icon = document.createElement("div");
  Object.assign(icon.style, {
    fontSize: "128px",
    color: "#b33",
    marginBottom: "5px",
  });
  icon.textContent = "⚠️";

  const title = document.createElement("h2");
  title.textContent = "Գործողությունը արգելված է";
  Object.assign(title.style, {
    margin: "0 0 10px 0",
	fontWeight: "bolder",
    color: "#b33",
  });

  const reason = document.createElement("p");
  reason.id = "pmReason";
  Object.assign(reason.style, {
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  });

  const msg = document.createElement("p");
  msg.textContent =
    "Կայքի բովանդակությունը պաշտպանված է։ Խախտումը գրանցվել է համակարգում։";

  const info = document.createElement("div");
  info.id = "userInfo";
  info.style.marginTop = "10px";
  info.style.fontSize = "14px";
  info.style.color = "#444";

  const btn = document.createElement("button");
  btn.textContent = "Հասկացա";
  Object.assign(btn.style, {
    padding: "8px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#333",
    color: "#fff",
    cursor: "pointer",
    marginTop: "15px",
  });
  btn.onclick = function () {
    modal.style.display = "none";
    audio.pause();
    audio.currentTime = 1;
  };

  card.append(icon, title, reason, msg, info, btn);
  modal.appendChild(card);
  document.body.appendChild(modal);

  function showProtectModal(text) {
    document.getElementById("pmReason").textContent =
      text || "Արգելված գործողություն";

    const time = new Date().toLocaleString("hy-AM");
    document.getElementById(
      "userInfo"
    ).innerHTML = `<b>IP:</b> ${userInfo.ip}<br><b>Քաղաք:</b> ${userInfo.city}, ${userInfo.country}<br><b>Ժամ:</b> ${time}`;

    modal.style.display = "flex";
    audio.play().catch(() => {});
  }

  // --- Արգելքներ ---
  document.addEventListener("contextmenu", (e) => {
    if (!e.target.closest("span[onclick]")) {
      e.preventDefault();
      showProtectModal("Աջ կոճակը արգելված է։");
    }
  });

  ["selectstart", "dragstart", "cut", "paste"].forEach((evt) => {
    document.addEventListener(evt, (e) => {
      if (!e.target.closest("span[onclick]")) {
        e.preventDefault();
        showProtectModal("Այս գործողությունը արգելված է։");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    const key = (e.key || "").toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    if (e.keyCode >= 112 && e.keyCode <= 123) {
      e.preventDefault();
      showProtectModal("F1–F12 կոճակները արգելված են։");
      return false;
    }

    if (ctrl && ["a", "c", "v", "s", "p"].includes(key)) {
      if (!e.target.closest("span[onclick]")) {
        e.preventDefault();
        showProtectModal(`Ctrl + ${key.toUpperCase()} արգելված է։`);
        return false;
      }
    }
  });

  // --- Developer Tools հայտնաբերում ---
  const devDetector = new Image();
  Object.defineProperty(devDetector, "id", {
    get: function () {
      showProtectModal("Developer Tools բացվել է — մուտքը արգելված է։");
    },
  });
  console.log("%c", devDetector);

  // --- Animation ---
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDown {
      from { transform: translateY(-30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
})();

