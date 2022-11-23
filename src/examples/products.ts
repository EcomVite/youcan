import YouCan from "youcan";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.products
	.getProducts({ limit: 3, page: 2 })
	.then((products) => {
		console.log(products.data);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.products
	.getAllProducts()
	.then((products) => {
		console.log(products.data);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.products
	.getProductById('d6f39bd3-1f63-4ee0-b774-4bf2d0cd88b4', {
		include: 'variants',
	})
	.then((product) => {
		console.log(product);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.products
	.createProduct({
		name: 'Test Product',
		description: 'Test Product Description',
		price: 100,
		has_variants: false,
		visibility: true,
		images: [
			{
				"id": "a3601539-e47a-4d92-bfd2-8124de4cd8e0",
				"name": "stores/b8d781d37d34b5452c250ea2fcbcb774/products/PpxZX6i5pY6u1nQVaTPf3N7XtPxK3LC0DLHvrAxn.jpeg",
				"type": 1,
				"url": "https://cdn.youcan.shop/stores/b8d781d37d34b5452c250ea2fcbcb774/products/PpxZX6i5pY6u1nQVaTPf3N7XtPxK3LC0DLHvrAxn.jpeg",
				"order": 2,
				"variations": {
					"original": "https://cdn.youcan.shop/stores/b8d781d37d34b5452c250ea2fcbcb774/products/PpxZX6i5pY6u1nQVaTPf3N7XtPxK3LC0DLHvrAxn.jpeg",
					"sm": "https://cdn.youcan.shop/stores/b8d781d37d34b5452c250ea2fcbcb774/products/PpxZX6i5pY6u1nQVaTPf3N7XtPxK3LC0DLHvrAxn_sm.jpeg",
					"md": "https://cdn.youcan.shop/stores/b8d781d37d34b5452c250ea2fcbcb774/products/PpxZX6i5pY6u1nQVaTPf3N7XtPxK3LC0DLHvrAxn_md.jpeg",
					"lg": "https://cdn.youcan.shop/stores/b8d781d37d34b5452c250ea2fcbcb774/products/PpxZX6i5pY6u1nQVaTPf3N7XtPxK3LC0DLHvrAxn_lg.jpeg"
				}
			}
		]
	})
	.then((product) => {
		console.log(product);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.products
	.updateProduct('dd4221cb-eeb6-4c26-b3ff-08c968201bb3', {
		name: "updated product name",
		price: 0.2,
		has_variants: false,
	})
	.then((product) => {
		console.log(product);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.products
	.deleteProduct('e8eefb2f-526c-4aaa-8c01-dc354154ed77a')
	.then((product) => {
		console.log(product);
	})
	.catch((error) => {
		console.error(error.response.data);
	});