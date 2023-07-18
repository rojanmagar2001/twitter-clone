import Image from "next/image";
import React from "react";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

const ProfileImage = ({ src, className = "" }: ProfileImageProps) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? null : (
        <Image
          src={src}
          className={`${className}`}
          quality={100}
          fill
          alt="profile image"
        />
      )}
    </div>
  );
};

export default ProfileImage;
