import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+44)|(?:0))(?:7\d{9}|[1-9]\d{8,9})$/,
      'Please enter a valid UK phone number'
    )
    .optional()
    .or(z.literal('')),
  service: z.enum([
    'dog-walking',
    'puppy-visits',
    'pet-sitting',
    'pet-taxi',
    'meet-greet',
    'other',
  ]),
  petDetails: z
    .string()
    .min(10, 'Please tell us a bit more about your pet')
    .max(1000, 'Message must be less than 1000 characters'),
  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional(),
  honeypot: z.string().max(0, 'Spam detected'), // Hidden field for spam protection
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to us contacting you',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>