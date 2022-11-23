import YouCan from "youcan";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.menus
	.getMenus()
	.then((menus) => {
		console.log(menus);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.menus
	.getMenuById("5e4263c1-900d-4d12-8062-ad662352095d")
	.then((menu) => {
		console.log(menu);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.menus
	.createMenu({
		name: 'menu created from api',
		slug: 'menu-created-from-api',
	})
	.then((menu) => {
		console.log(menu);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.menus
	.updateMenu('8baeeb27-8a60-47f3-8539-1c726bfc9f68', {
		name: 'menu created from api',
		slug: 'menu-created-from-api',
	})
	.then((menu) => {
		console.log(menu);
	})
	.catch((error) => {
		console.error(error.response.data);
	});
