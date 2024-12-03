import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
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
