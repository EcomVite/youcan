<p align="center">
  <img src="https://github.com/EcomVite/youcan/blob/main/youcan.webp" alt="youcan Logo">
</p>

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

[See Products documentation](https://developer.youcan.shop/store-admin/products/get)

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

[See Orders documentation](https://developer.youcan.shop/store-admin/orders/listing)

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

[See Reviews documentation](https://developer.youcan.shop/store-admin/product-reviews/listing)

## Categories
| Categories Action | Responsable Method |
| - | - |
| Get All Categories | `myStore.categories.getAllCategories()` |
| Get Categories with sort, include, limit and page | ` myStore.categories.getCategories({ })` |
| Get Category By ID | `myStore.categories.getCategoryById("CATEGORY_ID")` |
| Create Category | `myStore.categories.createCategory(categoryData)` |
| Update Category | `myStore.categories.updateCategory("CATEGORY_ID", categoryData)` |
| Delete Category | `myStore.categories.deleteCategory("CATEGORY_ID")` |

[See categories documentation](https://developer.youcan.shop/store-admin/categories/listing)

## Coupons
| Coupons Action | Responsable Method |
| - | - |
| Get All Coupons | `myStore.coupons.getAllCoupons()` |
| Get Coupons with sort, include, limit and page | ` myStore.coupons.getCoupons({ })` |
| Get Coupon By ID | `myStore.coupons.getCouponById("COUPON_ID")` |
| Create Coupon | `myStore.coupons.createCoupon(couponData)` |
| Update Coupon | `myStore.coupons.updateCoupon("COUPON_ID", couponData)` |
| Delete Coupon | `myStore.coupons.deleteCoupon("COUPON_ID")` |

[See Coupons documentation](https://developer.youcan.shop/store-admin/coupons/listing)

## Customers
| Customers Action | Responsable Method |
| - | - |
| Get All Customers | `myStore.customers.getAllCustomers()` |
| Get Customers with sort, include, limit and page | ` myStore.customers.getCustomers({ })` |
| Get Customer By ID | `myStore.customers.getCustomerById("CUSTOMER_ID")` |
| Create Customer | `myStore.customers.createCustomer(customerData)` |
| Update Customer | `myStore.customers.updateCustomer("CUSTOMER_ID", customerData)` |
| Delete Customer | `myStore.customers.deleteCustomer("CUSTOMER_ID")` |

[See Customers documentation](https://developer.youcan.shop/store-admin/customers/listing)

## Languages
| Languages Action | Responsable Method |
| - | - |
| Get All Languages | `myStore.languages.getLanguages()` |
| Set Default Languages | ` myStore.languages.setLanguageDefault("LANGUAGE_ID")` |

[See Languages documentation](https://developer.youcan.shop/store-admin/languages/listing)

## Menus
| Menus Action | Responsable Method |
| - | - |
| Get All Menus | `myStore.menus.getMenus()` |
| Get Menu By ID | `myStore.menus.getMenuById("MENU_ID")` |
| Create Menu | `myStore.menus.createMenu(menuData)` |
| Update Menu | `myStore.menus.updateMenu("MENU_ID", menuData)` |

[See Menus documentation](https://developer.youcan.shop/store-admin/menus/listing)

## Pages
| Pages Action | Responsable Method |
| - | - |
| Get All Pages | `myStore.pages.getAllPages()` |
| Get Customers with sort, include, limit, page, search | ` myStore.pages.getPages({ })` |
| Get Page By ID | `myStore.pages.getPageById("PAGE_ID")` |
| Create Page | `myStore.pages.createPage(pageData)` |
| Update Page | `myStore.pages.updatePage("PAGE_ID", pageData)` |
| Delete Page | `myStore.pages.deletePage("PAGE_ID")` |

[See Pages documentation](https://developer.youcan.shop/store-admin/pages/listing)

## Rest Hooks
| Rest Hooks Action | Responsable Method |
| - | - |
| Get All Rest Hooks | `myStore.resthooks.getAllResthooks()` |
| Subscribe to event Hook | `myStore.resthooks.resthookSubscribe("EVENT", "TARGET_URL")` |
| Unsubscribe from event Hook | `myStore.resthooks.resthookUnsubscribe("RESTHOOK_ID")` |

[See Rest Hooks documentation](https://developer.youcan.shop/store-admin/resthooks/listing)

## Product Inventory
| Product Inventory Action | Responsable Method |
| - | - |
| Incerement Product Inventory | `myStore.productInventory.IncrementProductInventory("PRODUCT_ID", inventoryData)` |
| Decerement Product Inventory | `myStore.productInventory.DecrementProductInventory("PRODUCT_ID", inventoryData)` |

[See Product Inventory documentation](https://developer.youcan.shop/store-admin/product-inventory/increment)

## Shipping Zones
| Shipping Zones Action | Responsable Method |
| - | - |
| Get All Shipping Zones | `myStore.coupons.getAllShippingZones()` |
| Get Shipping Zones with sort, include, limit and page | ` myStore.coupons.getShippingZones({ })` |
| Get Shipping Zone By ID | `myStore.coupons.getShippingZoneById("SHIPPING_ZONE_ID")` |
| Create Shipping Zone | `myStore.coupons.createShippingZone(shippingZoneData)` |
| Update Shipping Zone | `myStore.coupons.updateShippingZone("SHIPPING_ZONE_ID", shippingZoneData)` |
| Delete Shipping Zone | `myStore.coupons.deleteShippingZone("SHIPPING_ZONE_ID")` |
| Create Shipping Rate | `myStore.coupons.createShippingRate("SHIPPING_ZONE_ID", shippingRatesDate)` |
| Update Shipping Rate | `myStore.coupons.createShippingRate("SHIPPING_ZONE_ID", shippingRatesDate)` |

[See Shipping Zones documentation](https://developer.youcan.shop/store-admin/shipping-zones/listing)

## Store
| Store Action | Responsable Method |
| - | - |
| Get Store Details | `myStore.store.getDetails()` |
| Get Store Packs | `myStore.store.getPacks()` |
| Get Store Profit | `myStore.store.getProfit()` |
| Create Support Ticket | `myStore.store.createSupportTicket(ticketData)` |

[See Store documentation](https://developer.youcan.shop/store-admin/store/details)

## Upsells
| Upsells Action | Responsable Method |
| - | - |
| Get All Upsells | `myStore.coupons.getAllUpsells()` |
| Get Upsells with limit and page | ` myStore.coupons.getUpsells({ })` |
| Get Upsell By ID | `myStore.coupons.getUpsellById("UPSELL_ID")` |
| Create Upsell | `myStore.coupons.createUpsell(upsellData)` |
| Update Upsell | `myStore.coupons.updateUpsell("UPSELL_ID", upsellData)` |
| Delete Upsell | `myStore.coupons.deleteUpsell("UPSELL_ID")` |

[See Upsells documentation](https://developer.youcan.shop/store-admin/upsells/listing)


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
