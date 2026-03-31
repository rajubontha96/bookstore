const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    category: "Self Help",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    description: "Build good habits and break bad ones."
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    category: "Finance",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    description: "Financial education and mindset."
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    category: "Fiction",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    description: "Journey of dreams and destiny."
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 350,
    category: "Motivation",
    image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
    description: "Success principles and mindset."
  },
  {
    id: 5,
    title: "Ikigai",
    author: "Hector Garcia",
    price: 450,
    category: "Self Help",
    image: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
    description: "Japanese secret to long life."
  },
  {
    id: 6,
    title: "Deep Work",
    author: "Cal Newport",
    price: 500,
    category: "Productivity",
    image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
    description: "Focus and productivity mastery."
  },
  {
    id: 7,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 420,
    category: "Spiritual",
    image: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    description: "Living in the present moment."
  },
  {
    id: 8,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 380,
    category: "Business",
    image: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
    description: "Startup and innovation guide."
  },
  {
    id: 9,
    title: "Start With Why",
    author: "Simon Sinek",
    price: 370,
    category: "Leadership",
    image: "https://images-na.ssl-images-amazon.com/images/I/71V0X4k8zHL.jpg",
    description: "Leadership and inspiration."
  },
  {
    id: 10,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 600,
    category: "History",
    image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    description: "History of humankind."
  },
  {
    id: 11,
    title: "Homo Deus",
    author: "Yuval Noah Harari",
    price: 620,
    category: "History",
    image: "https://images-na.ssl-images-amazon.com/images/I/71N9Q7wZ1IL.jpg",
    description: "Future of humanity."
  },
  {
    id: 12,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 480,
    category: "Finance",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    description: "Money habits and behavior."
  },
  {
    id: 13,
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 550,
    category: "Motivation",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q7f6cVYpL.jpg",
    description: "Mental toughness and discipline."
  },
  {
    id: 14,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 450,
    category: "Self Help",
    image: "https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg",
    description: "A counterintuitive approach."
  },
  {
    id: 15,
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: 300,
    category: "Motivation",
    image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    description: "Life lessons and advice."
  },
  {
    id: 16,
    title: "Wings of Fire",
    author: "A.P.J Abdul Kalam",
    price: 350,
    category: "Biography",
    image: "https://images-na.ssl-images-amazon.com/images/I/71KKZlVjbwL.jpg",
    description: "Autobiography of Kalam."
  },
  {
    id: 17,
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    price: 320,
    category: "Self Help",
    image: "https://images-na.ssl-images-amazon.com/images/I/71zytzrg6lL.jpg",
    description: "Spiritual success story."
  },
  {
    id: 18,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    price: 410,
    category: "Self Help",
    image: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    description: "Mindfulness and clarity."
  },
  {
    id: 19,
    title: "You Can Win",
    author: "Shiv Khera",
    price: 280,
    category: "Motivation",
    image: "https://images-na.ssl-images-amazon.com/images/I/71l9dK3L3FL.jpg",
    description: "Winning mindset."
  },
  {
    id: 20,
    title: "Eat That Frog",
    author: "Brian Tracy",
    price: 330,
    category: "Productivity",
    image: "https://images-na.ssl-images-amazon.com/images/I/71xw6pK4fIL.jpg",
    description: "Time management strategies."
  }
];

export default books;