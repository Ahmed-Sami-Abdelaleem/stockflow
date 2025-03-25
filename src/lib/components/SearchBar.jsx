"use client";
import React from "react";
import { useFilterStore } from "../stores/filter/filter";

const SearchBar = () => {
  const {
    setFilterText,
    setIsDropdownVisible,
    filterText,
    isDropdownVisible,
    priceRange,
    setPriceRange,
    includeOutOfStock,
    setIncludeOutOfStock,
    selectedCategory,
    setSelectedCategory,
  } = useFilterStore();

  return (
    <div className="relative w-full flex justify-center pb-6">
      {/* Search Input */}
      <div className="relative w-full md:w-[600px] lg:w-[700px]">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-500">
          <input
            type="text"
            placeholder="🔍 بحث بالاسم أو السعر أو التصنيف..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            onClick={() => setIsDropdownVisible(true)}
            className="w-full p-3 outline-none bg-transparent text-gray-700"
          />
          {filterText && (
            <button
              className="text-gray-500 hover:text-red-500 px-3 transition"
              onClick={() => {
                setFilterText("");
                setIsDropdownVisible(false);
              }}
            >
              ✖️
            </button>
          )}
        </div>

        {/* Dropdown Filter Options */}
        {isDropdownVisible && (
          <div className="absolute top-full left-0 w-full sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white border border-gray-200 mt-2 p-4 rounded-lg shadow-lg z-20 transition-all">
            {/* Price Range */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">💰 السعر:</label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full accent-red-500"
                />
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-red-500"
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                من <span className="font-bold">{priceRange[0]}</span> إلى <span className="font-bold">{priceRange[1]}</span> ج
              </p>
            </div>

            {/* Out of Stock Toggle */}
            <div className="mb-4 flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeOutOfStock}
                onChange={(e) => setIncludeOutOfStock(e.target.checked)}
                className="accent-red-500"
              />
              <label className="text-gray-700">تضمين المنتجات غير المتوفرة</label>
            </div>

            {/* Category Selector */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">📦 التصنيف:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="">جميع التصنيفات</option>
                <option value="الكترونيات">📱 الكترونيات</option>
                <option value="ملابس">👕 ملابس</option>
                <option value="الأدوات المنزلية">🏡 الأدوات المنزلية</option>
              </select>
            </div>

            {/* Apply Button */}
            <button
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              onClick={() => setIsDropdownVisible(false)}
            >
             بحث ✅
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
