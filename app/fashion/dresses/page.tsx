import CategoryHero from "../../../components/fashion/category/CategoryHero";
import DressFilters from "../../../components/fashion/category/DressFilters";
import StoreHeader from "../../../components/store/StoreHeader";

const dressHeroImages = [
  "/images/fashion/category-heroes/dresses/dress-01.jpg",
  "/images/fashion/category-heroes/dresses/dress-02.jpg",
  "/images/fashion/category-heroes/dresses/dress-03.jpg",
  "/images/fashion/category-heroes/dresses/dress-04.jpg",
  "/images/fashion/category-heroes/dresses/dress-05.jpg",
  "/images/fashion/category-heroes/dresses/dress-06.jpg",
];

export default function DressesPage() {
  return (
    <main className="category-page">
      <StoreHeader />

      <CategoryHero
        title="Dresses"
        eyebrow="GHANAIAN DRESSES"
        description="Contemporary silhouettes, rich textiles and pieces rooted in Ghanaian style."
        images={dressHeroImages}
        interval={3000}
      />

      <section className="category-listing" aria-labelledby="dresses-title">
        <div className="category-listing__heading">
          <div>
            <p className="category-listing__eyebrow">SHOP THE COLLECTION</p>
            <h2 id="dresses-title">Dresses</h2>
          </div>
          <p className="category-listing__intro">Explore Ghanaian dresses across everyday, traditional and occasion styles.</p>
        </div>

        <DressFilters />

        <div className="category-product-placeholder" aria-label="Products coming next">
          <p>Dress products will appear here.</p>
        </div>
      </section>
    </main>
  );
}
