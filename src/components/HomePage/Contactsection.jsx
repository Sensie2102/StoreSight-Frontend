import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ContactSection = () => {
    return (
        <section className="bg-background py-12">
            <div className="container mx-auto px-4 text-center">

                <h2 className="mb-4 text-3xl font-bold text-foreground">
                    Ready to Streamline Your Workflow?
                </h2>

                <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                    Join thousands of teams already using this application to boost their
                    productivity.
                </p>


                <div className="flex justify-center-safe flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">

                    <Button className="min-h-[48px] py-4 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center space-x-2">
                        <span>Contact Us</span>
                        {/* <ArrowRight className="h-4 w-4" /> */}
                        {/* <span>&gt;</span> */}
                    </Button>


                    <Button variant="outline" className="min-h-[48px] py-4 px-8 text-lg flex items-center space-x-2">
                        <span>Schedule a Demo</span>
                        {/* <ArrowRight className="h-4 w-4" /> */}
                        {/* <span>&gt;</span> */}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
