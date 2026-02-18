
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto", className)}
        >
            {children}
        </section>
    );
}
