import { Footer } from "flowbite-react";

export function SiteFooter() {
  return (
    <Footer container={true} className="bg-[#EAEDE8] text-[#7F9574] dark:bg-[#1F2937] dark:text-[#039275]">
      <div className="w-full">
          <p className="flex justify-center space-x-4 text-sm sm:text-base">
            Built and Designed by Komal Kiri
          </p>
        <p className="flex justify-center space-x-4 mt-2 text-xs sm:text-sm">
            Copyright © 2025 Komal Kiri. All Rights Reserved.
        </p>
      </div>
    </Footer>
  );
}
