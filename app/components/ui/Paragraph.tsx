'use client'
import React, { forwardRef, HtmlHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@app/libs/utils'


const paragraphVariants = cva(
  'max-w-prose mb-2 text-center text-slate-700 dark:text-slate-300',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

interface ParagraphProps
  extends HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    )
  },
)

Paragraph.displayName = 'Paragraph'

export default Paragraph