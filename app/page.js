'use client'
import SettingsButton from "./components/SettingsButton";
import WeatherWidget from "./components/WeatherWidget";
import Settings from "./components/Settings";
import Card from "./components/Card";
import { useState } from "react";

export default function Page() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  let handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  return (
    <div>
      {/* {isSettingsOpen ? <Settings /> : <WeatherWidget />}
      <div className="flex justify-center mt-1.5">
        <SettingsButton handleSettingsClick={handleSettingsClick} />
      </div> */}
      <Card>
        <WeatherWidget/>
       </Card>
    </div>
  );
}
