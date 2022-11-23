import YouCan from "../index";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.languages
	.getLanguages()
	.then((languages) => {
		console.log(languages);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.languages
	.setLanguageDefault("7cbe73d9-4502-4d4a-a72d-04998aec0e9d")
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});