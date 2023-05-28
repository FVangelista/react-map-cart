## React Cart

When it comes to cart data structures we have a few options (arrays, objects and Map) to manipulate the data.

### Arrays and Objects

```js
// Array

const cartProducts = [
  { id: 1123, title: "productOne", price: 110 },
  { id: 2231, title: "productTwo", price: 500 },
];
```

```js
// Object

const cartProducts = {
  "id-1": { id: 1123, title: "productOne", price: 110 },
  "id-2": { id: 2231, title: "productTwo", price: 500 },
};
```

Arrays and Objects may not be that efficient, the first one is that every time we need to check for an element or update it, we'll need to iterate over the entire array, especially for larger databases can be expensive. Second, objects can only have keys as a string which can be limiting additionally dealing with inherited properties can be tricky.

### Map

A map is a built-in data structure, similar to Objects but it can store keys and values of any data type. It checks and updates based on the item's ids. We can easily perform these operations without affecting the other items on the list.

It's also possible to convert an array into a Map and vice-versa.

```js
// creating new Map instance
const list = new Map();

// Create items

list.set("productOne", {
  id: 1123,
  title: "ProductOne",
  price: 110,
  quantity: 3,
});
list.set("productTwo", {
  id: 2231,
  title: "ProductTwo",
  price: 500,
  quantity: 6,
});

// Get the value based on the key

const productOne = list.get("productOne");
// -> { id: 1, name: "Apple", price: 0.5, quantity: 3 }

// Checks if there is an item with that specific key

const productTwo = list.has("productThree");
// -> false

// Returns list length

const size = list.size;
// -> 2

// Delete from the list the specific key
list.delete("productTwo");
```
