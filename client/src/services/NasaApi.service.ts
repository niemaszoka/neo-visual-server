import axios from 'axios';

export class NasaApiService {
	private static nasaApiKey = process.env.NASA_API_KEY;
	private static nasaApiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-07-10&end_date=2018-07-16&api_key=${NasaApiService.nasaApiKey}`;

	static getNeoData = () => {
		axios.get(NasaApiService.nasaApiUrl).then((data) => {
			console.log(data);
		}).catch((error) => {
			console.log('ERROR: ', error);
		});

	};
}