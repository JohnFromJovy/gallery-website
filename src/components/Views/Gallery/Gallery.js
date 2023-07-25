import React, { useState, useEffect } from 'react';
import './gallery.css';
import Picture from '../../Picture/Picture';
import Search from '../../Search/Search';
import { fetchDataFromAPI } from './api.js';

function Gallery() {
	const [data, setData] = useState(null);
	const [currentSearch, setCurrentSearch] = useState('');
	const [page, setPage] = useState(1);

	const initialPage = () => {
		return 1;
	};

	// const loading = () => {
	//   return <div className="spinner">Loading</div>;
	// };

	const dataUpdate = async (query) => {
		setCurrentSearch(query);
		setPage(initialPage);
		console.log('go dataUpdate. currentSearch = ' + query);
		const result = await fetchDataFromAPI(query, page);
		setData(result.photos);
	};

	//when page load up or search button clicked
	useEffect(
		() => async () => {
			const result = await fetchDataFromAPI(currentSearch, page);
			console.log(result);
			setData(result.photos);
			setPage(page + 1);
		},
		[]
	);

	//when load more button clicked
	const loadMore = async () => {
		console.log('load more button clicked');
		setPage(page + 1);
		console.log('page number is ' + page);
		try {
			const result = await fetchDataFromAPI(currentSearch, page);
			setData(data.concat(result.photos));
		} catch (e) {
			console.log('load more search error out', e);
		}
	};

	//how to add spinner when loading more pages???
	if (!data) {
		return <div className="loading">Loading</div>;
	}
	return (
		<>
			{/* <Search setCurrentSearch={setCurrentSearch} /> */}
			<Search
				title="searchBar"
				onSearch={dataUpdate}
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
