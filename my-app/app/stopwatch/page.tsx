"use client";
import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <section className='bg-white border border-rose-500 rounded-md container mx-auto max-w-xl w-full p-6 mt-10'>
            <h1 className="text-4xl font-semibold text-black text-center pb-4">
                {formatTime(time)}
            </h1>

            <div className='flex flex-row justify-center items-center gap-2 w-full text-white'>
                <button type="button" className='px-2.5 py-1 disabled:opacity-60 disabled:cursor-not-allowed bg-rose-500 rounded-md cursor-pointer' onClick={handleStart}
                    disabled={isRunning}>Start</button>
                <button type="button" className='px-2.5 py-1 bg-rose-500 rounded-md cursor-pointer' onClick={handlePause}
                    disabled={!isRunning}>Pause</button>
                <button type="button" className='px-2.5 py-1 bg-rose-500 rounded-md cursor-pointer' onClick={handleReset}>Reset</button>
            </div>
        </section>
    )
}
export default Stopwatch