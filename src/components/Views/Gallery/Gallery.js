import React, { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./gallery.css";
import Picture from "../../Picture/Picture";
import Search from "../../Search/Search";

const fetchData = async (client, query, page) => {
  const perPage = 16;
  if (query === "") {
    try {
      const result = await client.photos.curated({
        page: page,
        per_page: perPage,
      });
      return result;
      // result.photos.map((e) => {
      //   console.log(e);
      // });
    } catch (e) {
      console.log("fetch error out", e);
    }
  } else {
    try {
      const result = await client.photos.search({
        query,
        page,
        per_page: perPage,
      });
      return result;
    } catch (e) {
      console.log("search error out", e);
    }
  }
};

function Gallery() {
  const [data, setData] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  const client = createClient(
    "tP6ce7LPIrr9FcVbNMPrWLyGxlhxdD8h4Sdmxk5YK8OXHFRGUE2tLFRF"
  );

  const loading = () => {
    return <div className="spinner">Loading</div>;
  };

  //when page load up or search button clicked
  useEffect(
    () => async () => {
      const result = await fetchData(client, currentSearch, page);
      setData(result.photos);
      setPage(page + 1);
    },
    [currentSearch]
  );
  /* 
  //problem here!! always render current search on next search content confirmed/ button clicked.

  //when search button clicked
  useEffect(
    () => async () => {
      console.log("current search is " + currentSearch);
      if (currentSearch === "") {
        const result = await fetchData(client, page);
        setData(result.photos);
      } else {
        const result = await searchData(client, currentSearch, page);
        setData(result.photos);
      }
    },
    [currentSearch]
  ); */

  //when load more button clicked
  const loadMore = async () => {
    console.log("load more button clicked");
    setPage(page + 1);
    console.log("page number is " + page);
    try {
      const result = await fetchData(client, currentSearch, page);
      setData(data.concat(result.photos));
    } catch (e) {
      console.log("load more search error out", e);
    }
  };

  //how to add spinner when loading more pages???
  if (!data) {
    return <div className="loading">Loading</div>;
  }
  return (
    <>
      {/* Opt 1 */}
      {/* <Search setCurrentSearch={setCurrentSearch} /> */}
      <Search
        setInput={setInput}
        search={() => {
          setCurrentSearch(input);
        }}
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
