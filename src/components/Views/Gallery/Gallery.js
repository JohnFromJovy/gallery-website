import React, { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./gallery.css";
import Picture from "../../Picture/Picture";
import Search from "../../Search/Search";

function Gallery() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState([]);
  const [currentSearch, setCurrentSearch] = useState([]);
  const [page, setPage] = useState(1);
  const client = createClient(
    "tP6ce7LPIrr9FcVbNMPrWLyGxlhxdD8h4Sdmxk5YK8OXHFRGUE2tLFRF"
  );
  const fetchData = async () => {
    try {
      const result = await client.photos.curated({ page: page, per_page: 15 });
      setData(result.photos);
      setPage(page + 1);
    } catch (e) {
      console.log("fetch error out", e);
    }
    /* } else {
      try {
        const result = await client.photos.search({ query, per_page: 15 });
        setData(result.photos);
      } catch (e) {
        console.log("error out", e);
      }
    } */
  };

  const searchData = async (query, page) => {
    try {
      const result = await client.photos.search({
        query,
        page: page,
        per_page: 15,
      });
      setData(result.photos);
      setPage(page + 1);
      // setCurrentSearch(query);
    } catch (e) {
      console.log("search error out", e);
    }
  };

  //when page load up
  useEffect(() => {
    fetchData();
  }, []);

  //when search button clicked
  useEffect(() => {
    if (currentSearch === "") {
      //console.log("load more button clicked then search photos");
      fetchData();
    } else {
      //console.log("load more button clicked then fetch data");
      searchData(currentSearch);
    }
  }, [currentSearch]);

  if (!data) {
    return <div className="spinner">spinner</div>;
  }
  return (
    <>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="gallery">
        {data.map((d) => {
          return <Picture data={d} />;
        })}
      </div>
    </>
  );
}

export default Gallery;
