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

see all examples of usage [here](https://github.com/EcomVite/youcan/tree/main/src/examples)

## Products
| Product Action | Responsable Method |
| - | - |
| Get All Products | `myStore.products.getAllProducts()` |
| Get Products with sort, include, limit and page | ` myStore.products.getProducts({ })` |
| Get Product By ID | `myStore.products.getProductById("PRODUCT_ID")` |
| Create Product | `myStore.products.createProduct(productData)` |
| Update Product | `myStore.products.updateProduct("PRODUCT_ID", productData)` |





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
