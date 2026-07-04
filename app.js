/* ============================================================
   EXPLORERS TECHNOLOGIES — Online Store
   ------------------------------------------------------------
   >>> SET YOUR WHATSAPP NUMBER HERE  <<<
   International format, digits only, NO "+" and NO spaces.
   Uganda example: 256712345678  (256 = Uganda, then your number
   without the leading 0).
   ============================================================ */
const CONFIG = {
  whatsapp: "256700123878",          // <-- your WhatsApp number (international format, no +)
  businessName: "EXPLORERS TECHNOLOGIES",
  currency: "UGX",
  location: "Kampala, Uganda",
};

/* ---------- Categories ---------- */
const CATEGORIES = [
  { key: "phones",    label: "Phones",              icon: "📱" },
  { key: "laptops",   label: "Laptops",             icon: "💻" },
  { key: "watches",   label: "Smart Watches",       icon: "⌚" },
  { key: "earphones", label: "Earphones & Audio",   icon: "🎧" },
  { key: "phoneacc",  label: "Phone Accessories",   icon: "🔌" },
  { key: "laptopacc", label: "Laptop Accessories",  icon: "🖱️" },
  { key: "other",     label: "Other Devices",       icon: "📦" },
];

/* ---------- Products (grouped by category, in order) ----------
   Only laptops are stocked for now. Other categories are left
   empty on purpose — they will be filled when new stock arrives.
   Each laptop lists ALL the physical units we have in `imgs`, so a
   customer can see the different appearances of the actual pieces
   available.
   ------------------------------------------------------------ */
const PRODUCTS = [
  // ===== LAPTOPS =====
  {
    id: 201, cat: "laptops", name: "Lenovo 100e", price: 350000, stock: 4,
    desc: "4GB DDR4 RAM, 64GB eMMC SSD, 11.6\" HD (1366x768) anti-glare 250-nit display — light and affordable, great for students & everyday browsing.",
    imgs: [
      "images2/lenovo-100e-1.png",
      "images2/lenovo-100e-2.png",
      "images2/lenovo-100e-3.png",
      "images2/lenovo-100e-4.png",
    ],
  },
  {
    id: 202, cat: "laptops", name: "Dell Latitude E5480", price: 800000, stock: 4,
    desc: "Intel Core i5, 8GB RAM, 256GB SSD, 14\" screen, strong battery life, Windows 11 Pro — a reliable business & office laptop.",
    imgs: [
      "images2/dell-e5480-1.png",
      "images2/dell-e5480-2.png",
      "images2/dell-e5480-3.png",
      "images2/dell-e5480-4.png",
    ],
  },
  {
    id: 203, cat: "laptops", name: "Dell Latitude 3190 Notebook", price: 380000, stock: 2,
    desc: "Intel Celeron, 4GB RAM, 128GB SSD, 11.6\" compact notebook — durable and portable for school & light work.",
    imgs: [
      "images2/dell-3190-1.png",
      "images2/dell-3190-2.jpeg",
    ],
  },
];

/* primary image = first photo in the gallery */
PRODUCTS.forEach(p => {
  p.imgs = p.imgs && p.imgs.length ? p.imgs : [p.img];
  p.img = p.imgs[0];
});

/* deterministic pseudo rating + reviews so the page feels alive */
PRODUCTS.forEach(p => {
  p.rating = (4 + ((p.id * 3) % 10) / 10).toFixed(1);   // 4.0 – 4.9
  p.reviews = 8 + ((p.id * 13) % 240);
});

/* ============================================================
   State + helpers
   ============================================================ */
let activeCat = "all";
let searchTerm = "";
let sortMode = "featured";
let cart = loadCart();

const $ = sel => document.querySelector(sel);
const money = n => `${CONFIG.currency} ${Number(n).toLocaleString("en-US")}`;
const byId = id => PRODUCTS.find(p => p.id === id);

function loadCart() {
  try { return JSON.parse(localStorage.getItem("explorers_cart")) || {}; }
  catch { return {}; }
}
function saveCart() { localStorage.setItem("explorers_cart", JSON.stringify(cart)); }

function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const p = byId(Number(id)); return p ? sum + p.price * q : sum;
  }, 0);
}

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

function stockBadge(p) {
  if (p.stock <= 0) return `<span class="badge out">Out of stock</span>`;
  if (p.stock <= 3) return `<span class="badge low">Only ${p.stock} left</span>`;
  return `<span class="badge in">In stock</span>`;
}

function stars(r) {
  const full = Math.round(r);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

/* ============================================================
   Rendering
   ============================================================ */
const MENU_ITEMS = [{ key: "all", label: "All Products", icon: "🛍️" }, ...CATEGORIES];

function renderCategoryBar() {
  const bar = $("#catBar");
  bar.innerHTML = MENU_ITEMS.map(c => {
    const count = c.key === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c.key).length;
    return `<button class="cat-chip ${activeCat===c.key?'active':''}" data-cat="${c.key}">
      <span class="cc-ic">${c.icon}</span>${c.label}<span class="cc-count">${count}</span>
    </button>`;
  }).join("");
  bar.querySelectorAll(".cat-chip").forEach(b => b.onclick = () => selectCategory(b.dataset.cat));
}

