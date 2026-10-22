(() => {
  "use strict";

  const IMG = "images/";
  const PIECES = [
    {
      id: "lafayette-cream-leather", maker: "Heron CA", line: "Archive", category: "Layers",
      title: "Lafayette 148 · Cream Leather", price: 2450, cut: "heron-lafayette-leather-cutout-v1.webp", photo: "heron-lafayette-leather.webp",
      material: "Leather with a soft crackle finish, as listed. Verified by the atelier before sale.",
      note: "An open-front leather layer with a pale, textured surface. Cropped sleeve, clean front edge.",
      fit: "Sleeve, body and length can be finished to you."
    },
    {
      id: "tahari-belted-leather", maker: "Heron CA", line: "Archive", category: "Layers",
      title: "Elie Tahari · Belted Leather", price: 2800, cut: "heron-tahari-v2.webp", photo: "heron-tahari-leather.webp",
      material: "Lambskin leather, as listed. Verified by the atelier before sale.",
      note: "A belted leather jacket with a wide lapel and a quiet, tonal sand colour.",
      fit: "Waist and sleeve can be finished to you."
    },
    {
      id: "theory-crosshatch-silk", maker: "Heron CA", line: "Archive", category: "Dresses",
      title: "Theory · Crosshatch Silk", price: 1850, cut: "heron-theory-silk-cutout-v1.webp", photo: "heron-theory-silk.webp",
      material: "Silk, as listed. Composition confirmed by the atelier before sale.",
      note: "A restrained printed sheath with a clean, elongated line and a corded waist.",
      fit: "Length and waist can be finished to you."
    },
    {
      id: "iwona-leather-overall", maker: "Iwona Ash", line: "Designer", category: "Dresses",
      title: "The Leather Overall", price: 2400, cut: "iwona-leather-overall-cutout-v1.webp", photo: "iwona-leather-overall.webp",
      material: "Italian sheepskin, as listed by Iwona Ash.",
      note: "A sculptural leather overall dress from Iwona Ash. Worn alone or layered.",
      fit: "Finished to your measurements by Iwona Ash."
    },
    {
      id: "sintesis-colourblock-silk", maker: "Heron CA", line: "Archive", category: "Tops",
      title: "Sintesis · Colourblock Silk", price: 850, cut: "heron-silk-colour-cutout-v1.webp", photo: "heron-silk-colour.webp",
      material: "Silk blend, as listed. Composition confirmed by the atelier before sale.",
      note: "Navy over ivory. A sleeveless silk top with a hidden placket.",
      fit: "Length and body can be finished to you."
    },
    {
      id: "tasso-elba-silk-linen", maker: "Heron CA", line: "Archive", category: "Tops",
      title: "Tasso Elba · Silk & Linen", price: 750, cut: "heron-silk-linen-cutout-v1.webp", photo: "heron-silk-linen.webp",
      material: "Silk and linen, as listed. Composition confirmed by the atelier before sale.",
      note: "A loose botanical print camp shirt. Easy, open and generous.",
      fit: "Body and sleeve can be finished to you."
    }
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const main = $("#main");
  const money = n => "$" + n.toLocaleString("en-US");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- pieces ---------- */
  const card = p => `
    <a class="card rv" href="#/piece/${p.id}" aria-label="${esc(p.title)}, ${money(p.price)}">
      <div class="ph">

        <img class="main" src="${IMG + p.cut}" alt="" loading="lazy" decoding="async">
        <img class="alt" src="${IMG + p.photo}" alt="" loading="lazy" decoding="async">
      </div>
      <div class="meta">
        <div><div class="who">${esc(p.maker)} / ${p.line}</div><div class="t">${esc(p.title.split(" · ").pop())}</div></div>
        <div class="p">${money(p.price)}<small>Piece price</small></div>
      </div>
    </a>`;

  /* ---------- sections ---------- */
  const hero = () => `
    <section class="hero" aria-label="Prova">
      <div class="hero-in">
        <p class="eyebrow">Archive & independent design</p>
        <h1 class="display">Made to you.</h1>
        <p class="lead">Considered pieces. A personal fit.<br>A wardrobe that could only be yours.</p>
        <div class="hero-ctas"><a class="btn" href="#/edit">Explore the Edit <span aria-hidden="true">↗</span></a></div>
      </div>
      <figure class="hero-image"><img src="${IMG}campaign-ivory.webp" alt="A woman in an ivory linen ensemble against stone architecture" fetchpriority="high"><figcaption class="concept">Campaign concept</figcaption></figure>
    </section>`;

  const definition = () => `
    <section class="sec"><div class="wrap def">
      <div class="word rv">prova<i>(n.)</i></div>
      <div class="rv">
        <p class="eyebrow">Italian for the fitting</p>
        <p class="h2" style="margin-top:16px">The moment a piece of clothing stops being a size and starts being yours.</p>
      </div>
    </div></section>`;

  const ways = () => `
    <section class="sec" style="padding-top:0"><div class="wrap">
      <div class="ways">
        <div class="way rv">
          <span class="num">01</span>
          <h2 class="h2">As it is</h2>
          <p class="lead">Every piece is chosen, inspected and photographed by us. Buy it exactly as it arrived.</p>
          <span class="tag">Open to everyone</span>
        </div>
        <div class="way rv">
          <span class="num">02</span>
          <h2 class="h2">Made to you</h2>
          <p class="lead">We finish the piece to your measurements and your posture before it ever reaches you. Line, length, balance.</p>
          <span class="tag">Prova Club members</span>
        </div>
      </div>
    </div></section>`;

  const editTeaser = () => `
    <section class="sec edit-selection"><div class="wrap">
      <div class="edit-head">
        <div><p class="eyebrow">The Edit</p><h2 class="h1" style="margin-top:12px">A considered selection</h2></div>
        <a class="link" href="#/edit">See all pieces</a>
      </div>
      <div class="grid">${PIECES.slice(0, 3).map(card).join("")}</div>
    </div></section>`;

  const atelier = (full) => `
    <section class="sec" id="atelier-sec"><div class="wrap split">
      <div class="media tall rv"><img src="${IMG}campaign-atelier.webp" alt="Hands shaping fabric on a person during a fitting" loading="lazy"><span class="concept">Campaign concept</span></div>
      <div class="stack rv">
        <p class="eyebrow">The atelier</p>
        <h2 class="h1">Venice Beach, by appointment.</h2>
        <p class="lead">Prova is a partnership between Heron CA, an archive of considered pre-owned and new-with-tags pieces, and the designer Iwona Ash. Our atelier sits on the Venice boardwalk.</p>
        ${full ? `<p class="lead">Every piece that is made to you is finished by hand, checked against your measurement card, pressed and boxed with a note from the person who finished it.</p>` : ""}
        <p><a class="link" href="#/atelier">Visit the atelier</a></p>
      </div>
    </div></section>`;

  const designer = () => `
    <section class="sec" style="padding-top:0"><div class="wrap split rev">
      <div class="media tall rv" style="max-width:520px;justify-self:end"><img src="${IMG}iwona-portrait.webp" alt="Portrait of designer Iwona Ash" loading="lazy" style="filter:grayscale(1)"></div>
      <div class="stack rv">
        <p class="eyebrow">Designer</p>
        <h2 class="h1">Iwona Ash</h2>
        <p class="lead">Sculptural, honest garments in leather and natural fabrics. At Prova, Iwona's pieces can be finished to your measurements by Iwona herself.</p>
        <p><a class="link" href="#/edit?line=Designer">Iwona's pieces</a></p>
      </div>
    </div></section>`;

  const clubBlock = (full) => `
    <section class="sec club dark" id="club-sec"><div class="wrap">
      <div class="split" style="align-items:end">
        <div class="stack rv">
          <p class="eyebrow">Prova Club</p>
          <h2 class="h1">The luxury of being understood.</h2>
        </div>
        <div class="stack rv">
          <p class="lead">A wardrobe, personally considered. One measurement profile, a personal stylist who knows it, and fittings throughout the year.</p>
          ${full ? "" : `<p><a class="btn btn-light" href="#/club">Become a member</a></p>`}
        </div>
      </div>
      <div class="perks">
        <div class="perk rv"><div class="k">01</div><p class="h3">Fittings included</p><p class="muted" style="margin-top:8px">A set number of made-to-you fittings every year.</p></div>
        <div class="perk rv"><div class="k">02</div><p class="h3">We come to you</p><p class="muted" style="margin-top:8px">Home visits across the Westside, at no charge.</p></div>
        <div class="perk rv"><div class="k">03</div><p class="h3">First to see</p><p class="muted" style="margin-top:8px">New pieces 48 hours before anyone else.</p></div>
        <div class="perk rv"><div class="k">04</div><p class="h3">Your stylist</p><p class="muted" style="margin-top:8px">One person who knows your wardrobe and your shape.</p></div>
      </div>
    </div></section>`;

  const privateBlock = (full) => `
    <section class="private dark" id="private-sec">
      <img src="${IMG}campaign-charcoal.webp" alt="A woman in a black sculptural garment walking through an architectural courtyard" loading="lazy">
      <div class="wrap"><div class="private-in">
        <p class="eyebrow rv">Private Fitting · By invitation</p>
        <h2 class="h1 rv" style="margin:16px 0 20px">Your designer comes to you.</h2>
        <p class="lead rv">For a full wardrobe, a day of its own. Your designer travels to your home or hotel anywhere in the United States or Canada, with pieces and fabrics chosen for you, and every measure is settled in person.</p>
        ${full ? "" : `<p class="rv" style="margin-top:28px"><a class="btn btn-light" href="#/private">About Private Fitting</a></p>`}
      </div></div>
      <span class="concept">Campaign concept</span>
    </section>`;

  const steps = () => `
    <section class="sec"><div class="wrap">
      <p class="eyebrow rv">How made to you works</p>
      <h2 class="h1 rv" style="margin:12px 0 clamp(32px,5vw,56px);max-width:14em">From a piece you love to a piece that is yours.</h2>
      <div class="steps">
        <div class="step rv"><p class="h3">Choose</p><p class="muted" style="margin-top:8px">Pick a piece from the Edit, online or in Venice.</p></div>
        <div class="step rv"><p class="h3">Measure once</p><p class="muted" style="margin-top:8px">In the atelier, at home, or on a video call with your stylist.</p></div>
        <div class="step rv"><p class="h3">Finished by hand</p><p class="muted" style="margin-top:8px">Made to your measurements, then checked and pressed.</p></div>
        <div class="step rv"><p class="h3">Delivered</p><p class="muted" style="margin-top:8px">Signed for and insured. Hand delivered in Los Angeles.</p></div>
      </div>
    </div></section>`;

  /* ---------- views ---------- */
  const views = {
    home() {
      return hero() + editTeaser() + definition() + atelier(false) + clubBlock(false);
    },

    edit(params) {
      const line = params.get("line") || "All";
      const category = params.get("category") || "All";
      const list = PIECES.filter(p => (line === "All" || p.line === line) && (category === "All" || p.category === category));
      const chips = (values, key, selected) => values.map(v => `<button class="chip" data-filter="${key}" data-value="${v}" aria-pressed="${selected === v}">${v === "All" ? "All" : v}</button>`).join("");
      return `<section class="sec edit-page"><div class="wrap">
        <div class="collection-title"><p class="eyebrow">The Edit</p><h1 class="h1">Chosen one by one.</h1><p class="lead">Archive finds and independent design. Available as they are, or made to you.</p></div>
        <div class="filter-bar"><div class="filter-groups"><div class="chips" role="group" aria-label="Collection">${chips(["All", "Archive", "Designer"], "line", line)}</div><div class="chips" role="group" aria-label="Category">${chips(["All", "Layers", "Dresses", "Tops"], "category", category)}</div></div><p class="fine" role="status">${list.length} pieces</p></div>
        <div class="grid">${list.length ? list.map(card).join("") : `<div class="empty-state"><h2 class="h2">No pieces in this selection.</h2><p>Explore another category, or return to the full Edit.</p><a class="link" href="#/edit">View all pieces</a></div>`}</div>
      </div></section>`;
    },

    piece(params, id) {
      const p = PIECES.find(x => x.id === id);
      if (!p) return views.notfound();
      const more = PIECES.filter(x => x.id !== id).slice(0, 3);
      return `
        <section class="sec piece"><div class="wrap">
          <a class="back" href="#/edit">← The Edit</a>
          <div class="piece-grid">
            <div class="gallery">
              <div class="g cut"><img src="${IMG + p.cut}" alt="${esc(p.title)}"></div>
              <div class="g"><img src="${IMG + p.photo}" alt="${esc(p.title)} on a form in the Heron CA store" loading="lazy"></div>
              <div class="fit-detail"><p class="eyebrow">The personal fit</p><h2 class="h2">Line. Length. Balance.</h2><p>${esc(p.fit)}</p><a class="link" href="#/club">Discover Prova Club</a></div>
            </div>
            <div class="info">
              <p class="eyebrow">${esc(p.maker)} · ${esc(p.line)}</p>
              <h1 class="h1" style="margin:12px 0 14px">${esc(p.title.split(" · ").pop())}</h1>
              <p class="lead">${esc(p.note)}</p>
              <div class="opts" role="radiogroup" aria-label="How would you like it">
                <button class="opt" role="radio" aria-checked="true" data-opt="asis">
                  <span class="dot"></span>
                  <span><span class="ot">As it is</span><span class="od" style="display:block">The piece, as selected. No fitting included.</span></span>
                  <span class="op">${money(p.price)}</span>
                </button>
                <button class="opt" role="radio" aria-checked="false" tabindex="-1" data-opt="made">
                  <span class="dot"></span>
                  <span><span class="ot">Made to you</span><span class="od" style="display:block">${esc(p.fit)} Club members use a fitting from their membership. Non-members may arrange a fitting, charged separately.</span></span>
                  <span class="op">${money(p.price)}<small>+ fitting</small></span>
                </button>
              </div>
              <button class="btn" style="width:100%" data-reserve>Reserve this piece</button>
              <p class="fine" style="margin-top:12px" id="optnote">Preview price. Online ordering opens soon; no payment is collected.</p>
              <dl class="specs">
                <div><dt>Maker</dt><dd>${esc(p.maker)}</dd></div>
                <div><dt>Category</dt><dd>${esc(p.category)}</dd></div>
                <div><dt>Material</dt><dd>${esc(p.material)}</dd></div>
                <div><dt>Made to you</dt><dd>5 to 14 days, finished in Venice</dd></div>
                <div><dt>Delivery</dt><dd>Signed for and insured. Hand delivered in Los Angeles.</dd></div>
              </dl>
            </div>
          </div>
        </div></section>
        <section class="sec" style="padding-top:0"><div class="wrap">
          <div class="edit-head"><h2 class="h2">You may also like</h2><a class="link" href="#/edit">See all</a></div>
          <div class="grid">${more.map(card).join("")}</div>
        </div></section>`;
    },

    club() {
      return `
        <section class="sec club dark" style="padding-top:160px"><div class="wrap">
          <div class="split" style="align-items:start">
            <div class="stack">
              <p class="eyebrow">Prova Club · Los Angeles</p>
              <h1 class="h1">A wardrobe, personally considered.</h1>
              <p class="lead">Members can have any piece made to them. Your measurement profile is taken once and kept, a personal stylist looks after you, and fittings are part of the year.</p>
            </div>
            <div class="stack">
              <div class="plans" role="radiogroup" aria-label="Membership">
                <button class="plan" role="radio" aria-checked="true" tabindex="0" data-plan="month"><span class="muted">Monthly</span><span class="pp">$250</span><span class="muted">per month</span></button>
                <button class="plan" role="radio" aria-checked="false" tabindex="-1" data-plan="year"><span class="muted">Yearly</span><span class="pp">$2,500</span><span class="muted">per year, two months included</span></button>
              </div>
              <form class="form" id="join" novalidate style="margin-top:20px">
                <div class="field"><label for="jn">Name</label><input id="jn" name="name" autocomplete="name" required></div>
                <div class="field"><label for="je">Email</label><input id="je" name="email" type="email" autocomplete="email" required></div>
                <div class="field"><label for="jc">Where are you based</label>
                  <select id="jc" name="city"><option>Los Angeles, Westside</option><option>Los Angeles, other</option><option>Elsewhere, join the waitlist</option></select></div>
                <button class="btn btn-light" type="submit" style="margin-top:8px">Request membership</button>
                <p class="fine" >Preview pricing. This form does not save your details or collect payment. Membership opens in Los Angeles first.</p>
              </form>
            </div>
          </div>
          <div class="perks">
            <div class="perk"><div class="k">01</div><p class="h3">Fittings included</p><p class="muted" style="margin-top:8px">A set number of made-to-you fittings every year. Additional work at member rates.</p></div>
            <div class="perk"><div class="k">02</div><p class="h3">We come to you</p><p class="muted" style="margin-top:8px">Home visits across the Westside, at no charge.</p></div>
            <div class="perk"><div class="k">03</div><p class="h3">First to see</p><p class="muted" style="margin-top:8px">New pieces 48 hours before anyone else.</p></div>
            <div class="perk"><div class="k">04</div><p class="h3">Your stylist</p><p class="muted" style="margin-top:8px">One person who knows your wardrobe and your shape.</p></div>
          </div>
        </div></section>
        <section class="sec"><div class="wrap split">
          <div class="stack">
            <p class="eyebrow">Your measurement profile</p>
            <h2 class="h1">Measured once. Remembered.</h2>
            <p class="lead">Your profile is private to you and your stylist. It is never shared, and never used for anything other than making your pieces.</p>
          </div>
          <ul class="list">
            <li><span class="h3">In the atelier</span><span class="muted">Venice Beach, by appointment. About forty minutes.</span></li>
            <li><span class="h3">At home</span><span class="muted">Your stylist visits you anywhere on the Westside.</span></li>
            <li><span class="h3">On a video call</span><span class="muted">Guided by your stylist, with a garment you already love.</span></li>
          </ul>
        </div></section>` + steps();
    },

    private() {
      return privateBlock(true) + `
        <section class="sec"><div class="wrap split">
          <div class="stack">
            <p class="eyebrow">What the day holds</p>
            <h2 class="h1">One day, entirely yours.</h2>
            <p class="lead">Private Fitting is offered by invitation to members building a wardrobe with us. Your stylist will let you know when it is available to you.</p>
          </div>
          <ul class="list">
            <li><span class="h3">Chosen for you</span><span class="muted">Your designer arrives with pieces and fabrics selected for you in advance.</span></li>
            <li><span class="h3">Settled in person</span><span class="muted">Every measure and every line is decided with you, in the room.</span></li>
            <li><span class="h3">Nothing to arrange</span><span class="muted">Travel is ours to organise. It never appears on your bill.</span></li>
            <li><span class="h3">Followed through</span><span class="muted">A video call when your pieces arrive, and a final touch at our next visit if needed.</span></li>
            <li><span class="h3">Where</span><span class="muted">Anywhere in the United States and Canada, planned at least two weeks ahead.</span></li>
          </ul>
        </div></section>`;
    },

    atelier() {
      return `<div style="height:72px"></div>` + atelier(true) + designer() + steps();
    },

    notfound() {
      return `<section class="sec" style="padding-top:180px;min-height:70vh"><div class="wrap"><h1 class="h1">This piece has found its person.</h1><p class="lead" style="margin:16px 0 28px">It may have been sold, or the link has changed.</p><a class="btn" href="#/edit">Back to the Edit</a></div></section>`;
    }
  };

  /* ---------- router ---------- */
  const toast = (msg) => {
    const t = $("#toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("on"), 3800);
  };

  let io;
  const reveal = () => {
    io && io.disconnect();
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".rv").forEach(e => e.classList.add("in")); return; }
    io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".rv").forEach(e => io.observe(e));
  };

  let hasRendered = false;
  let current = "home";

  const route = () => {
    if (location.hash === "#main") { main.focus(); return; }
    const filterUpdate = hasRendered && current === "edit" && location.hash.startsWith("#/edit?");
    const activeFilter = document.activeElement?.dataset.filter;
    const activeValue = document.activeElement?.dataset.value;
    const previousScroll = window.scrollY;
    const raw = location.hash.replace(/^#\/?/, "");
    const [path, qs] = raw.split("?");
    const parts = path.split("/").filter(Boolean);
    const name = parts[0] || "home";
    const params = new URLSearchParams(qs || "");
    const view = views[name] || views.notfound;
    current = name;
    main.innerHTML = view(params, parts[1]);
    document.querySelectorAll("[data-nav]").forEach(a => {
      if (a.dataset.nav === name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    setMenu(false);
    const titles = { edit: "The Edit", club: "Prova Club", private: "Private Fitting", atelier: "Atelier" };
    const p = name === "piece" && PIECES.find(x => x.id === parts[1]);
    document.title = p ? `${p.title.split(" · ").pop()} · Prova` : titles[name] ? `${titles[name]} · Prova` : "Prova · Made to you";
    window.scrollTo({ top: filterUpdate ? previousScroll : 0, behavior: "instant" });
    const filterTarget = filterUpdate && [...main.querySelectorAll(".chip")].find(el => el.dataset.filter === activeFilter && el.dataset.value === activeValue);
    if (filterTarget) filterTarget.focus({ preventScroll: true });
    else if (hasRendered) main.focus({ preventScroll: true });
    hasRendered = true;
    enhanceImages();
    onScroll();
    reveal();
  };

  /* ---------- interactions ---------- */
  main.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (chip) {
      const params = new URLSearchParams(location.hash.split("?")[1] || "");
      if (chip.dataset.value === "All") params.delete(chip.dataset.filter); else params.set(chip.dataset.filter, chip.dataset.value);
      location.hash = "#/edit" + (params.size ? "?" + params : ""); return;
    }
    const opt = e.target.closest(".opt");
    if (opt) {
      selectRadio(opt);
      $("#optnote").textContent = opt.dataset.opt === "made"
        ? "The piece price excludes fitting. Club members use their fitting allowance; non-members are charged separately. Your stylist confirms the details before work begins."
        : "Preview price. Online ordering opens soon; no payment is collected.";
      return;
    }
    const plan = e.target.closest(".plan");
    if (plan) { selectRadio(plan); return; }
    if (e.target.closest("[data-reserve]")) { toast("Online ordering opens soon. Until then, every piece can be seen in Venice by appointment."); }
  });
  main.addEventListener("submit", e => {
    if (e.target.id !== "join") return;
    e.preventDefault();
    toast("Thank you. Membership requests open at launch; this preview does not store your details.");
  });

  const bar = $("#bar");
  const menu = $("#menu");
  const nav = $("#nav");
  const mobile = matchMedia("(max-width:820px)");
  const onScroll = () => bar.classList.add("solid");
  const setMenu = open => {
    document.body.classList.toggle("menu-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.inert = mobile.matches && !open;
    main.inert = open;
    $(".foot").inert = open;
  };
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; setMenu(open); if (open) nav.querySelector("a").focus(); });
  mobile.addEventListener("change", () => setMenu(false));
  document.addEventListener("keydown", e => {
    if (!document.body.classList.contains("menu-open")) return;
    if (e.key === "Escape") { setMenu(false); menu.focus(); }
    if (e.key === "Tab") {
      const targets = [$(".bar .mark"), ...nav.querySelectorAll("a"), menu];
      const i = targets.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); menu.focus(); }
      else if (!e.shiftKey && i === targets.length - 1) { e.preventDefault(); targets[0].focus(); }
    }
  });
  const selectRadio = selected => selected.parentElement.querySelectorAll('[role="radio"]').forEach(el => {
    el.setAttribute("aria-checked", String(el === selected)); el.tabIndex = el === selected ? 0 : -1;
  });
  main.addEventListener("keydown", e => {
    const radio = e.target.closest('[role="radio"]');
    if (!radio || !["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const radios = [...radio.parentElement.querySelectorAll('[role="radio"]')];
    let index = radios.indexOf(radio) + (["ArrowUp", "ArrowLeft"].includes(e.key) ? -1 : 1);
    if (e.key === "Home") index = 0; if (e.key === "End") index = radios.length - 1;
    const next = radios[(index + radios.length) % radios.length]; next.click(); next.focus();
  });
  const enhanceImages = () => main.querySelectorAll("img").forEach(img => {
    const source = img.getAttribute("src");
    if (!source?.endsWith(".webp")) return;
    const base = source.slice(0, -5);
    const filename = source.split("/").pop();
    const width = filename.startsWith("campaign-") ? 1536 : filename === "iwona-portrait.webp" ? 452 : filename === "iwona-leather-overall.webp" ? 670 : filename === "heron-tahari-leather.webp" ? 1000 : filename.includes("cutout") || filename === "heron-tahari-v2.webp" ? 1086 : 1050;
    img.srcset = [width > 480 && `${base}-480.webp 480w`, width > 960 && `${base}-960.webp 960w`, `${source} ${width}w`].filter(Boolean).join(", ");
    img.sizes = img.closest(".card") ? "(max-width: 560px) 46vw, (max-width: 1000px) 46vw, 30vw" : "(max-width: 820px) 100vw, 60vw";
    img.decoding = "async";
  });

  window.addEventListener("hashchange", route);
  route();
})();
