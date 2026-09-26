import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Checks the practices-page password against the PRACTICES_PASSWORD
 * environment variable. Never sends the password back to the browser.
 */
export const checkPracticesPassword = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ password: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    const expected = process.env["PRACTICES_PASSWORD"] ?? "founding2026";
    return { ok: data.password.trim() === expected };
  });
