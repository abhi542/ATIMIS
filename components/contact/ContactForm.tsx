"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { AlertTriangle, CheckCircle } from "lucide-react";

// Zod Schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid work email." }),
    company: z.string().optional(),
    role: z.string().min(1, { message: "Please select your role." }),
    message: z.string().min(10, {
        message: "Please describe what you are building in at least 10 characters.",
    }),
    budget: z.string().min(1, { message: "Please select a budget range." }),
    timeline: z.string().optional(),
});

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            role: "",
            message: "",
            budget: "",
            timeline: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Failed to submit inquiry");
            }

            setIsSuccess(true);
            toast.success("Inquiry received. We'll be in touch shortly.");
            form.reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-zinc-900/50 border border-green-500/20 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Message Received</h3>
                <p className="text-zinc-400">
                    Thank you for reaching out. We review every technical inquiry personally.
                    Expect a response within 24 hours if it&apos;s a fit.
                </p>
                <Button
                    className="mt-6 bg-white text-black hover:bg-zinc-200"
                    onClick={() => setIsSuccess(false)}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jane Doe" className="bg-zinc-900 border-zinc-800 focus:border-white transition-colors" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300">Work Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="jane@company.com" className="bg-zinc-900 border-zinc-800 focus:border-white transition-colors" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300">Company (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Acme Inc." className="bg-zinc-900 border-zinc-800 focus:border-white transition-colors" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300">Role</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-zinc-900 border-zinc-800 focus:ring-offset-0 focus:ring-0 focus:border-white transition-colors">
                                            <SelectValue placeholder="Select your role" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                                        <SelectItem value="Founder">Founder / CEO</SelectItem>
                                        <SelectItem value="CTO">CTO / VP Engineering</SelectItem>
                                        <SelectItem value="Product">Product Lead</SelectItem>
                                        <SelectItem value="Operations">Head of Ops</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-zinc-300">What are you building?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Describe the system, the constraint, or the problem..."
                                    className="bg-zinc-900 border-zinc-800 min-h-[120px] focus:border-white transition-colors resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300">Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-zinc-900 border-zinc-800 focus:ring-offset-0 focus:ring-0 focus:border-white transition-colors">
                                            <SelectValue placeholder="Est. Budget" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                                        <SelectItem value="10-25k">$10k - $25k</SelectItem>
                                        <SelectItem value="25-50k">$25k - $50k</SelectItem>
                                        <SelectItem value="50k+">$50k+</SelectItem>
                                        <SelectItem value="Not Sure">Not sure yet</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300">Timeline (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. ASAP, Q3 launch..." className="bg-zinc-900 border-zinc-800 focus:border-white transition-colors" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 py-6 text-lg font-medium" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Request Discovery Call"}
                </Button>
            </form>
        </Form>
    );
}
