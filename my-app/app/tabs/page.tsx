"use client";
import React from "react";

enum TabValue {
    PROFILE = "profile",
    SETTINGS = "settings",
    ORDERS = "orders",
}

const Tabs = () => {
    const [tab, setTab] = React.useState<TabValue>(TabValue.PROFILE)
    const [activeTabContent , setActiveTabContent]= React.useState<any>()
    const tabOptions = [
        {
            "title": "Profile",
            "value": TabValue.PROFILE
        },
        {
            "title": "Setting",
            "value": TabValue.SETTINGS
        },
        {
            "title": "Orders",
            "value": TabValue.ORDERS
        }
    ]
    const tabContent = [
        {
            "key":TabValue.PROFILE,
            "title":"Profile",
            "items":[
                {
                    "text":"Name",
                    "value":"John Doe"
                },
                {
                    "text":"Email",
                    "value":"text@test.com"
                }
            ]
        },
        {
           "key":TabValue.SETTINGS,
            "title":"Settings",
            "items":[
                {
                    "text":"Notifications",
                    "value":"Enabled"
                },
                {
                    "text":"Theme",
                    "value":"Light"
                }
            ]  
        },
        {
           "key":TabValue.ORDERS,
            "title":"Orders",
            "items":[
                {
                    "text":"Order",
                    "value":"#1001"
                },
                {
                    "text":"Order",
                    "value":"#1002"
                }
            ]  
        }
    ]
    const handleClick = (val: TabValue) => {
        setTab(val)
    }
    React.useEffect(()=>{
        if (!tab)return
        const data = tabContent.filter((item)=>item.key===tab)
        setActiveTabContent(data[0])
    },[tab])
    console.log("active tab content",activeTabContent);
    
    return (
        <section className="container max-w-3xl w-full font-sans">
            <div className="flex flex-row gap-2 w-full justify-start items-center">
                {tabOptions.map((tabItem, index) => {
                    return (
                        <button
                            key={tabItem.value + index}
                            type="button"
                            className={["border text-center w-xs rounded-sm px-4 py-2 text-indigo-600 hover:bg-indigo-500 hover:text-white tansistion-all duration-300 ease-in-out cursor-pointer",
                                tab === tabItem.value ? "bg-indigo-500 text-white shadow-lg shadow-indigo-600 border-indigo-500" : "bg-white border-gray-100"
                            ].join(" ")}
                            onClick={() => handleClick(tabItem.value)}
                        >
                            {tabItem.title}
                        </button>
                    )
                })}
            </div>
            {/* Items */}
            <div className="flex flex-col gap-4 p-6 w-full bg-white rounded-sm border border-white mt-6">
               <h2 className="text-2xl font-semibold">{activeTabContent?.title}</h2>
               <ul className="space-y-2">
                {activeTabContent?.items.map((item:any ,index:number)=>{
                    return (
                        <li key={index} className="text-lg font-medium">
                            <span>{item.text}: {item.value}</span>
                        </li>
                    )
                })}
               </ul>
            </div>
        </section>
    )
}

export default Tabs