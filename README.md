# CS 1300 Development

## Organization of Components
There are 3 components:
- FilteredList: Main component in application. Contains the list of items as a property and manages sorting and filtering. 
- DisplayItem: Item card that shows product image and features, with an "Add to Cart" Button.
- CartItem: Item card for items in the cart. Contains controls to change item quantity.

## Data Flow
The app contains a list of all of the items. It is passed to FilteredList as a property. Each element of the list is passed to a card (CartItem or DisplayItem) for rendering. The onclick handlers for changing cart quantity are also passed to the item cards from FilteredList.

## State Changes
When the quantity of an item in the cart is changed through one of the buttons in the item cards, `this.forceUpdate()` is called in FilteredList to rerender the cart with correct quantities and prices.
