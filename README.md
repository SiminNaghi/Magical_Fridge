# Magical Fridge 🪄

## An App for Smart Management of Fridge Contents

With its structured design and central outsourcing of main functions, as well as neutrality in styling and naming, the app is individually adaptable and dynamically scalable. It can be easily expanded or used for entirely different management processes.

## Implemented User Stories

### Product Management

1. **Display of Products:** Stored products are displayed in a clear and compact manner. The shelf life is represented using a traffic light system: green for products with a longer shelf life, yellow for products that should be consumed today, and red for expired products.
2. **Adding Products:** New products can be added via a form.
3. **Removing Products:** Individual products can be removed at the push of a button.
4. **Removing Expired Products:** All expired products can be removed at the push of a button.
5. **Sorting by Expiry Date:** Products can be sorted in ascending order of their expiry dates.
6. **Removing All Products:** There is an option to remove all stored products at once.

### Fridge Status

1. **Total Capacity:** Displays the total volume of the fridge.
2. **Number of Stored Products:** Shows the number of products in the fridge.
3. **Available Capacity:** Indicates the remaining available volume in the fridge. This is also supported by traffic light colors to inform the user when space is getting tight. If the contents exceed the fridge’s volume, the user is warned.
4. **Products Expiring Soon:** Number of products expiring within a day.
5. **Expired Products:** Number of products that have already expired.
6. **Smallest Product:** Volume of the smallest product in the fridge.
7. **Largest Product:** Volume of the largest product in the fridge.

## Getting Started

1. Clone the repository.
2. Run `npm install` to install the necessary packages.
3. Start the server with `npm run start-backend-with-seeding`.
4. Open the application in the frontend with `npm run dev` in a new terminal to begin managing your fridge.

---

Enjoy your Magical Fridge 🪄!
