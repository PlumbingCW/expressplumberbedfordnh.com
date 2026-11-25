(function () {
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  if (!t || !d || !o) { return; }
  function openMenu() {
    d.classList.add("open"); o.classList.add("visible");
    t.setAttribute("aria-expanded", "true"); t.setAttribute("aria-label", "Close menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    d.classList.remove("open"); o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false"); t.setAttribute("aria-label", "Open menu");
    document.documentElement.style.overflow = "";
  }
  t.addEventListener("click", function () {
    if (t.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
  });
  if (c) { c.addEventListener("click", closeMenu); }
  o.addEventListener("click", closeMenu);
  d.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
  var mq = window.matchMedia("(min-width: 901px)");
  var onChange = function (e) { if (e.matches) { closeMenu(); } };
  if (mq.addEventListener) { mq.addEventListener("change", onChange); } else if (mq.addListener) { mq.addListener(onChange); }
})();
