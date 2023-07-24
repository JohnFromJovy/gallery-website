import { createClient } from 'pexels';

const perPage = 12;

const client = createClient(
	'tP6ce7LPIrr9FcVbNMPrWLyGxlhxdD8h4Sdmxk5YK8OXHFRGUE2tLFRF'
);

const cureatedDataFromAPI = async (page) => {
	try {
		const result = await client.photos.curated({
			page: page,
			per_page: perPage,
		});
		return result;
	} catch (e) {
		console.log('fetch error out', e);
	}
};

const searchDataFromAPI = async (query, page) => {
	try {
		const result = await client.photos.search({
			query,
			page,
			per_page: perPage,
		});
		return result;
	} catch (e) {
		console.log('search error out', e);
	}
};

export const fetchDataFromAPI = async (query, page) => {
	console.log(query);
	if (query === '') {
		return cureatedDataFromAPI(page);
	} else {
		return searchDataFromAPI(query, page);
	}
};
