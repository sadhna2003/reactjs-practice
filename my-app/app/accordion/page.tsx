"use client";
import React from "react";
import faqs from "@/app/accordion/faq.json";
const Accordion = () => {
    const [activeFaq , setActiveFaq] = React.useState(1)
  return (
    <section className="font-sans w-full container mx-auto max-w-3xl p-6">
      <h1 className="font-semibold text-2xl text-center">Frequently asked Question</h1>
      <ul className="mt-6 space-y-2 p-4">
        {faqs.faqs.map((item)=>{
            return (
                <li key={item.id} className="bg-indigo-100 p-4 flex flex-col justify-between item-center w-full h-full border border-indigo-100 rounded-sm">
                   <button
                    type="button"
                    className="flex flex-row justify-between cursor-pointer item-center w-full h-full"
                    onClick={()=> setActiveFaq(item.id)}
                   >
                    <p>{item.question}</p>
                    <p className="text-lg font-medium text-indigo-600">{activeFaq === item.id ? "-":"+"}</p>
                   </button>
                   <div className={[activeFaq === item.id ? "block text-base mt-2 pt-2 border-t border-indigo-200 transition-all ease-in-out duration-200":"hidden"].join("")}>
                    {item.answer}
                   </div>
                </li>
            )
        })}
      </ul>
    </section>
  )
}
export default Accordion