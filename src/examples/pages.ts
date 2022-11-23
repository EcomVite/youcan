import YouCan from "../index";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.pages
	.getPages({ limit: 1 })
	.then((pages) => {
		console.log(pages);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.pages
	.getAllPages()
	.then((pages) => {
		console.log(pages);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.pages
	.getPageById("11eb63ac-b2a4-417c-9fcd-1d0c2463f4ea")
	.then((page) => {
		console.log(page);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.pages
	.createPage({
		name: "kirwako page",
	})
	.then((page) => {
		console.log(page);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.pages
	.updatePage("939f1f10-156a-4bad-824b-be8a8b4c0059", {
		name: "kirwako page updated",
	})
	.then((page) => {
		console.log(page);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.pages
	.deletePage("939f1f10-156a-4bad-824b-be8a8b4c0059")
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});
