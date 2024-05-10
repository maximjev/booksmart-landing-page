import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import steveJobs from "../assets/steve-jobs.png";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* Testimonial */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage
                            alt=""
                            src={steveJobs}
                        />
                        <AvatarFallback>SH</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">Steve Jobs</CardTitle>
                        <CardDescription>The co-founder of Apple</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>When we support local businesses, we're supporting our neighbours, our friends and our families.</CardContent>
            </Card>

            {/* Team */}
            <Card
                className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src="https://avatars.githubusercontent.com/u/23365083?v=4"
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Max</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Software Engineer
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        I'm dedicated to building products that don't suck.
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            href="https://github.com/maximjev"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Github icon</span>
                            <GitHubLogoIcon className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://twitter.com/maximjev"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">X icon</span>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-foreground w-5 h-5"
                            >
                                <title>X</title>
                                <path
                                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/maximjev"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20"/>
                        </a>
                    </div>
                </CardFooter>
            </Card>

            {/* Pricing */}
            <Card
                className="absolute top-[190px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-end">

                        <Badge
                            variant="default"
                            className="text-sm text-white"
                        >
                            Fixed Price
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">$19.99</span>
                        <span className="text-muted-foreground"> only</span>
                    </div>

                    <CardDescription>
                        Say Goodbye to Hefty Fees, Say Hello to BookSmart.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <a href="#newsletter">
                        <Button className="w-full">Join our waitlist</Button>
                    </a>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4"/>

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {[ "Zero Commission", "Transparency You Can Trust", "Full Control, Affordable Cost" ].map(
                            (benefit: string) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                  <Check className="text-green-500"/>{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card
                className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon/>
                    </div>
                    <div>
                        <CardTitle>Save Time, Grow Your Business</CardTitle>
                        <CardDescription className="text-md mt-2">
                            BookSmart simplifies booking so you can focus on your clients.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
