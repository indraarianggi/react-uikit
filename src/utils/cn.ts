import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes with proper precedence.
 * 
 * This function combines clsx for conditional class names and tailwind-merge
 * to ensure proper Tailwind class precedence and deduplication.
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500', {
 *   'text-white': isActive,
 *   'text-gray-500': !isActive
 * })
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 