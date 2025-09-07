import React from "react";
import Image from "next/image";

type DoctorCardProps = {
  image: any;
  title: string;
  description: string;
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <>
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="100%"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-0 w-full p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </>
  );
};

export default DoctorCard;
