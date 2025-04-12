import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "../ui/card"


import { Lightbulb, Layers, Bot, Zap } from "lucide-react"

const cardContent = [
    {
        title: "Real-Time Analytics",
        content:
            "Stay on top of sales trends with up-to-the-minute data tracking and reporting.",
        icon: <Lightbulb className="h-6 w-6 text-primary" />,
    },
    {
        title: "Multiple Platform Support",
        content:
            "Integrate with various e-commerce platforms, including Amazon and Shopify.",
        icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
        title: "AI Summarization",
        content:
            "Leverage powerful AI to extract concise insights from large data sets for quick decision-making.",
        icon: <Bot className="h-6 w-6 text-primary" />,
    },
    {
        title: "Automated Actions",
        content:
            "Streamline your workflow by automating routine tasks and triggers to save time and resources.",
        icon: <Zap className="h-6 w-6 text-primary" />,
    },
]

const Featuresection = () => {
    return (
        <section className="w-full bg-background py-12">
            <div className="container mx-auto px-4">

                <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                    Features
                </h2>


                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cardContent.map((feature, index) => (
                        <Card key={index} className="hover:shadow-lg">
                            <CardHeader className="flex items-center space-x-3">
                                {feature.icon}
                                <CardTitle className="text-lg font-semibold">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm text-muted-foreground">
                                    {feature.content}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Featuresection
