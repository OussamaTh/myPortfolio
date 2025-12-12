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
    titleStyle: "text-[var(--lightMode-text-color)] text-[2rem] text-center font-[900] border-bottom-2"
}

export let SKILLS_INFO = [
    {
        groupName: "Front End",
        skillsList: [
            {id: 1,skillName: "HTML",imgPath: "/myPortfolio/icons/html.png"},
            {id: 2,skillName: "CSS",imgPath: "/myPortfolio/icons/css.png"},
            {id: 3,skillName: "Tailwind CSS",imgPath: "/myPortfolio/icons/tailwind.png"},
            {id: 4,skillName: "Bootstrap",imgPath: "/myPortfolio/icons/bootstrap.png"},
            {id: 5,skillName: "JavaScript",imgPath: "/myPortfolio/icons/js.png"},
            {id: 6,skillName: "React JS",imgPath: "/myPortfolio/icons/react.png"},
            {id: 7,skillName: "Redux",imgPath: "/myPortfolio/icons/redux.png"},
        ]
    },
    {
        groupName: "Back End",
        skillsList: [
            {id: 1,skillName: "PHP",imgPath: "myPortfolio/icons/php.png"},
            {id: 2,skillName: "MySql",imgPath: "myPortfolio/icons/mysql.png"},
        ]
    },
    {
        groupName: "Tools",
        skillsList: [
            {id: 1,skillName: "Git",imgPath: "myPortfolio/icons/git.png"},
            {id: 2,skillName: "GitHub",imgPath: "myPortfolio/icons/github.png"},
            {id: 3,skillName: "Office",imgPath: "myPortfolio/icons/office.png"},
        ]
    },
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

export { navLinks };