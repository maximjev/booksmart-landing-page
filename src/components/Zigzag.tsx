import calendarFrame from "../assets/calendar_frame.png";
import bookFrame from "../assets/book_frame.png";
import weekFrame from "../assets/week_frame.png";
import { Badge } from "@/components/ui/badge.tsx";

export const Zigzag = () => {
    return (
        <section id="zigzag">
            <hr className="w-11/12 mx-auto"/>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        How It{" "}
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Works{" "}
                    </span>
                        Step-by-Step Guide
                    </h2>
                    <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
                        Simple Scheduling in 3 Steps
                    </p>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={calendarFrame} width={352}
                                     height={625} alt="Calendar Frame"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <Badge
                                        variant="default"
                                        className="text-sm text-white"
                                    >Grab Your Spot Before Launch!</Badge>
                                    <p className="text-xl text-secondary my-4">See your daily appointments with ease. Book new clients or manage existing bookings with a click.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={weekFrame} width={352}
                                     height={625} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <Badge
                                        variant="default"
                                        className="text-sm text-white">Save Hours Every Week – Try BookSmart!</Badge>
                                    <p className="text-xl text-secondary my-4">Get a complete overview of your week. Identify prime open slots to maximize your schedule.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={bookFrame} width={352}
                                     height={625} alt="Booking frame"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <Badge
                                        variant="default"
                                        className="text-sm text-white">Ditch Commissions, Choose BookSmart!</Badge>
                                    <p className="text-xl text-secondary my-4">Let clients book their own appointments 24/7 with your custom link. Available times update automatically.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
