import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-800 relative">
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
        <Image
          src="/avatar.png"
          alt="avatar"
          priority
          quality={100}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Avatar;
