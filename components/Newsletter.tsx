'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";
import axios from "axios";
import Loader from "@/components/ui/loader.tsx";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormData {
    email: string;
}

const initialState = {
    email: '',
};

export const Newsletter = () => {

    const [ formData, setFormData ] = useState<FormData>(initialState);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isSent, setIsSent ] = useState(false);
    const [ isEmailInvalid, setEmailInvalid ] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isInvalidEmail = !formData.email || !EMAIL_REGEX.test(formData.email);
        setEmailInvalid(isInvalidEmail);

        if (isInvalidEmail) {
            return;
        }

        setIsLoading(true);
        axios.post('/api/save-email', formData)
            .then(() => {
                setFormData(initialState)
                setIsLoading(false);
                setIsSent(true);
            })
            .catch(e => {
                console.log('Something went wrong', e);
                setIsLoading(false);
            })
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
                {!isSent && <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    We are launching beta test for selected group of business customers
                </p>
                }

                {isLoading &&
                    <div className="flex justify-center w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2">
                        <Loader/>
                    </div>
                }
                {isSent && <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Thank you for joining the waitlist!
                </p>
                }
                {!isLoading && !isSent && <form
                    className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="signmeup@gmail.com"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${isEmailInvalid && 'border-red-500'} bg-muted/50 dark:bg-muted/80`}
                        aria-label="email"
                    />
                    <Button>Join our waitlist</Button>
                </form>
                }
            </div>

            <hr className="w-11/12 mx-auto"/>
        </section>
    );
};
