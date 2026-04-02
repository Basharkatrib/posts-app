import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const Avatar = ({ src, alt = "User avatar", className = "" }: AvatarProps) => {
  return (
    <div className={`relative rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        /* صورة افتراضية أو حرف في حال عدم وجود مسار للصورة */
        <div className="w-full h-full flex items-center justify-center text-white text-[10px] font-bold">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};