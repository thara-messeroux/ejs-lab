// Import Express so we can build a web server
const express = require("express");

// Create the Express app (this is our server)
const app = express();

// Tell Express: "We are using EJS to render our HTML pages"
app.set("view engine", "ejs");

// Pick a port (a "door number" on our computer)
const PORT = 3000;

// ------------------------------------
// Lab Data (our "database" for the lab)
// ------------------------------------
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

// ------------------------------------
// Helper function (keeps routes clean)
// ------------------------------------
// Returns ONLY the menu items that match a category (ex: "mains")
const getItemsByCategory = (category) => {
    return RESTAURANT.menu.filter((item) => item.category === category);
};

// -------------------------------
// Routes (URLs users can visit)
// -------------------------------

// Home page
app.get("/", (req, res) => {
    // Render home.ejs and send the full restaurant object into the page
    res.render("home", { restaurant: RESTAURANT });
});

// Full menu page
app.get("/menu", (req, res) => {
    // Render menu.ejs and send just the menu array into the page
    res.render("menu", { menu: RESTAURANT.menu });
});

// Category page (dynamic route)
// Examples: /menu/mains, /menu/desserts, /menu/sides
app.get("/menu/:category", (req, res) => {
    // Grab the category from the URL
    const category = req.params.category;

    // Get only the items that match that category
    const items = getItemsByCategory(category);

    // Render category.ejs with the category name and the filtered list
    res.render("category", { category, items });
});

// Optional: friendly 404 handler (works reliably)
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
