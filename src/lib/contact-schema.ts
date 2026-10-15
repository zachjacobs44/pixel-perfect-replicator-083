import { z } from "zod";

export const SERVICE_CONSENT_TEXT = "I agree to receive non-marketing text messages from Jurni Health, Inc. (Jurni GLP) at the number provided, including replies to my questions, reminders and check-ins, account and billing notices, and support. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel.";
export const MARKETING_CONSENT_TEXT = "I agree to receive marketing text messages from Jurni Health, Inc. (Jurni GLP) at the number provided, including offers and news about the service. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel.";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name.").max(120, "Name must be 120 characters or fewer."),
  email: z.string().trim().email("Please add a valid email address.").max(200, "Email must be 200 characters or fewer."),
  phone: z.string().trim().min(1, "Please add a US phone number.").max(40, "Please add a valid US phone number.")
    .regex(/^\+?[\d\s().-]+$/, "Please add a valid US phone number.")
    .transform((value) => value.replace(/\D/g, ""))
    .transform((value) => value.length === 11 && value.startsWith("1") ? value.slice(1) : value)
    .refine((value) => /^[2-9]\d{2}[2-9]\d{6}$/.test(value), "Please add a valid US phone number.")
    .transform((value) => `+1${value}`),
  message: z.string().trim().min(1, "Please add a message.").max(4000, "Message must be 4,000 characters or fewer."),
  consent_service: z.boolean(),
  consent_marketing: z.boolean(),
  accept_terms: z.boolean().refine((value) => value === true, "Please accept the Privacy Policy and Terms of Service."),
});