const User = require("../lab2")

describe("User class - addToCart method", () => {

    let user;

    beforeEach(() => {
        user = new User("John Doe", "password123");
    });

    it("should add a product to the cart", () => {
        const product = { name: "mobile", price: 2500 };
        user.addToCart(product);

        expect(user.cart.length).toBe(1);
        expect(user.cart[0]).toEqual(product);
    });

    it("should handle adding an empty product object", () => {
        const product = {};
        user.addToCart(product);
        expect(user.cart.length).toBe(1);
        expect(user.cart[0]).toEqual(product);
    });

});
