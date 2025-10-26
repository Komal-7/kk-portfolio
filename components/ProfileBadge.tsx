import Image from "next/image";

export function ProfileBadge() {
  return (
    <div className="fixed top-3 right-3 z-50">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-34 md:h-34 rounded-full overflow-hidden border-4 border-[#7F9574] dark:border-[#039275] shadow-lg">
        <Image
          src="/avatar-full.png"
          alt="Komal Kiri"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
