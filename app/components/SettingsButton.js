import React from "react";
import Image from "next/image";

export default function SettingsButton({handleSettingsClick}) {
  return (
    <button onClick={handleSettingsClick}  className="rounded-full bg-slate-200 hover:bg-slate-300 p-2">
      <Image
        src="images/settings_icon_black.svg"
        alt="Settings Icon"
        width={40}
        height={40}
      />
    </button>
  );
}
