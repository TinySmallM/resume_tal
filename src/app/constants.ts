import { buildCloudinary } from "@/shared/lib/buildCloudinary";

import { NextImageType } from "./types";

export const CV_HREF = 'https://hirehi.ru/resume/lRg9SeR8vf';
export const GITHUB_HREF = 'https://github.com/TinySmallM';
export const GITHUB_CREATE_AT = "2019-02-07T18:47:18Z"; //get api /users/TinySmallM

export const RESUME_GALLERY: NextImageType[] = [
  { 
    alt: 'Resume_ru', 
    src: `${buildCloudinary('resume.jpg')}`,
    width: 800, 
    height: 1131
  },
];
