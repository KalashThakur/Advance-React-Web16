import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterSort = () => {
  const [category, setCategory] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckbox = (e) => {
    let option = e.target.value;
    let newCategory = [...category];
    // if the option is already present then remove it, else add it
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }

    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category: category });
    }
  }, [category, setSearchParams]);

  useEffect(() => {
    if (sortBy) {
      const params = {
        category: searchParams.getAll("category"),
        sortBy,
      };

      searchParams(params);
    }
  }, [searchParams, setSearchParams, sortBy]);

  console.log("category", category);

  console.log("sortBy", sortBy);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Novel"
            defaultChecked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Science_Fiction"
            defaultChecked={category.includes("Science_Fiction")}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />{" "}
        Ascending

        <input
          type="radio"
          value="dsc"
          name="sortBy"
          defaultChecked={sortBy === "dsc"}
        />{" "}
        Decending
      </div>
    </div>
  );
};
