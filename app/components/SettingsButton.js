import React from "react";
import Image from "next/image";

export default function SettingsButton() {
  return (
    <button className="rounded-full bg-slate-200 hover:bg-slate-300 p-2">
      <Image
        src="images/settings_icon_black.svg"
        alt="Settings Icon"
        width={30}
        height={30}
      />
    </button>
  );
}
