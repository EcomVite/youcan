import YouCan from "../index";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.customers
	.getCustomers({ q: 'imran'})
	.then((customers) => {
		console.log(customers.data);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.getAllCustomers()
	.then((customers) => {
		console.log(customers.data);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.getCustomerById("6c631023-fd15-4b72-a75e-6bee716ca66a")
	.then((customer) => {
		console.log(customer);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.createCustomer({
		first_name: "Imran",
		last_name: "Baali",
	})
	.then((customer) => {
		console.log(customer);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.deleteCustomer("0d2b06c5-53bb-4389-82bd-f78ff15a7534")
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.updateCustomer
	("6c631023-fd15-4b72-a75e-6bee716ca66a", {
		email: "me@kirwako.com"
	})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.createCustomerAddress("6c631023-fd15-4b72-a75e-6bee716ca66a", {
		first_line: "Hay Menara 2 N 67 Sidi Slimane"
	})
	.then((customer) => {
		console.log(customer);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.customers
	.updateCustomerAddress("6c631023-fd15-4b72-a75e-6bee716ca66a", "ab81f3df-16b3-4c12-8f78-25fdf8549a4c", {
		first_line: "Hay Menara 2 N 67 Sidi Slimane 14200"
	})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});
