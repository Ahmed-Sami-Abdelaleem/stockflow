import RightSection from "../lib/components/RightSection";
import SearchBar from "@/lib/components/SearchBar";

import Avatar from "@/lib/components/avatar";
import ProductsSection from "@/lib/components/ProductsSection";
const App = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-3" dir="rtl">
      <RightSection />

      {/* Right Section */}
      <div className="lg:w-3/4 p-4  lg:mr-80 items-start">
        {/* User Avatar and Welcome Message */}
        <Avatar />

        {/* Search Bar with Dropdown Filters */}
        <SearchBar />

        <ProductsSection />
      </div>
    </div>
  );
};

export default App;
