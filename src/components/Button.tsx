import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
        // Solid, minimal buttons (no gradients)
        primary: "bg-[#5FC883] text-black hover:bg-[#4CAF70] active:bg-[#43A566] shadow-sm",
        secondary: "bg-[#F7EA00] text-black hover:bg-[#E6DB00] active:bg-[#D1C800] shadow-sm",
        outline: "border-2 border-[#5FC883] text-[#111827] hover:bg-[#E5F4EC]",
        ghost: "text-[#4B5563] hover:bg-[#E5F4EC]",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-8 text-base",
        lg: "h-14 px-10 text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
