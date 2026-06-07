import { z } from "zod";

const sunsetDetailsSchema = z.object({
  golden_hour: z.string(),
  sunset: z.string(),
  dusk: z.string(),
  utc_offset: z.number(),
});
export const sunsetDetailsResponseSchema = z.object({
  results: sunsetDetailsSchema,
  status: z.string(),
  tzid: z.string(),
});

export type SunsetDetails = z.infer<typeof sunsetDetailsSchema>;
