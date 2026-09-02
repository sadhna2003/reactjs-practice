"use client";
import React from "react";

const Todo = () => {
    const [todo, setTodo] = React.useState("")
    const [todoList, setTodoList] = React.useState<string[]>([])
    const handleChange = (e: any) => {
        const val = e.target.value;
        // console.log("todo value", val)
        setTodo(val)
    }
    const handleAdd = () => {
        setTodoList((prev) => [...prev, todo])
        setTodo("")
    }
    const handledelete = (item: any) => {
        console.log("items to delete", item);

        setTodoList((todo) => {

            return todo.filter((i) => i !== item);

        })
    }
    console.log("todolist", todoList)

    return (
        <section className="container max-w-3xl font-sans w-full mx-auto my-10 p-6 border border-lime-400 rounded-sm bg-lime-200 h-screen">
            <h1 className="text-3xl font-bold text-center">Todo List</h1>
            <form className="flex flex-col gap-4 w-full mt-10 max-w-xl">
                <input
                    type="text"
                    value={todo}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    placeholder="Enter todo"
                    onChange={(e) => handleChange(e)}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    disabled={!todo}
                    className="block w-24 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    Add
                </button>
            </form>
            <ul className="text-xl py-4 px-4 font-semibold space-y-3 list-decimal">
                {todoList && todoList.map((item, index) => {
                    return (
                        <li key={index} className="">
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <span>{item}</span>
                                <button
                                    type="button"
                                    onClick={() => handledelete(item)}
                                    className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default Todo