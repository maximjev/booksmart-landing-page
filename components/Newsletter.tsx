'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React from "react";

export const Newsletter = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed!");
    };

    return (
        <section id="newsletter" data-aos="fade-up">
            <hr className="w-11/12 mx-auto"/>

            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Are you ready to accelerate your {" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            business?
          </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    We are launching beta test for selected group of business customers
                </p>

                <form
                    className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="signmeup@gmail.com"
                        className="bg-muted/50 dark:bg-muted/80 "
                        aria-label="email"
                    />
                    <Button>Join our wait-list</Button>
                </form>
            </div>

            <hr className="w-11/12 mx-auto"/>
        </section>
    );
};
