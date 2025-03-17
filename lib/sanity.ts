import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "is3suwxh",
  dataset: "production",
  apiVersion: "2025-03-15",
  useCdn: false,
});


const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);