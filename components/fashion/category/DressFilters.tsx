"use client";

import { useMemo, useState } from "react";

const filterGroups = [
  { label: "Size", options: ["XS", "S", "M", "L", "XL", "XXL"] },
  { label: "Material", options: ["Kente", "African Print", "Cotton", "Lace", "Silk"] },
  { label: "Occasion", options: ["Casual", "Wedding", "Traditional", "Formal", "Workwear"] },
  { label: "Availability", options: ["In stock"] },
];

type SelectedFilters = Record<string, string[]>;

export default function DressFilters() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState<SelectedFilters>({});

  const selectedCount = useMemo(
    () => Object.values(selected).reduce((total, values) => total + values.length, 0),
    [selected]
  );

  const toggleOption = (group: string, option: string) => {
    setSelected((current) => {
      const values = current[group] ?? [];
      const nextValues = values.includes(option)
        ? values.filter((value) => value !== option)
        : [...values, option];

      return { ...current, [group]: nextValues };
    });
  };

  const clearFilters = () => setSelected({});

  return (
    <section className="category-tools" aria-label="Dresses filters and sorting">
      <div className="category-tools__bar">
        <button
          type="button"
          className="filter-trigger"
          onClick={() => setFiltersOpen((open) => !open)}
          aria-expanded={filtersOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7H20M7 12H17M10 17H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>Filter</span>
          {selectedCount > 0 && <span className="filter-trigger__count">{selectedCount}</span>}
        </button>

        <div className="category-tools__sort">
          <label htmlFor="dress-sort">Sort by</label>
          <select id="dress-sort" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      {filtersOpen && (
        <div className="filter-panel">
          <div className="filter-panel__header">
            <div>
              <p className="filter-panel__eyebrow">REFINE DRESSES</p>
              <h2>Filter</h2>
            </div>
            {selectedCount > 0 && <button type="button" className="filter-panel__clear" onClick={clearFilters}>Clear all</button>}
          </div>

          <div className="filter-panel__groups">
            {filterGroups.map((group) => (
              <fieldset className="filter-group" key={group.label}>
                <legend>{group.label}</legend>
                <div className="filter-group__options">
                  {group.options.map((option) => {
                    const checked = selected[group.label]?.includes(option) ?? false;
                    return (
                      <label className={`filter-option${checked ? " is-selected" : ""}`} key={option}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleOption(group.label, option)}
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <fieldset className="filter-group filter-group--price">
              <legend>Price</legend>
              <div className="price-fields">
                <label><span>Min</span><input inputMode="numeric" placeholder="GH₵ 0" /></label>
                <span className="price-fields__separator">to</span>
                <label><span>Max</span><input inputMode="numeric" placeholder="GH₵ 2,000" /></label>
              </div>
            </fieldset>
          </div>
        </div>
      )}
    </section>
  );
}
