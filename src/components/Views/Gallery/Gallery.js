import React, { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./gallery.css";
import Picture from "../../Picture/Picture";
import Search from "../../Search/Search";

function Gallery() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const [page, setPage] = useState(2);
  const client = createClient(
    "tP6ce7LPIrr9FcVbNMPrWLyGxlhxdD8h4Sdmxk5YK8OXHFRGUE2tLFRF"
  );

  const loadingSpinner = () => {
    return <div className="spinner">Loading</div>;
  };

  const fetchData = async (page) => {
    try {
      const result = await client.photos.curated({ page: page, per_page: 15 });
      setData(result.photos);
      result.photos.map((e) => {
        console.log(e);
      });
    } catch (e) {
      console.log("fetch error out", e);
    }
  };

  const searchData = async (query) => {
    try {
      const result = await client.photos.search({
        query,
        per_page: 15,
      });
      setData(result.photos);
    } catch (e) {
      console.log("search error out", e);
    }
  };

  //when page load up
  useEffect(() => {
    fetchData(page);
  }, []);

  //when search button clicked
  useEffect(() => {
    if (currentSearch === "") {
      fetchData();
    } else {
      searchData(currentSearch, page);
    }
  }, [currentSearch]);

  //when load more button clicked
  const loadMore = async () => {
    console.log("load more button clicked");
    setPage(page + 1);
    console.log("page number is " + page);
    if (currentSearch === "") {
      console.log("input is empty");
      try {
        const result = await client.photos.curated({
          page: page,
          per_page: 15,
        });
        setData(data.concat(result.photos));
        result.photos.map((e) => {
          console.log(e);
        });
      } catch (e) {
        console.log("load more pictures error out", e);
      }
    } else {
      console.log(
        `search more photos because we have search input, which is ${currentSearch}`
      );
      try {
        const result = await client.photos.search({
          query: currentSearch,
          page: page,
          per_page: 15,
        });
        setData(data.concat(result.photos));
      } catch (e) {
        console.log("load more search error out", e);
      }
    }
  };

  //how to add spinner when loading more pages?
  if (!data) {
    return <div className="spinner">Loading</div>;
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
      <div className="loadMore">
        <button onClick={loadMore}>Load More</button>
      </div>
    </>
  );
}

export default Gallery;
