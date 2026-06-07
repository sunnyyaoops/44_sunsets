import { z } from "zod";

const webcamImageSchema = z.object({
  icon: z.url(),
  thumbnail: z.url(),
  preview: z.url(),
});
const webcamSchema = z.object({
  title: z.string(),
  webcamId: z.number().int(),
  images: z.object({
    current: webcamImageSchema,
  }),
});
export const webcamResponseSchema = z.object({
  total: z.number().int(),
  webcams: z.array(webcamSchema),
});

export type Webcam = z.infer<typeof webcamSchema>;
export type WebcamImage = z.infer<typeof webcamImageSchema>;