function selectCategory(key) {
  activeCat = key;
  render();
  window.scrollTo({ top: $("#shop").offsetTop - 64, behavior: "smooth" });
}

function filteredProducts() {
  let list = PRODUCTS.filter(p =>
    (activeCat === "all" || p.cat === activeCat) &&
    (searchTerm === "" || p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm))
  );
  if (sortMode === "low")  list = [...list].sort((a,b)=>a.price-b.price);
  if (sortMode === "high") list = [...list].sort((a,b)=>b.price-a.price);
  return list;
}

function productCard(p) {
  const disc = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const soldOut = p.stock <= 0;
  const shots = p.imgs.length > 1 ? `<span class="shots">📷 ${p.imgs.length} photos</span>` : "";
  return `<article class="card" data-id="${p.id}">
    <div class="card-img">
      ${disc ? `<span class="disc">-${disc}%</span>` : ""}
      ${stockBadge(p)}
      ${shots}
      <img src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22225%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23e7eef5%22/><text x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%2390a4b8%22 text-anchor=%22middle%22>Image</text></svg>'">
    </div>
    <div class="card-body">
      <h3 class="card-title">${p.name}</h3>
      <div class="rating"><span class="rstars">${stars(p.rating)}</span><span class="rnum">${p.rating} (${p.reviews})</span></div>
      <p class="card-desc">${p.desc}</p>
      <div class="price-row">
        <span class="price">${money(p.price)}</span>
        ${p.old ? `<span class="old">${money(p.old)}</span>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn btn-cart" ${soldOut?"disabled":""} data-add="${p.id}">Add to Cart</button>
        <button class="btn btn-order" ${soldOut?"disabled":""} data-order="${p.id}">Order on WhatsApp</button>
      </div>
    </div>
  </article>`;
}

function render() {
  renderCategoryBar();
  const list = filteredProducts();
  const grid = $("#grid");
  const curLabel = (MENU_ITEMS.find(c => c.key === activeCat) || MENU_ITEMS[0]).label;
  $("#resultCount").textContent = `${curLabel} — ${list.length} product${list.length!==1?"s":""}`;
  grid.innerHTML = list.length
    ? list.map(productCard).join("")
    : `<p class="empty">${searchTerm
        ? "No products match your search."
        : "New stock arriving soon — please check back, or message us on WhatsApp."}</p>`;
  grid.querySelectorAll(".card").forEach(c => c.onclick = () => openProduct(Number(c.dataset.id)));
  grid.querySelectorAll("[data-add]").forEach(b => b.onclick = e => { e.stopPropagation(); addToCart(Number(b.dataset.add)); });
  grid.querySelectorAll("[data-order]").forEach(b => b.onclick = e => { e.stopPropagation(); orderSingle(Number(b.dataset.order)); });
  updateCartUI();
}

/* ---------- product detail (large view) ---------- */
function specList(desc) {
  return desc.split(/[,;]\s*/).map(s => s.trim()).filter(Boolean)
    .map(s => `<li>${s}</li>`).join("");
}
function openProduct(id) {
  const p = byId(id); if (!p) return;
  const disc = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const soldOut = p.stock <= 0;
  const catLabel = (CATEGORIES.find(c => c.key === p.cat) || {}).label || "";
  const multi = p.imgs.length > 1;
  const thumbs = multi
    ? `<div class="pm-thumbs">${p.imgs.map((src, i) =>
        `<img class="pm-thumb${i===0?' active':''}" src="${src}" data-i="${i}" alt="${p.name} — view ${i+1}">`).join("")}</div>`
    : "";
  const galleryNote = multi
    ? `<p class="pm-gallery-note">📷 ${p.imgs.length} units available — the photos show the actual pieces in stock, so appearance may vary slightly.</p>`
    : "";
  $("#productModal .pm-body").innerHTML = `
    <div class="pm-media">
      ${disc ? `<span class="pm-disc">-${disc}% OFF</span>` : ""}
      <img id="pmMainImg" src="${p.imgs[0]}" alt="${p.name}">
      ${thumbs}
    </div>
    <div class="pm-info">
      <div class="pm-cat">${catLabel}</div>
      <h2 class="pm-name">${p.name}</h2>
      <div class="pm-rating">${stars(p.rating)} <small>${p.rating} (${p.reviews} reviews)</small></div>
      <div class="pm-price-row"><span class="pm-price">${money(p.price)}</span>${p.old ? `<span class="pm-old">${money(p.old)}</span>` : ""}</div>
      <div class="pm-stock">${stockBadge(p)}</div>
      ${galleryNote}
      <div class="pm-specs"><h4>Details &amp; specifications</h4><ul>${specList(p.desc)}</ul></div>
      <div class="pm-actions">
        <button class="btn btn-cart"  id="pmAdd"   ${soldOut?"disabled":""}>Add to Cart</button>
        <button class="btn btn-order" id="pmOrder" ${soldOut?"disabled":""}>Order on WhatsApp</button>
      </div>
      <p class="cart-note" style="text-align:left;margin-top:10px">Delivery is arranged with you on WhatsApp after you order.</p>
    </div>`;
  // gallery: click a thumbnail to swap the main photo
  if (multi) {
    const main = $("#pmMainImg");
    $("#productModal").querySelectorAll(".pm-thumb").forEach(t => t.onclick = () => {
      main.src = t.src;
      $("#productModal").querySelectorAll(".pm-thumb").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
    });
  }
  if (!soldOut) {
    $("#pmAdd").onclick   = () => addToCart(p.id);
    $("#pmOrder").onclick = () => orderSingle(p.id);
  }
  $("#pmOverlay").classList.add("show");
  $("#productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeProduct() {
  $("#pmOverlay").classList.remove("show");
  $("#productModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   Cart actions
   ============================================================ */
function addToCart(id) {
  const p = byId(id); if (!p || p.stock <= 0) return;
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); updateCartUI(); toast(`${p.name} added to cart`);
}
function setQty(id, q) {
  if (q <= 0) delete cart[id]; else cart[id] = q;
  saveCart(); updateCartUI();
}
function updateCartUI() {
  $("#cartCount").textContent = cartCount();
  const items = Object.entries(cart);
  const box = $("#cartItems");
  if (!items.length) {
    box.innerHTML = `<p class="cart-empty">Your cart is empty.<br>Browse the products and tap “Add to Cart”.</p>`;
  } else {
    box.innerHTML = items.map(([id, q]) => {
      const p = byId(Number(id)); if (!p) return "";
      return `<div class="cart-item">
        <img src="${p.img}" alt="">
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${money(p.price)}</div>
          <div class="qty">
            <button data-dec="${id}">−</button><span>${q}</span><button data-inc="${id}">+</button>
            <button class="ci-remove" data-rem="${id}">Remove</button>
          </div>
        </div>
        <div class="ci-line">${money(p.price * q)}</div>
      </div>`;
    }).join("");
    box.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => setQty(Number(b.dataset.inc), cart[b.dataset.inc] + 1));
    box.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => setQty(Number(b.dataset.dec), cart[b.dataset.dec] - 1));
    box.querySelectorAll("[data-rem]").forEach(b => b.onclick = () => setQty(Number(b.dataset.rem), 0));
  }
  $("#cartTotal").textContent = money(cartTotal());
  $("#checkoutBtn").disabled = !items.length;
}

/* ============================================================
   WhatsApp ordering
   ============================================================ */
function orderSingle(id) {
  const p = byId(id); if (!p) return;
  const msg =
`Hello ${CONFIG.businessName}, I want to order:

• ${p.name}
• Price: ${money(p.price)}

Please confirm availability and delivery. Thank you.`;
  window.open(waLink(msg), "_blank");
}

function checkout() {
  const items = Object.entries(cart);
  if (!items.length) return;
  let lines = items.map(([id, q], i) => {
    const p = byId(Number(id));
    return `${i+1}. ${p.name} — ${q} x ${money(p.price)} = ${money(p.price*q)}`;
  }).join("\n");
  const msg =
`Hello ${CONFIG.businessName}, I would like to place this order:

${lines}

TOTAL: ${money(cartTotal())}

My name:
Delivery location:

Please confirm availability and delivery cost. Thank you!`;
  window.open(waLink(msg), "_blank");
}

/* ============================================================
   Toast + UI wiring
   ============================================================ */
let toastTimer;
function toast(text) {
  const t = $("#toast"); t.textContent = text; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

function openCart()  { $("#cartDrawer").classList.add("open");  $("#overlay").classList.add("show"); }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); }

document.addEventListener("DOMContentLoaded", () => {
  // fill dynamic text
  $("#waFloatLink").href = waLink(`Hello ${CONFIG.businessName}, I have a question about your products.`);
  $("#footYear").textContent = new Date().getFullYear();

  render();

  // product detail modal close handlers
  $("#pmClose").onclick = closeProduct;
  $("#pmOverlay").onclick = closeProduct;
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeProduct(); closeCart(); } });

  $("#search").addEventListener("input", e => { searchTerm = e.target.value.toLowerCase().trim(); render(); });
  $("#sort").addEventListener("change", e => { sortMode = e.target.value; render(); });
  $("#cartBtn").onclick = openCart;
  $("#closeCart").onclick = closeCart;
  $("#overlay").onclick = closeCart;
  $("#checkoutBtn").onclick = checkout;

  // warn if WhatsApp number not set
  if (CONFIG.whatsapp === "256700000000") {
    $("#setupNote").style.display = "block";
  }
});
