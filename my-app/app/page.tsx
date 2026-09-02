import Image from "next/image";
import Link from "next/link";
const navLink = [
  {
    link: "/counter",
    label:"Basic Counter"
  },
  {
    link:"/todo",
    label:"Todo"
  }
]
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-sky-200 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white sm:items-start">
         This Project is for Practicing my frontend skills
         <ul className="flex flex-col justify-start items-start gap-4 w-full h-full py-10">
           {navLink.map((nav)=>{
            return (
              <li className="text-blue-500 underline hover:text-blue-600">
                <Link href={nav.link} className="block">
                  {nav.label}
                </Link>
              </li>
            )
           })}

          </ul>
      </main>
    </div>
  );
}
