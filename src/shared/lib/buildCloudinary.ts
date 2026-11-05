export const buildCloudinary = (publicId: string) => {
  const cloudinaryPath = 'https://res.cloudinary.com'
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  return `${cloudinaryPath}/${cloudName}/image/upload/f_auto,q_auto/${publicId}`;
};
