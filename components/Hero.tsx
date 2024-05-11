'use client'
import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Input } from './ui/input.tsx';
import React from "react";

export const Hero = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed!");
    };
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10" data-aos="fade-up">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              BookSmart
            </span>{" "}
                    </h1>{" "}
                    <br/>
                    Client management{" "}
                    <h2 className="inline">
            <span
                className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Made easy
            </span>{" "}

                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Simplify your scheduling, streamline your business, and focus on what matters.
                </p>


                <div className="space-y-4 md:space-y-0 md:space-x-6 xs:w-full">
                    <form
                        className="flex flex-col w-full md:flex-row gap-4 md:gap-2"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            placeholder="signmeup@gmail.com"
                            className="bg-muted/50 dark:bg-muted/80 md:w-6/12 w-full"
                            aria-label="email"
                        />
                        <Button className="md:w-3/12 w-full">Get early access</Button>
                    </form>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
                <HeroCards/>
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};
