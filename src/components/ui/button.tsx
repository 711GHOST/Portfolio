import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-neon-cyan text-space font-semibold shadow-neon-cyan hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-[1.03]",
        neon:
          "relative bg-transparent text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 hover:shadow-neon-cyan shimmer-sweep",
        gradient:
          "text-white font-semibold bg-aurora bg-[length:200%_auto] hover:bg-[position:100%_0] shadow-neon-purple",
        ghost:
          "text-foreground/80 hover:text-neon-cyan hover:bg-white/5",
        outline:
          "border border-white/15 bg-white/5 text-foreground hover:border-neon-cyan/50 hover:text-neon-cyan",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
