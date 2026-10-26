/* Next Keeper preview: sample residents, no live inventory yet. */
(function () {
  "use strict";

  var RESIDENTS = [
    {
      no: "001", nick: "Salix", latin: "the willow", name: "The Fog Line Pullover", img: "img/nk-001.webp", src: "iwona-pearl-v2", hanger: "M275 500L542 411L810 500ZM542 411V373A42 42 0 1 0 528 291", type: "Tops",
      breed: "Grey linen pullover with drawstring hem", size: "M, boxy",
      temperament: "Soft, loyal, gets better with every wash", health: "Very good. Natural slub in the weave",
      arrived: "2026-09-14", fee: 280, status: "waiting",
      story: [
        "They call me Salix, after the willow. I bend, I don't break.",
        "I spent years folded in a coastal closet. Someone kept me well. I don't remember their name, only their coffee.",
        "I deserve salt air and a person who rolls my sleeves twice.",
        "I've been on this hanger long enough. Be my next keeper."
      ]
    },
    {
      no: "002", nick: "Lavandula", latin: "the lavender", name: "The Salt Meadow Dress", img: "img/nk-002.webp", src: "iwona-french-v2", hanger: "M321 195L540 74L758 195ZM540 74V23A57 57 0 1 0 520 -88", type: "Dresses",
      breed: "Tiered linen dress with a tie belt", size: "S to M, easy",
      temperament: "Calm, sun-seeking, never in a hurry", health: "Excellent",
      arrived: "2026-10-13", fee: 360, status: "new",
      story: [
        "I'm Lavandula. I grew up somewhere dry and bright and I still smell like it.",
        "I spent one long summer in a field town nobody can find on a map. I came back three shades warmer.",
        "I deserve a terrace, a late lunch and someone who doesn't check the time.",
        "I'm new here. Don't let me get used to the hanger."
      ]
    },
    {
      no: "003", nick: "Magnolia", latin: "the magnolia", name: "The Pier Light Jacket", img: "img/nk-003.webp", src: "heron-lafayette-leather-cutout-v1", type: "Jackets",
      breed: "Cropped cream jacket, designer label, est. 1990s", size: "M, cropped",
      temperament: "Polished, a little proud, secretly warm", health: "Good. Lining restored by hand",
      arrived: "2026-07-29", fee: 380, status: "longest",
      story: [
        "I'm Magnolia. My family always sat in the front row.",
        "I lived on a pier for a while, or near one. The lights stayed on all night and so did I.",
        "I deserve gallery openings and the occasional rainy cab.",
        "I'm the longest one here. Please."
      ]
    },
    {
      no: "004", nick: "Cupressus", latin: "the cypress", name: "The Harbor Shift", img: "img/nk-004.webp", src: "heron-silk-colour-cutout-v1", type: "Tops",
      breed: "Navy sleeveless shell with a white hem", size: "L, straight",
      temperament: "Crisp, organised, early to everything", health: "Excellent",
      arrived: "2026-10-06", fee: 220, status: "waiting",
      story: [
        "I'm Cupressus. Tall, dark and very punctual.",
        "I worked an office by the harbor. I watched boats instead of spreadsheets.",
        "I deserve a Friday that ends at the water.",
        "I'm being patient. Mostly."
      ]
    },
    {
      no: "005", nick: "Hibiscus", latin: "the hibiscus", name: "The Late Bonfire Shirt", img: "img/nk-005.webp", src: "heron-silk-linen-cutout-v1", hanger: "M388 194L579 73L770 194ZM579 73V22A57 57 0 1 0 559 -89", type: "Shirts",
      breed: "Floral print camp shirt, est. 1990s", size: "L, loose",
      temperament: "Loud, generous, first to dance", health: "Good. One button replaced to match",
      arrived: "2026-09-22", fee: 240, status: "adopted",
      story: [
        "I'm Hibiscus. I never learned to whisper.",
        "I've been to more beach fires than I can count. Some of the smoke is still in the story.",
        "I deserved a guitar nearby and sand in the pockets.",
        "I found my next keeper. Thank you for looking."
      ]
    },
    {
      no: "006", nick: "Quercus", latin: "the oak", name: "The Driftwood Trench", img: "img/nk-006.webp", src: "heron-tahari-v2", hanger: "M302 273L542 160L783 273ZM542 160V113A54 54 0 1 0 524 9", type: "Jackets",
      breed: "Belted sand trench jacket, est. 2000s", size: "M, tailored",
      temperament: "Rugged, loyal, softens with age", health: "Very good. Belt loops reinforced",
      arrived: "2026-09-01", fee: 340, status: "waiting",
      story: [
        "I'm Quercus, like the oak. I was built for weather.",
        "I spent a few winters up north and came south for good. I don't talk about the north.",
        "I deserve a collar turned up against the wind and a long coastal drive.",
        "I've been brave. Take me home."
      ]
    },
    {
      no: "007", nick: "Jasminum", latin: "the night jasmine", name: "The Small Hours Dress", img: "img/nk-007.webp", src: "heron-theory-silk-cutout-v1", type: "Dresses",
      breed: "Printed shift dress with a tie waist", size: "S, straight",
      temperament: "Shy at first, then the last to leave", health: "Excellent",
      arrived: "2026-10-22", fee: 300, status: "new",
      story: [
        "I'm Jasminum. I only really open up after midnight.",
        "I arrived a few days ago. I haven't told anyone where from.",
        "I deserve a slow song and a long walk home.",
        "I'm new. Say hello."
      ]
    },
    { no: "008", nick: "Betula", latin: "the birch", name: "On the way", teaser: "A pale linen coat coming down from the north.", img: "", type: "Queue", arrived: "2026-10-27", fee: 0, status: "queued", story: ["", "", "", ""] },
    { no: "009", nick: "Olea", latin: "the olive", name: "On the way", teaser: "A green summer dress that has seen a lot of terraces.", img: "", type: "Queue", arrived: "2026-10-28", fee: 0, status: "queued", story: ["", "", "", ""] },
    { no: "010", nick: "Tilia", latin: "the linden", name: "On the way", teaser: "A soft cardigan that smells faintly of tea.", img: "", type: "Queue", arrived: "2026-10-29", fee: 0, status: "queued", story: ["", "", "", ""] }
  ];

  var NOW = new Date();
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  RESIDENTS.forEach(function (r) {
    var a = new Date(r.arrived + "T12:00:00");
    r.arrivedAt = a;
    r.day = Math.floor((NOW - a) / 864e5);
    if (r.status !== "adopted") r.status = (r.day < 0 || !r.img) ? "queued" : (r.day < 7 ? "new" : "waiting");
    var m = (NOW.getFullYear() - a.getFullYear()) * 12 + NOW.getMonth() - a.getMonth() - (NOW.getDate() < a.getDate() ? 1 : 0);
    r.months = Math.max(0, m);
    r.anniversary = r.months > 0 && NOW.getDate() === a.getDate();
  });
  function ordinal(n) { return ["", "first", "second", "third", "fourth", "fifth", "sixth"][n] || (n + "th"); }
  function since(r) { return MONTHS[r.arrivedAt.getMonth()] + " " + r.arrivedAt.getFullYear(); }
  function residency(r) {
    if (r.status === "queued") return "Intake pending";
    if (r.anniversary) return r.months + (r.months === 1 ? " month" : " months") + " here today";
    if (r.status === "new") return r.day === 0 ? "Arrived today" : "New this week";
    return "Resident since " + since(r);
  }

  var STATUS = {
    waiting: "Waiting",
    new: "New resident",
    longest: "Longest resident",
    adopted: "Adopted",
    queued: "On the way"
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  /* the intake photo: every resident in the same corridor of hangers */
  function shot(r) {
    var piece = r.img
      ? '<span class="piece">' +
          (r.hanger ? '<svg class="piece-hanger" viewBox="0 0 1086 1448" aria-hidden="true"><path d="' + r.hanger + '"/></svg>' : '') +
          '<img src="' + r.img + '" alt="' + esc(r.nick + ", " + r.name) + '" loading="lazy" width="1086" height="1448">' +
        '</span>'
      : '<span class="empty-hanger" aria-hidden="true">' + hangerIcon("#9aa6a2", 3.4) + '</span>';
    return '<span class="shot">' + piece + (r.status === 'queued' ? '' : '<span class="archive-tag"><span>No. ' + r.no + '</span><i>' + esc(r.nick) + '</i><span>' + Math.max(0,r.day) + ' days here</span></span>') + '</span>';
  }

  /* ---------- drawn assets: logo, hanger icon and the corridor backdrop ---------- */
  var INK = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim(), VIOLET = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  var HANGER_PATH = "M200 104V90c0-10 16-16 16-34 0-18-13-28-26-28-14 0-22 10-22 22M193 98l14 5M193 106l14 5M200 110c-24 14-90 46-136 66-14 6-14 18 2 18h268c16 0 16-12 2-18-46-20-112-52-136-66";
  function hangerIcon(color, sw) {
    return '<svg viewBox="40 20 320 190" aria-hidden="true"><path d="' + HANGER_PATH + '" fill="none" stroke="' + color + '" stroke-width="' + (sw || 4.2) + '" stroke-linecap="round" stroke-linejoin="round"/><circle cx="168" cy="51" r="3.6" fill="' + color + '"/></svg>';
  }
  function logoSVG() {
    return '<svg viewBox="0 0 760 540" role="img" aria-label="Next Keeper, Home for Wayward Garments">' +
      '<defs><path id="nk-arc" d="M128 330a252 252 0 0 1 504 0"/></defs>' +
      '<text font-family="Jost,\'Work Sans\',sans-serif" font-weight="500" font-size="22" letter-spacing="7.5" fill="' + INK + '"><textPath href="#nk-arc" startOffset="50%" text-anchor="middle">HOME FOR WAYWARD GARMENTS</textPath></text>' +
      '<circle cx="148" cy="236" r="3.5" fill="' + VIOLET + '"/><circle cx="612" cy="236" r="3.5" fill="' + VIOLET + '"/>' +
      '<g transform="translate(220 84) scale(.8)"><path d="' + HANGER_PATH + '" fill="none" stroke="' + INK + '" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="168" cy="51" r="3.6" fill="' + INK + '"/></g>' +
      '<text x="380" y="380" text-anchor="middle" font-family="\'Cormorant Garamond\',Georgia,serif" font-style="italic" font-weight="500" font-size="112" fill="' + INK + '">Next Keeper</text>' +
      '<line x1="210" y1="424" x2="300" y2="424" stroke="' + VIOLET + '" stroke-width="1.6"/><line x1="460" y1="424" x2="550" y2="424" stroke="' + VIOLET + '" stroke-width="1.6"/>' +
      '<text x="380" y="430" text-anchor="middle" font-family="Jost,\'Work Sans\',sans-serif" font-size="16" letter-spacing="5" fill="' + VIOLET + '">EST. 2026</text>' +
      '<text x="380" y="478" text-anchor="middle" font-family="\'Cormorant Garamond\',Georgia,serif" font-style="italic" font-size="26" fill="' + INK + '" opacity=".8">Every story is true. Some more than others.</text>' +
      '</svg>';
  }

  function corridor() {
    var c = document.createElement("canvas"), W = 600, H = 750, k = W / 1200;
    c.width = W; c.height = H;
    var x = c.getContext("2d");
    if (!x) return;
    var VX = W / 2, VY = 560 * k, F = 760 * k, seed = 7;
    var rnd = function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    var P = function (wx, wy, z) { return [VX + wx / z * F, VY + wy / z * F]; };
    var fogC = [50, 64, 66];
    var mix = function (a, b, t) { return a.map(function (v, i) { return Math.round(v + (b[i] - v) * t); }); };
    var rgb = function (a) { return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"; };
    var fog = function (z) { return Math.min(1, Math.max(0, (z - 1) / 16)); };
    var line = function (a, b) { x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); };
    var g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#0e1416"); g.addColorStop(.37, "#24302f"); g.addColorStop(.38, "#2b3433"); g.addColorStop(1, "#121819");
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    var i, z;
    x.strokeStyle = "rgba(0,0,0,.28)"; x.lineWidth = .7;
    for (i = -14; i <= 14; i++) line(P(i * .32, 1.75, 1), P(i * .32, 1.75, 60));
    for (z = 1; z < 60; z *= 1.12) { x.strokeStyle = "rgba(0,0,0," + (.18 * (1 - fog(z))) + ")"; x.lineWidth = .5; line(P(-6, 1.75, z), P(6, 1.75, z)); }
    var rg = x.createRadialGradient(VX, VY + 20 * k, 2, VX, VY + 20 * k, 420 * k);
    rg.addColorStop(0, "rgba(226,242,236,.72)"); rg.addColorStop(.25, "rgba(180,210,204,.26)"); rg.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = rg; x.fillRect(0, 0, W, H);
    rg = x.createRadialGradient(VX, VY + 260 * k, 5, VX, VY + 260 * k, 520 * k);
    rg.addColorStop(0, "rgba(205,228,222,.18)"); rg.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = rg; x.fillRect(0, VY, W, H);
    var pal = [[96,108,112],[150,160,158],[62,72,90],[178,184,180],[84,96,88],[120,132,124],[200,204,198],[44,50,56],[96,86,120],[140,150,166],[70,90,96],[118,108,140]];
    function rack(side) {
      var rx = 1.55 * side, ry = -1.05, items = [], zz = .62;
      while (zz < 70) { var d0 = .045 + rnd() * .05; items.push([zz, d0]); zz += d0 + .012 + rnd() * .02; }
      items.reverse().forEach(function (it) {
        var z = it[0], d = it[1], len = 1.05 + rnd() * .85, col = pal[Math.floor(rnd() * pal.length)];
        var f = fog(z), lit = mix(col, fogC, f * .85);
        var out = rx + side * (.02 + rnd() * .06), inn = rx - side * (.18 + rnd() * .1);
        var z1 = z, z2 = z + d, zm = (z1 + z2) / 2, top = ry + .06, shy = ry + .2, hem = ry + len, hem2 = ry + len - .05 - rnd() * .12;
        var A = [P(inn, shy, z1), P(inn, top, zm), P(inn, shy, z2), P(inn, hem2, z2 + .01), P(inn, hem, zm), P(inn, hem, z1 - .01)];
        var q1 = P(inn, top - .01, z1 + d * .15), q2 = P(inn, top - .01, z2 - d * .15), q3 = P(inn, hem + .04, zm);
        x.fillStyle = rgb(lit); x.beginPath(); x.moveTo(A[0][0], A[0][1]);
        x.quadraticCurveTo(q1[0], q1[1], A[1][0], A[1][1]); x.quadraticCurveTo(q2[0], q2[1], A[2][0], A[2][1]);
        x.lineTo(A[3][0], A[3][1]); x.quadraticCurveTo(q3[0], q3[1], A[5][0], A[5][1]); x.closePath(); x.fill();
        var B = [P(inn, shy, z1), P(out, shy + .04, z1), P(out, hem, z1), P(inn, hem, z1 - .01)];
        x.fillStyle = rgb(mix(lit, [0, 0, 0], .38)); x.beginPath(); x.moveTo(B[0][0], B[0][1]);
        x.lineTo(B[1][0], B[1][1]); x.lineTo(B[2][0], B[2][1]); x.lineTo(B[3][0], B[3][1]); x.closePath(); x.fill();
        for (var n = 0; n < 3; n++) {
          var zq = z1 + d * (.25 + n * .25), m1 = P(inn, shy + .05, zq), m2 = P(inn, hem - .02, zq + .004);
          x.strokeStyle = "rgba(0,0,0," + (.12 * (1 - f)) + ")"; x.lineWidth = Math.max(.3, 1.5 / z); line(m1, m2);
        }
        x.strokeStyle = rgb(mix([160, 170, 170], fogC, f)); x.lineWidth = Math.max(.3, 2.5 / z);
        line(P(rx, ry - .02, zm), P(rx, top, zm));
      });
      x.strokeStyle = "#7f8c8c"; x.lineWidth = 1.5; line(P(rx, ry, .5), P(rx, ry, 70));
    }
    rack(-1); rack(1);
    for (z = 1.6; z < 60; z *= 1.35) {
      var p = P(0, -1.9, z), r = Math.max(1, 30 / z);
      var lg = x.createRadialGradient(p[0], p[1], 0, p[0], p[1], r * 5);
      lg.addColorStop(0, "rgba(220,240,234," + (.55 * (1 - fog(z) * .6)) + ")"); lg.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = lg; x.fillRect(p[0] - r * 5, p[1] - r * 5, r * 10, r * 10);
      x.fillStyle = "#eaf6f2"; x.beginPath(); x.ellipse(p[0], p[1], r * .9, r * .35, 0, 0, Math.PI * 2); x.fill();
    }
    var t = document.createElement("canvas"); t.width = W; t.height = H;
    var tx = t.getContext("2d"); tx.filter = "blur(3.5px)"; tx.drawImage(c, 0, 0);
    x.globalAlpha = .92; x.drawImage(t, 0, 0); x.globalAlpha = 1;
    var vg = x.createRadialGradient(VX, H * .55, H * .2, VX, H * .55, H * .85);
    vg.addColorStop(0, "rgba(0,0,0,0)"); vg.addColorStop(1, "rgba(0,0,0,.62)");
    x.fillStyle = vg; x.fillRect(0, 0, W, H);
    var url;
    try { url = c.toDataURL("image/webp", .82); } catch (e) { url = c.toDataURL(); }
    document.documentElement.style.setProperty("--corridor", "url(" + url + ")");
  }

  var available = RESIDENTS.filter(function (r) { return r.status === "new" || r.status === "waiting"; });
  var queue = RESIDENTS.filter(function (r) { return r.status === "queued"; }).sort(function (a, b) { return a.arrivedAt - b.arrivedAt; });
  var homed = RESIDENTS.filter(function (r) { return r.status === "adopted"; });
  var byNo = function (no) { return RESIDENTS.filter(function (x) { return x.no === no; })[0]; };
  var money = function (n) { return "$" + n; };

  /* ---------- the keeper's bag ---------- */
  var bag = [];
  function inBag(no) { return bag.indexOf(no) > -1; }
  function addToBag(no) {
    var r = byNo(no);
    if (!r || inBag(no) || r.status === "adopted" || r.status === "queued") { openBag(); return; }
    bag.push(no);
    renderBag();
    var b = $(".bag-btn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
    if (dlg.open) $("#fileNotice").textContent = r.nick + " is in your preview bag. This does not reserve the piece.";
    else toast(r.nick + " is in your preview bag.");
    refreshButtons();
  }
  function removeFromBag(no) {
    bag = bag.filter(function (x) { return x !== no; });
    renderBag(); refreshButtons();
    var target = $("#bagItems [data-remove]") || $("[data-bag-close]");
    target.focus();
  }
  function renderBag() {
    $("#bagCount").textContent = bag.length;
    var total = 0;
    $("#bagItems").innerHTML = bag.length ? bag.map(function (no) {
      var r = byNo(no); total += r.fee;
      return '<div class="bag-item"><div class="bag-thumb">' + shot(r) + '</div>' +
        '<div><span class="mono">No. ' + r.no + ' · ' + esc(r.nick) + '</span><h3>' + esc(r.name) + '</h3>' +
        '<button class="remove" type="button" data-remove="' + r.no + '">Leave on the hanger</button></div>' +
        '<b>' + money(r.fee) + '</b></div>';
    }).join("") : '<p class="bag-empty">Your bag is empty. Somebody out there is still waiting.</p>';
    $("#bagTotal").textContent = money(total);
    $("#bagNotice").textContent = "";
  }
  function openBag() {
    if (dlg.open) closePiece();
    $("#bagNotice").textContent = "";
    if (!$("#bag").open) $("#bag").showModal();
  }
  function closeBag() { if ($("#bag").open) $("#bag").close(); }
  function adoptLabel(r) {
    return '<button class="adopt-btn' + (inBag(r.no) ? " in" : "") + '" type="button" data-adopt="' + r.no + '">' + (inBag(r.no) ? "In your bag" : "Adopt me") + '</button>';
  }
  function refreshButtons() {
    document.querySelectorAll("[data-adopt]").forEach(function (b) {
      var on = inBag(b.getAttribute("data-adopt"));
      b.classList.toggle("in", on);
      if (b.classList.contains("adopt-btn")) b.textContent = on ? "In your bag" : "Adopt me";
      else b.textContent = on ? "In your bag" : "Adopt me · " + money(byNo(b.getAttribute("data-adopt")).fee);
    });
  }

  /* ---------- a still-life from the shelter archive ---------- */
  function heroCard(r, pos) {
    return '<button type="button" class="intake p' + pos + '" data-no="' + r.no + '" aria-label="Meet ' + esc(r.nick) + ', ' + esc(r.name) + '">' +
      '<span class="intake-photo">' + shot(r).replace('loading="lazy"', 'loading="eager"') + '</span>' +
      '<span class="intake-label"><span class="intake-name">' + esc(r.nick) + '</span><span class="mono">No. ' + r.no + ' / ' + money(r.fee) + '</span></span>' +
      '</button>';
  }
  function initHero() {
    var stage = $("#stage");
    if (!stage) return;
    var selection = ["002", "003"].map(function (no) {
      return available.find(function (r) { return r.no === no; });
    }).filter(Boolean);
    if (!selection.length) selection = available.slice(0, 2);
    stage.innerHTML = selection.map(heroCard).join("");
    stage.addEventListener("click", function (e) {
      var b = e.target.closest(".intake");
      if (b) openPiece(b.getAttribute("data-no"));
    });
  }

  /* ---------- the residents (shop grid) ---------- */
  var filter = "All", sort = "newest";
  var FILTERS = ["All", "New this week", "Dresses", "Tops", "Shirts", "Jackets"];
  function match(r) {
    if (filter === "All") return true;
    if (filter === "New this week") return r.status === "new";
    return r.type === filter;
  }
  function sorted(list) {
    return list.slice().sort(function (a, b) {
      if (sort === "longest") return b.day - a.day;
      if (sort === "low") return a.fee - b.fee;
      if (sort === "high") return b.fee - a.fee;
      return a.day - b.day;
    });
  }
  function cardHTML(r) {
    var tone = r.anniversary ? "milestone" : r.status === "new" ? "new" : "since";
    return '<article class="resident">' +
      '<button class="resident-photo" type="button" data-open="' + r.no + '" aria-label="Open the file of ' + esc(r.nick) + '">' +
        shot(r) + '<span class="status ' + tone + '">' + residency(r) + '</span>' +
      '</button>' +
      '<div class="resident-body">' +
        '<div class="resident-meta"><span>No. ' + r.no + '</span><span>' + esc(r.size.split(",")[0]) + '</span></div>' +
        '<h3><button type="button" data-open="' + r.no + '">' + esc(r.nick) + '</button></h3>' +
        '<p class="resident-line">' + esc(r.name) + '. ' + esc(r.story[0]) + '</p>' +
        '<div class="resident-buy"><span class="fee"><small>Adoption fee</small>' + money(r.fee) + '</span>' + adoptLabel(r) + '</div>' +
      '</div>' +
    '</article>';
  }
  function renderGrid() {
    var list = sorted(available.filter(match));
    $("#resultCount").textContent = list.length + (list.length === 1 ? " resident" : " residents") + " · " + $("#sort").selectedOptions[0].textContent;
    $("#grid").innerHTML = list.length ? list.map(cardHTML).join("") : '<p class="bag-empty">No residents here right now.</p>';
  }
  function initFilters() {
    var bar = $("#filters");
    bar.innerHTML = FILTERS.map(function (f) { return '<button class="chip-btn' + (f === filter ? " on" : "") + '" aria-pressed="' + (f === filter) + '" type="button" data-f="' + f + '">' + f + '</button>'; }).join("");
    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".chip-btn"); if (!b) return;
      filter = b.getAttribute("data-f");
      bar.querySelectorAll(".chip-btn").forEach(function (x) { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", String(x === b)); });
      renderGrid();
    });
    $("#sort").addEventListener("change", function (e) { sort = e.target.value; renderGrid(); });
  }

  /* ---------- coming and going ---------- */
  function renderComing() {
    var el = $("#coming");
    if (!el) return;
    el.innerHTML = queue.map(function (r, i) {
      return '<article class="mini queued">' +
        '<div class="mini-photo">' + shot(r) + '<span class="status soon">' + residency(r) + '</span></div>' +
        '<div class="mini-body"><span class="mono">No. ' + r.no + ' · ' + esc(r.latin) + '</span><h3>' + esc(r.nick) + '</h3><p>' + esc(r.teaser || "") + '</p></div>' +
      '</article>';
    }).join("") + homed.map(function (r) {
      return '<article class="mini homed">' +
        '<div class="mini-photo">' + shot(r) + '<span class="status home">Found a home</span></div>' +
        '<div class="mini-body"><span class="mono">No. ' + r.no + ' · adopted</span><h3>' + esc(r.nick) + '</h3><p>' + esc(r.story[3]) + '</p></div>' +
      '</article>';
    }).join("");
  }

  /* ---------- today's resident ---------- */
  function today() {
    var pick = available.filter(function (r) { return r.anniversary; })[0] || available.filter(function (r) { return r.day === 0; })[0];
    if (pick) return pick;
    var d = new Date(), start = new Date(d.getFullYear(), 0, 0);
    var doy = Math.floor((d - start) / 864e5);
    var list = available.slice().sort(function (a, b) { return b.day - a.day; });
    return list[doy % list.length];
  }
  function headline(r) {
    if (r.anniversary) return esc(r.nick) + ' turns <em>' + r.months + (r.months === 1 ? ' month' : ' months') + '</em> with us today.';
    if (r.day === 0) return esc(r.nick) + ' <em>arrived today.</em>';
    if (r.status === "new") return esc(r.nick) + ' is <em>new this week.</em>';
    return 'Meet ' + esc(r.nick) + ', <em>with us since ' + MONTHS[r.arrivedAt.getMonth()] + '.</em>';
  }
  function initToday() {
    var r = today(), el = $("#today");
    if (!el || !r) return;
    el.innerHTML =
      '<div class="today-photo">' + shot(r) + '</div>' +
      '<div class="today-body">' +
        '<p class="kicker">Today\'s resident · No. ' + r.no + ' · ' + esc(r.latin) + '</p>' +
        '<h2>' + headline(r) + '</h2>' +
        '<p class="today-tale">' + esc(r.story[1]) + ' ' + esc(r.story[2]) + '</p>' +
        '<ul class="facts"><li>' + esc(r.name) + '</li><li>' + esc(r.size) + '</li><li>' + esc(r.health.split(".")[0]) + '</li></ul>' +
        '<div class="today-actions"><button class="btn" type="button" data-adopt="' + r.no + '">Adopt me · ' + money(r.fee) + '</button>' +
        '<button class="btn ghost" type="button" data-open="' + r.no + '">Read the file</button></div>' +
      '</div>';
  }

  /* ---------- the intake file ---------- */
  var dlg;
  function openPiece(no) {
    var r = byNo(no);
    if (!r || r.status === "queued") return;
    var adopted = r.status === "adopted";
    $("#file").innerHTML =
      '<button class="icon-btn close" type="button" data-close aria-label="Close">×</button>' +
      '<div class="file-grid">' +
        '<div class="file-photo">' + shot(r) + '</div>' +
        '<div class="file-body">' +
          '<p class="kicker">Intake file · No. ' + r.no + ' · ' + esc(r.latin) + '</p>' +
          '<h2>' + esc(r.nick) + ', <em>' + esc(r.name.replace(/^The /, "the ")) + '</em></h2>' +
          '<ol class="tale-parts">' +
            '<li><span class="mono">Who I am</span>' + esc(r.story[0]) + '</li>' +
            '<li><span class="mono">How I got here</span>' + esc(r.story[1]) + '</li>' +
            '<li><span class="mono">What I deserve</span>' + esc(r.story[2]) + '</li>' +
            '<li><span class="mono">Please</span>' + esc(r.story[3]) + '</li>' +
          '</ol>' +
          '<dl class="spec"><dt>Breed</dt><dd>' + esc(r.breed) + '</dd><dt>Size</dt><dd>' + esc(r.size) + '</dd>' +
            '<dt>Temperament</dt><dd>' + esc(r.temperament) + '</dd><dt>Health</dt><dd>' + esc(r.health) + '</dd>' +
            '<dt>Resident</dt><dd>Since ' + since(r) + '</dd></dl>' +
          (adopted
            ? '<p class="found">This one found its next keeper.</p>'
            : '<div class="buy-row"><span class="fee"><small>Adoption fee</small>' + money(r.fee) + '</span>' +
              '<button class="btn" type="button" data-adopt="' + r.no + '">' + (inBag(r.no) ? "In your bag" : "Adopt me · " + money(r.fee)) + '</button></div>' +
              '<p class="fine-print">One of a kind. Ships with a numbered adoption certificate. Every story is true. Some more than others.</p>') +
          '<p id="fileNotice" class="dialog-notice" role="status" aria-live="polite"></p>' +
        '</div>' +
      '</div>';
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    history.replaceState(null, "", "#no-" + r.no);
  }
  function closePiece() { if (dlg.open) dlg.close(); history.replaceState(null, "", location.pathname + location.search); }

  var tt;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-adopt]");
    if (a) { if (inBag(a.getAttribute("data-adopt"))) openBag(); else addToBag(a.getAttribute("data-adopt")); return; }
    var o = e.target.closest("[data-open]");
    if (o) { openPiece(o.getAttribute("data-open")); return; }
    var rm = e.target.closest("[data-remove]");
    if (rm) { removeFromBag(rm.getAttribute("data-remove")); return; }
    if (e.target.closest("[data-bag-open]")) { openBag(); return; }
    if (e.target.closest("[data-bag-close]") || e.target === $("#bag")) { closeBag(); return; }
    if (e.target.closest("[data-checkout]")) { $("#bagNotice").textContent = bag.length ? "Preview only. Adoption opens with the shelter. No payment has been taken." : "Pick a resident first."; return; }
    if (e.target.closest("[data-close]") || e.target === dlg) closePiece();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeBag(); });

  document.addEventListener("DOMContentLoaded", function () {
    try { corridor(); } catch (e) {}
    document.querySelectorAll("[data-logo]").forEach(function (n) { n.innerHTML = logoSVG(); });
    document.querySelectorAll("[data-hanger]").forEach(function (n) { n.innerHTML = hangerIcon(INK); });
    dlg = $("#fileDialog");
    dlg.addEventListener("close", function () { history.replaceState(null, "", location.pathname + location.search); });
    initHero(); initFilters(); renderGrid(); renderComing(); initToday(); renderBag();
    var setTxt = function (id, v) { var n = document.getElementById(id); if (n) n.textContent = v; };
    setTxt("st-wait", available.length); setTxt("st-queue", queue.length); setTxt("st-homed", homed.length);
    var m = location.hash.match(/^#no-(\d{3})$/);
    if (m) openPiece(m[1]);
  });
})();
