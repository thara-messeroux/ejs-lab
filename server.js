// Import express so we can use it
const express = require("express");

// Create the Express app
const app = express();

// Tell Express to use EJS as the template engine
app.set("view engine", "ejs");

// Define the port number
const PORT = 3000;

// -------------------------------
// Lab Data (restaurant info)
// -------------------------------
const RESTAURANT = {
    name: "The Green Byte Bistro",
    isOpen: true,
    address: "742 Evergreen Rd, Mapleview, OS 45622",
    phone: "555-321-9876",
    menu: [
        {
            id: 1,
            name: "Mystical Quinoa Mushroom Burger",
            price: 12.0,
            rating: 4.0,
            category: "mains",
            details:
                "A vegetarian burger made with a quinoa and mushroom patty. It will take you to another realm.",
        },
        {
            id: 2,
            name: "Berry Berry Cheesecake",
            price: 9.11,
            rating: 4.1,
            category: "desserts",
            details:
                "A creamy cheesecake bursting with flavor. A mix of berries in every bite.",
        },
        {
            id: 3,
            name: "Moo-sive Rigatoni",
            price: 17.0,
            rating: 5.0,
            category: "mains",
            details:
                "A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You'll keep coming back for more!",
        },
        {
            id: 4,
            name: "Pumpkin Pi Squared",
            price: 8.14,
            rating: 5.0,
            category: "desserts",
            details:
                "A delightful pumpkin dessert, squared and spiced to perfection.",
        },
        {
            id: 5,
            name: "Stochastic String Bean Fries",
            price: 11.25,
            rating: 5.0,
            category: "sides",
            details:
                "Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.",
        },
    ],
};

// -------------------------------
// Routes
// -------------------------------
app.get("/", (req, res) => {
    // Send the RESTAURANT object into the EJS page as "restaurant"
    res.render("home", { restaurant: RESTAURANT });
});

app.get("/menu", (req, res) => {
    // Render menu.ejs and send the full menu array
    // "menu" is the variable name the EJS file will use
    res.render("menu", { menu: RESTAURANT.menu });
});

app.get("/menu/:category", (req, res) => {
    // Grab the category from the URL (ex: "mains")
    const category = req.params.category;

    // Filter menu items so we only keep ones that match this category
    const filteredItems = RESTAURANT.menu.filter((item) => item.category === category);

    // Render category.ejs and send:
    // 1) the category name
    // 2) the filtered list of menu items
    res.render("category", { category, items: filteredItems });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
