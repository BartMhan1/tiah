"use client";

import { useMemo, useState } from "react";

type DressProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  material: string;
  badge?: string;
};

const dressProducts: DressProduct[] = [
  { id: "adwoa-wrap-dress", name: "Adwoa Wrap Dress", price: 420, image: "/images/fashion/category-heroes/dresses/dress-01.jpg", material: "African Print", badge: "NEW" },
  { id: "northern-fugu-dress", name: "Northern Fugu Dress", price: 520, image: "/images/fashion/category-heroes/dresses/dress-02.jpg", material: "Fugu / Smock" },
  { id: "ama-midi-dress", name: "Ama Midi Dress", price: 380, image: "/images/fashion/category-heroes/dresses/dress-03.jpg", material: "Cotton Print" },
  { id: "tamale-smock-dress", name: "Tamale Smock Dress", price: 560, image: "/images/fashion/category-heroes/dresses/dress-04.jpg", material: "Fugu / Smock", badge: "FEATURED" },
  { id: "akua-occasion-dress", name: "Akua Occasion Dress", price: 610, image: "/images/fashion/category-heroes/dresses/dress-05.jpg", material: "Kente Inspired" },
  { id: "savannah-fugu-dress", name: "Savannah Fugu Dress", price: 495, image: "/images/fashion/category-heroes/dresses/dress-06.jpg", material: "Fugu / Smock" },
  { id: "efua-maxi-dress", name: "Efua Maxi Dress", price: 450, image: "/images/fashion/category-heroes/dresses/dress-01.jpg", material: "African Print" },
  { id: "abena-day-dress", name: "Abena Day Dress", price: 350, image: "/images/fashion/category-heroes/dresses/dress-03.jpg", material: "Cotton" },
];

export default function DressProductGrid() {
  const [saved, setSaved] = useState<string[]>([]);

  const formatter = useMemo(
    () => new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS", maximumFractionDigits: 0 }),
    []
  );

  const toggleSaved = (id: string) => {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  return (
    <section className="dress-products" aria-label="Dress products">
      <div className="dress-products__meta">
        <p>{dressProducts.length} dresses</p>
        <span>Showing Dresses only</span>
      </div>

      <div className="dress-products__grid">
        {dressProducts.map((product) => {
          const isSaved = saved.includes(product.id);

          return (
            <article className="dress-card" key={product.id}>
              <div className="dress-card__media">
                <img src={product.image} alt={product.name} />
                {product.badge && <span className="dress-card__badge">{product.badge}</span>}
                <button
                  type="button"
                  className={`dress-card__save${isSaved ? " is-saved" : ""}`}
                  aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
                  onClick={() => toggleSaved(product.id)}
                >
                  <svg viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} aria-hidden="true">
                    <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" className="dress-card__quick">Quick view</button>
              </div>

              <div className="dress-card__body">
                <div>
                  <p className="dress-card__material">{product.material}</p>
                  <h3>{product.name}</h3>
                </div>
                <p className="dress-card__price">{formatter.format(product.price)}</p>
              </div>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        .dress-products { padding-top: 30px; }
        .dress-products__meta { display:flex; align-items:center; justify-content:space-between; gap:20px; margin-bottom:22px; color:#777; font-size:.78rem; }
        .dress-products__meta p { color:#252525; font-weight:600; }
        .dress-products__meta span { color:#0b5a3b; font-weight:600; }
        .dress-products__grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:34px 20px; }
        .dress-card { min-width:0; }
        .dress-card__media { position:relative; aspect-ratio:4 / 5; overflow:hidden; background:#f1efe9; }
        .dress-card__media img { width:100%; height:100%; display:block; object-fit:cover; transition:transform .55s cubic-bezier(.2,.7,.2,1); }
        .dress-card:hover .dress-card__media img { transform:scale(1.035); }
        .dress-card__badge { position:absolute; top:13px; left:13px; z-index:2; padding:6px 8px; border-radius:999px; background:rgba(255,255,255,.92); color:#171717; font-size:.58rem; font-weight:700; letter-spacing:.12em; backdrop-filter:blur(8px); }
        .dress-card__save { position:absolute; top:12px; right:12px; z-index:2; width:36px; height:36px; display:grid; place-items:center; border:0; border-radius:50%; background:rgba(255,255,255,.9); color:#171717; cursor:pointer; box-shadow:0 4px 18px rgba(0,0,0,.08); }
        .dress-card__save svg { width:18px; height:18px; }
        .dress-card__save.is-saved { color:#0b5a3b; }
        .dress-card__quick { position:absolute; left:12px; right:12px; bottom:12px; min-height:42px; border:0; border-radius:999px; background:rgba(255,255,255,.94); color:#181818; font-size:.78rem; font-weight:600; cursor:pointer; opacity:0; transform:translateY(8px); transition:opacity .2s ease,transform .2s ease; backdrop-filter:blur(8px); }
        .dress-card:hover .dress-card__quick { opacity:1; transform:translateY(0); }
        .dress-card__body { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding-top:13px; }
        .dress-card__material { margin-bottom:5px; color:#777; font-size:.7rem; }
        .dress-card h3 { color:#171717; font-size:.9rem; font-weight:500; line-height:1.35; }
        .dress-card__price { flex:0 0 auto; color:#171717; font-size:.86rem; font-weight:600; }
        @media (max-width:980px) { .dress-products__grid { grid-template-columns:repeat(3,minmax(0,1fr)); } }
        @media (max-width:720px) { .dress-products__grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:28px 12px; } .dress-card__quick { display:none; } .dress-card__body { display:block; } .dress-card__price { margin-top:6px; } }
        @media (max-width:420px) { .dress-products__meta { align-items:flex-start; flex-direction:column; gap:5px; } }
      `}</style>
    </section>
  );
}
