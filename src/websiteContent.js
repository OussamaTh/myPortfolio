let navLinks = [
    { linkName: "Home", linkPath: "#" },
    { linkName: "About Me", linkPath: "#" },
    { linkName: "Skills", linkPath: "#" },
    { linkName: "Projects", linkPath: "#" },
    { linkName: "Experience", linkPath: "#" },
    { linkName: "Contact", linkPath: "#" },
]

export let defaultButtonStyle = "p-4 py-2 rounded-md font-[600] cursor-pointer hover:opacity-80 text-center";
export let sectionGlobalStyles = {
    titleStyle: "text-[var(--lightMode-text-color)] text-[2rem] text-center font-[900]"
}

export let SKILLS_INFO = [
    { id: 1, skillName: "HTML", imgPath: "/myPortfolio/icons/html.png", category: "front" },
    { id: 2, skillName: "CSS", imgPath: "/myPortfolio/icons/css.png", category: "front" },
    { id: 3, skillName: "Tailwind CSS", imgPath: "/myPortfolio/icons/tailwind.png", category: "front" },
    { id: 4, skillName: "Bootstrap", imgPath: "/myPortfolio/icons/bootstrap.png", category: "front" },
    { id: 5, skillName: "JavaScript", imgPath: "/myPortfolio/icons/js.png", category: "front" },
    { id: 6, skillName: "React JS", imgPath: "/myPortfolio/icons/react.png", category: "front" },
    { id: 7, skillName: "Redux", imgPath: "/myPortfolio/icons/redux.png", category: "front" },
    { id: 8, skillName: "PHP", imgPath: "/myPortfolio/icons/php.png", category: "back" },
    { id: 9, skillName: "MySql", imgPath: "/myPortfolio/icons/mysql.png", category: "back" },
    { id: 10, skillName: "Git", imgPath: "/myPortfolio/icons/git.png", category: "tools" },
    { id: 11, skillName: "GitHub", imgPath: "/myPortfolio/icons/github.png", category: "tools" },
    { id: 12, skillName: "Office", imgPath: "/myPortfolio/icons/office.png", category: "tools" },
    { id: 12, skillName: "NodeJs", imgPath: "/myPortfolio/icons/nodejs.png", category: "back" },
];

export let socialMedia = [
    {
        id: 1,
        socialName: "Instagram",
        socialLink: "",
        socialIcon: "/myPortfolio/icons/instagram.png"
    },
    {
        id: 2,
        socialName: "Whatsapp",
        socialLink: "",
        socialIcon: '/myPortfolio/icons/whatsapp.png'
    },
    {
        id: 3,
        socialName: "github",
        socialLink: "",
        socialIcon: '/myPortfolio/icons/gitIcon.png'
    },
    {
        id: 4,
        socialName: "linkedin",
        socialLink: "",
        socialIcon: '/myPortfolio/icons/linkedIn.png'
    },

]


export let SKILLS = [
    {
        skillGroupId: 0,
        groupName: "Front End",
        skills: [
            { id: 1, name: "html", bgColor: "#f16223" },
            { id: 2, name: "css", bgColor: "#2965f1" },
            { id: 3, name: "js", bgColor: "#F0DB4F " },
            { id: 4, name: "bootstrap", bgColor: "#080135" },
            { id: 5, name: "tailwind", bgColor: "#06b6d4" },
            { id: 6, name: "react js", bgColor: "#61DBFB" },
            { id: 7, name: "redux", bgColor: "#764abc" },
            { id: 8, name: "python", bgColor: "#24c700" },
        ]
    },
    {
        skillGroupId: 1,
        groupName: "Back End",
        skills: [
            { id: 1, name: "php", bgColor: "#787CB5" },
            { id: 2, name: "my sql", bgColor: "#78AA99" },
            { id: 3, name: "js", bgColor: "#F0DB4F " },
        ]
    },
]

export let projectCards = [
    {
        id: 1,
        name: "Notes App",
        description: " MyNottie is a basic CRUD fullstack app for notes, built with help of React Js and Supabase for the backend, with a simple aesthetic design, fully responsive.", url: "https://oussamath.github.io/notesApp/",
        date: "Octobre 2, 2025",
        thumbnail: "/myPortfolio/images/notesAppImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/myPortfolio/icons/react.png"
            }
        ]
    },
    {
        id: 2,
        name: "Tasks App",
        description: "This Tasks app is built with React Js, with a modern design, and it's easy to use with an impressive user experience. ", url: "https://oussamath.github.io/tasksApp/",
        date: "Octobre 25, 2025",
        thumbnail: "/myPortfolio/images/tasksAppImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/myPortfolio/icons/react.png"
            }
        ]
    },
    {
        id: 3,
        name: "Perfum Website",
        description: "This is a static website with a fully responsive and a modern design, built with React Js and Tailwind CSS", url: "https://oussamath.github.io/tasksApp/",
        date: "Octobre 25, 2025",
        thumbnail: "/myPortfolio/images/perfumWebsiteImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/myPortfolio/icons/react.png"
            },
            {
                id: 2,
                img: "/myPortfolio/icons/tailwind.png"
            },
        ]
    },
]

export { navLinks };