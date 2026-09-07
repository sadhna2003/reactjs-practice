"use client";
import { Dialog } from "@/components/Dialog";
import React from "react";
type Product = {
    id: number;
    name: string;
    description: string;
    rating: number;
    price: number;
    imageUrl: string;
};

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export const products = [
    {
        id: 1,
        name: "MacBook Air M3",
        description: "13-inch laptop with Apple M3 chip, 8GB RAM and 256GB SSD.",
        rating: 4.8,
        price: 99999,
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
        id: 2,
        name: "Wireless Keyboard",
        description: "Slim wireless keyboard with comfortable low-profile keys.",
        rating: 4.5,
        price: 2499,
        imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
        id: 3,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
        rating: 4.4,
        price: 1499,
        imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
        id: 4,
        name: "27-inch 4K Monitor",
        description: "Ultra HD 4K monitor with vibrant colors and slim bezels.",
        rating: 4.7,
        price: 28999,
        imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        description: "Premium wireless headphones with active noise cancellation.",
        rating: 4.9,
        price: 29990,
        imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    },
    {
        id: 6,
        name: "Mechanical Gaming Keyboard",
        description: "RGB mechanical keyboard with tactile switches for gaming.",
        rating: 4.6,
        price: 5999,
        imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212",
    },
    {
        id: 7,
        name: "USB-C Hub",
        description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card and charging support.",
        rating: 4.3,
        price: 2999,
        imageUrl: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    },
    {
        id: 8,
        name: "Webcam Full HD",
        description: "1080p webcam with built-in microphone for meetings and streaming.",
        rating: 4.2,
        price: 3499,
        imageUrl: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da",
    },
    {
        id: 9,
        name: "Laptop Stand",
        description: "Adjustable aluminum laptop stand designed for better posture.",
        rating: 4.6,
        price: 1999,
        imageUrl: "https://images.unsplash.com/photo-1652198145075-b41c363792d3",
    },
    {
        id: 10,
        name: "Portable SSD 1TB",
        description: "High-speed portable SSD with 1TB storage and USB-C connectivity.",
        rating: 4.8,
        price: 8499,
        imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
    },
];

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
    const [productsList, setProductsList] = React.useState<Product[]>(products);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            return prevItems.filter(item => item.id !== productId);
        }
        );
    };
    console.log("cart items", cartItems);
    const handleIncrement = (product: Product) => {
        addToCart(product);
    }
    const handleDecrement = (productId: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return prevItems.filter(item => item.id !== productId);
            }
        });
    };
    return (
        <div className="container mx-auto p-4 w-full max-w-6xl font-sans">
            <h1 className="text-3xl font-semibold text-center">Shopping Cart</h1>
            <div className="mt-8 flex flex-row justify-end w-full items-center">
                <button
                    onClick={() => setIsDialogOpen(true)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    View Cart ({cartItems.length})
                </button>
            </div>
            <div className="grid grid-cols-3 items-center justfiy-center h-full gap-4 mt-6">
                {productsList.map((product) => (
                    <div key={product.id} className="border border-sky-400 bg-white rounded-sm p-4 flex flex-col h-full w-full items-center">
                        <div className="flex justify-center items-center w-full h-32 mb-4">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600 text-center">{product.description}</p>
                        <p className="text-yellow-500">Rating: {product.rating}</p>
                        <p className="text-green-600 font-bold mb-3">₹{product.price}</p>
                        {cartItems.length !== 0 && cartItems.some(item => item.id === product.id) ? (
                            <div className="flex flex-row gap-2 items-center justify-center w-full mt-auto">
                                <button
                                    onClick={() => handleIncrement(product)}
                                    className="mt-auto w-auto text-xl font-medium cursor-pointer px-4 py-2 rounded border border-sky-400 hover:border-blue-600 transition-colors duration-300"
                                >
                                    +
                                </button>
                                {cartItems.filter(item => item.id === product.id).length > 0 && (
                                    <span className="text-lg font-semibold w-24 text-center">
                                        {cartItems.filter(item => item.id === product.id).length > 0 ? cartItems.find(item => item.id === product.id)?.quantity : 0}
                                    </span>
                                )}
                                <button
                                    onClick={() => handleDecrement(product.id)}
                                    className="mt-auto w-auto text-xl font-medium cursor-pointer px-4 py-2 rounded border border-sky-400 hover:border-red-600 transition-colors duration-300"
                                >
                                    -
                                </button>
                            </div>
                        ) : (


                            <button
                                onClick={() => addToCart(product)}
                                className="mt-auto w-full cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* cart dialog with it detail */}
            <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} containerClassName="!max-w-2xl !w-full">
                {cartItems.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col gap-3 w-full">
                        <h2 className="text-2xl font-semibold">Cart Items</h2>

                        <ul className="">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between items-center gap-3 border-b border-sky-100 py-2">
                                    <span>{item.name}</span>
                                    <span className="text-left">₹{item.price}</span>

                                    <button
                                        onClick={() => handleIncrement(productsList.find(product => product.id === item.id)!)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        +
                                    </button>
                                    <span className="text-left">Qty: {item.quantity}</span>
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {cartItems.length > 0 && (
                            <div className="flex flex-col gap-2 mt-4">
                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-semibold">Total Qty:</span>
                                    <span className="font-bold">
                                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-semibold">Total:</span>
                                    <span className="font-bold">
                                        ₹{cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
                                    </span>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setIsDialogOpen(false)}
                            className="mt-4 w-full cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Checkout
                        </button>
                    </div>

                )}
            </Dialog>
        </div>
    );
};


export default ShoppingCartPage;