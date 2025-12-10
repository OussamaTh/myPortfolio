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
            {id: 1,skillName: "HTML",imgPath: "public/icons/html.png"},
            {id: 2,skillName: "CSS",imgPath: "public/icons/css.png"},
            {id: 3,skillName: "Tailwind CSS",imgPath: "public/icons/tailwind.png"},
            {id: 4,skillName: "Bootstrap",imgPath: "public/icons/bootstrap.png"},
            {id: 5,skillName: "JavaScript",imgPath: "public/icons/js.png"},
            {id: 6,skillName: "React JS",imgPath: "public/icons/react.png"},
            {id: 7,skillName: "Redux",imgPath: "public/icons/redux.png"},
        ]
    },
    {
        groupName: "Back End",
        skillsList: [
            {id: 1,skillName: "PHP",imgPath: "public/icons/php.png"},
            {id: 2,skillName: "MySql",imgPath: "public/icons/mysql.png"},
        ]
    },
    {
        groupName: "Tools",
        skillsList: [
            {id: 1,skillName: "Git",imgPath: "public/icons/git.png"},
            {id: 2,skillName: "GitHub",imgPath: "public/icons/github.png"},
            {id: 3,skillName: "Office",imgPath: "public/icons/office.png"},
        ]
    },
];

export { navLinks };