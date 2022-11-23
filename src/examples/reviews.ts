import YouCan from "youcan";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.reviews
	.getReviews({ limit: 1 })
	.then((reviews) => {
		console.log(reviews);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.getAllReviews()
	.then((reviews) => {
		console.log(reviews);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.getReviewById("95er588f-c2d7-4d45-82d3-15957adf3797")
	.then((review) => {
		console.log(review);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.createReview('d6f39bd3-1f63-4ee0-b774-4bf2d0cd88b4', {
		ratings: 5,
		first_name: 'kirwako',
		email: 'me@kirwako.com',
	})
	.then((review) => {
		console.log(review);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.updateReview('95er588f-c2d7-4d45-82d3-15957adf3797', {
		ratings: 5,
		first_name: 'kirwako updated',
		email: 'me@kirwakoupdated.com',
	})
	.then((review) => {
		console.log(review);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.deleteReview('95er588f-c2d7-4d45-82d3-15957adf3797')
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.getReviewsByProductId('d6f39bd3-1f63-4ee0-b774-4bf2d0cd88b4', {})
	.then((reviews) => {
		console.log(reviews);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.getAllReviewsByProductId('d6f39bd3-1f63-4ee0-b774-4bf2d0cd88b4')
	.then((reviews) => {
		console.log(reviews);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.rejectReview('95er588f-c2d7-4d45-82d3-15957adf3797')
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.reviews
	.approveReview('95er588f-c2d7-4d45-82d3-15957adf3797')
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error.response.data);
	});
