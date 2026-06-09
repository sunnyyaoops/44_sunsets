import { z } from "zod";

const sunsetDetailsSchema = z.object({
  golden_hour: z.string().nullable(),
  sunset: z.string().nullable(),
  dusk: z.string().nullable(),
  utc_offset: z.number(),
});
export const sunsetDetailsResponseSchema = z.object({
  results: sunsetDetailsSchema,
  status: z.string(),
  tzid: z.string(),
});

export type SunsetDetails = z.infer<typeof sunsetDetailsSchema>;
