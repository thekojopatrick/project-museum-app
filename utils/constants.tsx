export interface SlidesProps {
    options?: any;
}

const slideOptions = {
    type: "loop",
    autoplay: true,
    cover: true,
    rewind: true,
    lazyLoad: "nearby",
};

const scrollOptions = {
    type: "loop",
    gap: "2rem",
    drag: "free",
    arrows: false,
    pagination: false,
    autoScroll: {
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: true,
        speed: 1,
    },
};

const navlinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "Exhibition",
        path: "/museum",
    },
    {
        id: 3,
        name: "Giftshop",
        path: "/shop",
    },
    {
        id: 4,
        name: "About",
        path: "/#about",
    },
];

const footer = [
    {
        id: 1,
        styleName: "explore-the-web",
        title: "explore the web",
        navlinks: [
            {
                name: "About",
                path: "#about",
            },
            {
                name: "Shop",
                path: "#shop",
            },
            {
                name: "Exhibition",
                path: "#exhibition",
            },
        ],
    },
    {
        id: 2,
        styleName: "contact-info",
        title: "contact us",
        body: `Rijksmuseum Amsterdam <br /> Post bus 74888 1070 DN Amsterdam
    <br />E-mail: info@rijksmuseum.nl <br /> Telefoonnummer: +31 (0) 20 6747000`,
    },
    {
        id: 3,
        styleName: "find-us",
        title: "find us elsewhere",
        navlinks: [
            {
                name: "facebook",
                path: "/facebook",
            },
            {
                name: "instagram",
                path: "/instagram",
            },
            {
                name: "twitter",
                path: "/twitter",
            },
        ],
    },
    {
        id: 4,
        styleName: "additional-information",
        navlinks: [
            {
                name: " Terms and conditions",
                path: "/",
            },
            {
                name: "Privacy",
                path: "/",
            },
            {
                name: "Cookie Privacy",
                path: "/",
            },
            {
                name: "Right withdrawal",
                path: "/",
            },
        ],
    },
];

const carousels = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1577049090931-f8ae58117bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=50",
        title: "Visit the Rijks museum",
        desc: "The museum of the Netherlands",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1544213456-bc37cb97df74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        title: "Come With us",
        desc: "A guided tour is more than just a story being told.",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1499762524203-b47f7b1b26a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        title: "Stories",
        desc: "Discover the series of the Rijksmuseum",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1544474866-0be353c6ab44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1034&q=80",
        title: "Enjoy museum",
        desc: "The museum of the Netherlands",
    },
];

const features = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1606148267475-6c13e4cdb56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        title: "Rijks Museum Shop",
        desc: "Explore the shop & it’s gift",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Incoming Events",
        desc: "Explore incoming events",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1575742732910-cfc9019e62f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Grab An Online Tickets",
        desc: "Buy or book your visit online",
    },
];
const about = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1591946499681-8eb1adaf193c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        title: "What we do",
        desc: "In the Rijksmuseum you get to know the greatest works of art down to the smallest details. You can also know everything about ourselves. Why do we do what we do? What are we doing regarding sustainability? Read it here.",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1580687580441-96dbadf8f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        title: "Vision and mission",
        desc: "The Rijksmuseum is the museum of the Netherlands. In 2013, an entirely renovated Rijksmuseum opened its doors to the public. They are greeted by a stunning building, amazing interior design, wonderful exhibitions, lively events, and many fine amenities for young and old.",
    },
];
const shop = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1541702193626-24fe3a9fbed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
        title: "Rijks Museum Shop",
        desc: "Bring a piece of Rijksmuseum into your home with these unique home accessories, inspired by artworks from the collection.",
    },
];
const exhibitions = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1563000215-e31a8ddcb2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Slavery",
        desc: "This exhibition about slavery takes the form of personal and real-life stories rather than abstract concepts. There are stories from Brazil, Suriname, and the Caribbean, and from South African and Asia.",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
        title: "REMBRANDT VAN RIJN",
        desc: "Storyteller, rebel, father and widower. Rembrandt's life was turbulent, his talent unparalleled. Here you will find 16 of his most important works. They tell you more about his life and career.",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1541665234574-8e72eb7cd028?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        title: "OPERATION NIGHTWATCH",
        desc: "Operation Night Watch is the largest and most wide-ranging research and conservation project in the history of Rembrandt’s masterpiece. The goal of Operation Night Watch is the long-term preservation of the painting.",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1566954979172-eaba308acdf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
        title: "MISSING PIECES",
        desc: "Imagine: you want to move a large painting, but it doesn't fit in the new place. What do you do? In the case of The Night Watch in 1715, they cut off pieces. These have never been found.",
    },
];

const images = [
    "https://picsum.photos/id/334/400/300",
    "https://picsum.photos/id/239/400/600",
    "https://picsum.photos/id/238/400/500",
    "https://picsum.photos/id/212/400/600",
    "https://picsum.photos/id/213/400/300",
    "https://picsum.photos/id/214/400/600",
    "https://picsum.photos/id/215/400/400",
    "https://picsum.photos/id/116/400/600",
    "https://picsum.photos/id/117/400/500",
];

const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
];

export {
    images,
    colorArray,
    slideOptions,
    scrollOptions,
    carousels,
    features,
    about,
    shop,
    exhibitions,
    footer,
    navlinks,
};
