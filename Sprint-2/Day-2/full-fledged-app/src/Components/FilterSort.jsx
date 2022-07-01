import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {getBooks} from "../Redux/action";

export const FilterSort = () => {

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll('category');
  console.log('urlCategory:', urlCategory)
  const urlSort = searchParams.get('sortBy');
  console.log('urlSort:', urlSort)

  const [category, setCategory] = useState(urlCategory || []); //on changing tab data will remain same
  const [sortBy, setSortBy] = useState(urlSort || "");
  // *******************************FILTER********************************
  // If the option is already present then remove it , else add it
  const handleCheckbox = (e) => {
    let option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {  //If already present, remove it
      newCategory.splice(newCategory.indexOf(option), 1);  // remove 1 elemet from index --> option
    } else {  //add to array
      newCategory.push(option);
    }

    setCategory(newCategory);
  };

  // console.log('category:', category)
  // console.log("searchParams", searchParams);

  useEffect(() => {
    if(category) {
      setSearchParams( { category: category } );
      dispatch(getBooks( {params: {category}} )); //Selected category items will be displayed on DOM
    }
  }, [category, setSearchParams, dispatch]);

  // *******************************SORTING********************************
  const handleSort = (e) => {
    setSortBy(e.target.value)
  }
  // console.log('sortBy:', sortBy)


  useEffect(() => {
    if(sortBy) {
      const params = {
        category: searchParams.getAll('category'), //return all the values
        sortBy
      };

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: "release_year",
          _order: sortBy, //What we have stored (asc / desc)
        }
      }

  console.log('getBooksParams:', getBooksParams)
    
      setSearchParams(params);
      dispatch(getBooks(getBooksParams))
    }
  }, [sortBy, searchParams, setSearchParams, dispatch]);

  



  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            defaultChecked={category.includes("Novel")}
            onChange={handleCheckbox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            defaultChecked={category.includes("Science_Fiction")}
            onChange={handleCheckbox}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
            onChange={handleCheckbox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
            onChange={handleCheckbox}
          />
          <label>Thriller</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div  onChange={handleSort} >
        <input type="radio" value='asc' name="sortBy" defaultChecked={sortBy === "asc"} /> Ascending
        <input type="radio" value='desc' name="sortBy" defaultChecked={sortBy === "desc"} /> Decending
      </div>
    </div>
  );
};