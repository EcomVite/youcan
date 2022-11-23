<p align="center">
  <img src="https://github.com/EcomVite/youcan/blob/main/youcan.webp" alt="youcan Logo">
</p>

# youcan

youcan is a package allows the developer to interact easily with the [YouCan API](https://developer.youcan.shop/).
  
  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]
  

# Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):
```bash
npm install youcan # or using yarn: yarn add youcan
```

## Example Usage
```js
import YouCan from "youcan";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.products
	.getAllProducts()
	.then((products) => {
		console.log(products.data);
	})
	.catch((error) => {
		console.error(error.response.data);
	});
```

See all examples [Here](https://github.com/EcomVite/youcan/tree/main/src/examples)

## Products
| Product Action | Responsable Method |
| - | - |
| Get All Products | `myStore.products.getAllProducts()` |
| Get Products with sort, include, limit and page | ` myStore.products.getProducts({ })` |
| Get Product By ID | `myStore.products.getProductById("PRODUCT_ID")` |
| Create Product | `myStore.products.createProduct(productData)` |
| Update Product | `myStore.products.updateProduct("PRODUCT_ID", productData)` |

## Orders
| Order Action | Responsable Method |
| - | - |
| Get All Orders | `myStore.orders.getAllOrders()` |
| Get Orders with sort, include, limit and page | ` myStore.orders.getOrders({ })` |
| Get Order By ID | `myStore.orders.getOrderById("ORDER_ID")` |
| Create Order | `myStore.orders.createOrder(orderData)` |
| Close Order | `myStore.orders.closeOrder(orderData)` |
| Fulfill Order | `myStore.orders.fulfillOrder({ orderId: "ORDER_ID" })` |
| Pay Order | `myStore.orders.payOrder("ORDER_ID")` |

## Reviews
| Reviews Action | Responsable Method |
| - | - |
| Get All Reviews | `myStore.reviews.getAllReviews()` |
| Get Reviews with sort, include, limit and page | ` myStore.reviews.getReviews({ })` |
| Get Review By ID | `myStore.reviews.getReviewById("REVIEW_ID")` |
| Create Review | `myStore.reviews.createReview("PRODUCT_ID", reviewData)` |
| Update Review | `myStore.reviews.updateReview("REVIEW_ID", reviewData)` |
| Delete Review | `myStore.reviews.deleteReview("REVIEW_ID")` |
| Get Product Reviews with sort, include, limit and page | `myStore.reviews.getReviewsByProductId("PRODUCT_ID", {})` |
| Get All Product Reviews | `myStore.reviews.getAllReviewsByProductId("PRODUCT_ID")` |
| Reject Review | `myStore.reviews.rejectReview("REVIEW_ID")` |
| Approve Review | `myStore.reviews.approveReview("REVIEW_ID")` |






## Support
#### This package costs me time to make and maintain every time.
[I am very 😀 about every coffee!]

<a href="https://www.buymeacoffee.com/imranbaali" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>

[npm-downloads-image]: https://badgen.net/npm/dm/youcan
[npm-downloads-url]: https://npmcharts.com/compare/youcan?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/youcan
[npm-install-size-url]: https://packagephobia.com/result?p=youcan
[npm-url]: https://www.npmjs.com/package/youcan
[npm-version-image]: https://badgen.net/npm/v/youcan
