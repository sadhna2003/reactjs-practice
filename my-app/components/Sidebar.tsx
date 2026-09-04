import Link from "next/link";
const navLink = [
    {
        link: "/counter",
        label: "Basic Counter"
    },
    {
        link: "/todo",
        label: "Todo"
    },
    {
        link: "/toggle",
        label: "Show/Hide Password"
    },
    {
        link: "character-counter",
        label: "Character Counter"
    },
    {
        link:'search-filter',
        label:"Search Filter"
    },
    {
        link:'tabs',
        label:'Tab Component'
    },
    {
        link:'accordion',
        label:"Accordion Component"
    },
    {
        link:'pagination',
        label:"Pagination Concept"
    },
    {
        link:'fetch-api',
        label:'Fetch Api Example'
    },
    {
        link:'stopwatch',
        label:'Stopwatch'
    }
]

export const Sidebar = () => {
    return (
        <ul className="flex flex-col justify-start items-start gap-4 w-full h-full">
            {navLink.map((nav, index) => {
                return (
                    <li key={index} className="text-blue-500 underline hover:text-blue-600">
                        <Link href={nav.link} className="block">
                            {nav.label}
                        </Link>
                    </li>
                )
            })}

        </ul>
    )
}