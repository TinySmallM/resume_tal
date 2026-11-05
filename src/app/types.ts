import { StaticImageData } from "next/image";

export type NextImageType = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}
