/* eslint-disable react/prop-types */
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({ setBrand, setCategory, handleReset, uniqueBrand, uniqueCategory }) => {
    return (
        <div className='bg-gray-200 h-full lg:min-h-screen p-4 rounded-t-md'>
            <div className='flex items-center gap-2'>
                <TbFilter size={24} />
                <h2 className='font-semibold text-xl'>Filters</h2>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
                {/* Brands Dropdown */}
                <div className="w-full max-w-md">
                    <select className="p-[11px] select w-full border-black" onChange={(e) => setBrand(e.target.value)}>
                        <option value="">Brands</option>
                        {uniqueBrand.map((brand) =>
                            <option key={brand} value={brand}>
                                {brand}
                            </option>)}
                    </select>
                </div>

                {/* Categories Dropdown */}
                <div className="w-full max-w-md">
                    <select className="p-[11px] select w-full border-black" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Categories</option>
                        {uniqueCategory.map((category) =>
                            <option key={category} value={category}>
                                {category}
                            </option>)}
                    </select>
                </div>

                {/* Reset Button */}
                <button className="btn w-full mt-4 btn-outline btn-primary flex items-center justify-center sm:justify-start" onClick={handleReset}>
                    <p>Reset</p>
                    <GrPowerReset />
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
