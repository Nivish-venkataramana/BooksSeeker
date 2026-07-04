const sampleListings = [
    {
        title: "'The Catcher in the Rye' at Whitefield Knowledge Library",
        description: "J.D. Salinger's coming-of-age novel about identity, adolescence, and self-discovery.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
            filename: "bookimage",
        },
        price: 599,
        location: "Whitefield",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.7500, 12.9698],
        },
        category: "Literature",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Operating System Concepts' at Marathahalli Technical Library",
        description: "A comprehensive guide to operating systems, processes, memory management, and file systems.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781119456339-L.jpg",
            filename: "bookimage",
        },
        price: 1399,
        location: "Marathahalli",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6974, 12.9592],
        },
        category: "Technology",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Discrete Mathematics and Its Applications' at Basavanagudi Academic Library",
        description: "A standard textbook covering logic, sets, combinatorics, graphs, and proofs.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781259676512-L.jpg",
            filename: "bookimage",
        },
        price: 1099,
        location: "Basavanagudi",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5713, 12.9417],
        },
        category: "Mathematics",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Robbins Basic Pathology' at Jayanagar Medical Library",
        description: "A trusted pathology textbook used by medical students around the world.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780323353175-L.jpg",
            filename: "bookimage",
        },
        price: 2299,
        location: "Jayanagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5830, 12.9250],
        },
        category: "Medical",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Brief Answers to the Big Questions' at KR Puram Science Library",
        description: "Stephen Hawking answers humanity's biggest scientific questions.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781984819192-L.jpg",
            filename: "bookimage",
        },
        price: 699,
        location: "KR Puram",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6959, 13.0089],
        },
        category: "Science",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Charlotte's Web' at JP Nagar Children's Library",
        description: "A heartwarming story of friendship between a pig and a spider.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780061124952-L.jpg",
            filename: "bookimage",
        },
        price: 349,
        location: "JP Nagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5856, 12.9077],
        },
        category: "Children",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Story of My Experiments with Truth' at Ramanagara Heritage Library",
        description: "Mahatma Gandhi's autobiography describing his philosophy and life's journey.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780807059098-L.jpg",
            filename: "bookimage",
        },
        price: 499,
        location: "Ramanagara",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.2815, 12.7219],
        },
        category: "History",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'1984' at Vijayanagar Readers Library",
        description: "George Orwell's classic dystopian novel about surveillance and freedom.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
            filename: "bookimage",
        },
        price: 599,
        location: "Vijayanagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5396, 12.9719],
        },
        category: "Fiction",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Diary of a Young Girl' at Mandya Public Library",
        description: "Anne Frank's inspiring diary written during World War II.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg",
            filename: "bookimage",
        },
        price: 549,
        location: "Mandya",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [76.8958, 12.5223],
        },
        category: "Authors",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Lean Startup' at HSR Innovation Library",
        description: "Eric Ries explains how startups can build products efficiently through continuous innovation.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
            filename: "bookimage",
        },
        price: 799,
        location: "HSR Layout",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6387, 12.9116],
        },
        category: "New Arrivals",
        owner: "6a41f3c3609b56e970108f6e",
    },
    {
        title: "'Python Crash Course' at BTM Layout Coding Library",
        description: "A beginner-friendly guide to Python programming with practical projects.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781593279288-L.jpg",
            filename: "bookimage",
        },
        price: 999,
        location: "BTM Layout",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6101, 12.9166],
        },
        category: "Technology",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Linear Algebra Done Right' at Yeshwanthpur Academic Library",
        description: "A modern and intuitive introduction to linear algebra concepts.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9783319110790-L.jpg",
            filename: "bookimage",
        },
        price: 1199,
        location: "Yeshwanthpur",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5560, 13.0280],
        },
        category: "Academic",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Selfish Gene' at Hassan Science Library",
        description: "Richard Dawkins explores evolution from the perspective of genes.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780199291151-L.jpg",
            filename: "bookimage",
        },
        price: 749,
        location: "Hassan",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [76.0965, 13.0033],
        },
        category: "Science",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Kite Runner' at Chikkaballapur City Library",
        description: "Khaled Hosseini's moving novel about friendship, betrayal, and redemption.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
            filename: "bookimage",
        },
        price: 649,
        location: "Chikkaballapur",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.7315, 13.4355],
        },
        category: "Fiction",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Power of Habit' at Kolar Readers Library",
        description: "Charles Duhigg explains the science behind habits and how to change them.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
            filename: "bookimage",
        },
        price: 699,
        location: "Kolar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [78.1326, 13.1377],
        },
        category: "All Books",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Intelligent Investor' at Chikkamagaluru Finance Library",
        description: "Benjamin Graham's timeless guide to value investing and financial wisdom.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg",
            filename: "bookimage",
        },
        price: 999,
        location: "Chikkamagaluru",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [75.7720, 13.3161],
        },
        category: "All Books",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Secret Garden' at Shivajinagar Children's Library",
        description: "A beloved children's classic about friendship, hope, and nature.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780064401883-L.jpg",
            filename: "bookimage",
        },
        price: 399,
        location: "Shivajinagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6033, 12.9866],
        },
        category: "Children",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Computer Networks' at Banashankari Engineering Library",
        description: "A detailed guide to networking principles, protocols, and internet architecture.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780132126953-L.jpg",
            filename: "bookimage",
        },
        price: 1299,
        location: "Banashankari",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5473, 12.9255],
        },
        category: "Technology",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Brothers Karamazov' at Fraser Town Literary Library",
        description: "Fyodor Dostoevsky's philosophical masterpiece exploring faith and morality.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg",
            filename: "bookimage",
        },
        price: 899,
        location: "Fraser Town",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6143, 13.0033],
        },
        category: "Literature",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Ikigai' at Devanahalli Community Library",
        description: "Discover the Japanese philosophy for living a long, happy, and meaningful life.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg",
            filename: "bookimage",
        },
        price: 549,
        location: "Devanahalli",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.7118, 13.2422],
        },
        category: "New Arrivals",
        owner: "6a41f3c3609b56e970108f6e",
    }, {
        title: "'Atomic Habits' at Indiranagar Community Library",
        description: "James Clear explains how tiny changes lead to remarkable results.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
            filename: "bookimage",
        },
        price: 699,
        location: "Indiranagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6412, 12.9784],
        },
        category: "New Arrivals",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Clean Code' at Electronic City Technical Library",
        description: "Robert C. Martin's classic guide to writing clean, maintainable code.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
            filename: "bookimage",
        },
        price: 1499,
        location: "Electronic City",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6603, 12.8399],
        },
        category: "Technology",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Rich Dad Poor Dad' at Anekal Public Library",
        description: "Robert Kiyosaki shares lessons about money, investing, and financial independence.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
            filename: "bookimage",
        },
        price: 499,
        location: "Anekal",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6950, 12.7084],
        },
        category: "All Books",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Alchemist' at Chandapura Readers Library",
        description: "Paulo Coelho's inspiring novel about following your dreams.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
            filename: "bookimage",
        },
        price: 399,
        location: "Chandapura",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.7042, 12.8006],
        },
        category: "Fiction",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Introduction to Algorithms' at Bommasandra Engineering Library",
        description: "The world's leading textbook on algorithms and data structures.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780262046305-L.jpg",
            filename: "bookimage",
        },
        price: 2399,
        location: "Bommasandra",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6903, 12.8168],
        },
        category: "Academic",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Harry Potter and the Philosopher's Stone' at Sarjapur Children's Library",
        description: "The magical adventure of Harry Potter begins at Hogwarts.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg",
            filename: "bookimage",
        },
        price: 699,
        location: "Sarjapur",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.7835, 12.8608],
        },
        category: "Children",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'A Brief History of Time' at Attibele Science Library",
        description: "Stephen Hawking explains the mysteries of the universe.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
            filename: "bookimage",
        },
        price: 799,
        location: "Attibele",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.7735, 12.7808],
        },
        category: "Science",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Wings of Fire' at Jigani Heritage Library",
        description: "Dr. A.P.J. Abdul Kalam's inspiring autobiography.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
            filename: "bookimage",
        },
        price: 449,
        location: "Jigani",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6362, 12.7854],
        },
        category: "Authors",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Great Gatsby' at Koramangala Literary Library",
        description: "F. Scott Fitzgerald's timeless novel about wealth, love, and the American Dream.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
            filename: "bookimage",
        },
        price: 549,
        location: "Koramangala",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6245, 12.9352],
        },
        category: "Literature",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Gray's Anatomy' at Hosur Medical Library",
        description: "A comprehensive reference for anatomy and medical education.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780702077050-L.jpg",
            filename: "bookimage",
        },
        price: 2599,
        location: "Hosur",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.8253, 12.7409],
        },
        category: "Medical",
        owner: "6a41f3c3609b56e970108f6e",
    }, {
        title: "'The Lord of the Rings' at Banashankari Central Library",
        description: "J.R.R. Tolkien's epic fantasy masterpiece following the journey to destroy the One Ring.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg",
            filename: "bookimage",
        },
        price: 1499,
        location: "Banashankari",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5473, 12.9255],
        },
        category: "Fiction",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Silent Patient' at MG Road City Library",
        description: "A gripping psychological thriller by Alex Michaelides with an unforgettable twist.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
            filename: "bookimage",
        },
        price: 699,
        location: "MG Road",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6097, 12.9756],
        },
        category: "New Arrivals",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Design Patterns' at Jayanagar Software Library",
        description: "The classic Gang of Four book introducing reusable object-oriented software design patterns.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
            filename: "bookimage",
        },
        price: 1899,
        location: "Jayanagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5830, 12.9250],
        },
        category: "Technology",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Higher Engineering Mathematics' at Peenya Engineering Library",
        description: "An indispensable reference for engineering students covering advanced mathematical concepts.",
        image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybzv3NRnfRy7Go1x3YySmmdl7J-JNPhtoMqptIZEuXg&s=10",
            filename: "bookimage",
        },
        price: 1199,
        location: "Peenya",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5151, 13.0339],
        },
        category: "Mathematics",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Guyton and Hall Textbook of Medical Physiology' at Victoria Medical Library",
        description: "A world-renowned textbook explaining the principles of human physiology.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780323597128-L.jpg",
            filename: "bookimage",
        },
        price: 2899,
        location: "Victoria Layout",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6085, 12.9565],
        },
        category: "Medical",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Gene: An Intimate History' at Kengeri Science Library",
        description: "Siddhartha Mukherjee explores the history and future of genetics.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9781476733524-L.jpg",
            filename: "bookimage",
        },
        price: 899,
        location: "Kengeri",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.4828, 12.9081],
        },
        category: "Science",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Diary of a Wimpy Kid' at Nagarbhavi Children's Library",
        description: "Jeff Kinney's hilarious illustrated novel loved by children worldwide.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780810993136-L.jpg",
            filename: "bookimage",
        },
        price: 499,
        location: "Nagarbhavi",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.5000, 12.9673],
        },
        category: "Children",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'India's Struggle for Independence' at Shivajinagar History Library",
        description: "An authoritative account of India's freedom movement by Bipan Chandra.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780140107814-L.jpg",
            filename: "bookimage",
        },
        price: 799,
        location: "Shivajinagar",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6033, 12.9866],
        },
        category: "History",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'The Odyssey' at Cox Town Literary Library",
        description: "Homer's timeless epic chronicling Odysseus's adventurous journey home.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780140268867-L.jpg",
            filename: "bookimage",
        },
        price: 649,
        location: "Cox Town",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6175, 13.0055],
        },
        category: "Literature",
        owner: "6a41f3c3609b56e970108f6e",
    },

    {
        title: "'Long Walk to Freedom' at Ulsoor Biography Library",
        description: "Nelson Mandela's inspiring autobiography about resilience and leadership.",
        image: {
            url: "https://covers.openlibrary.org/b/isbn/9780316548182-L.jpg",
            filename: "bookimage",
        },
        price: 899,
        location: "Ulsoor",
        country: "India",
        geometry: {
            type: "Point",
            coordinates: [77.6245, 12.9846],
        },
        category: "Authors",
        owner: "6a41f3c3609b56e970108f6e",
    }
];

module.exports = { data: sampleListings };