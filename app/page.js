'use client'
import SettingsButton from "./components/SettingsButton";
import WeatherWidget from "./components/WeatherWidget";
import Settings from "./components/Settings";
import Card from "./components/Card";
import { useState } from "react";

export default function Page() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Card>
        {isSettingsOpen ? <Settings /> : <WeatherWidget />}
      </Card>
      <div className="flex justify-center">
        <SettingsButton handleSettingsClick={handleSettingsClick} />
      </div>
    </div>
  );
}
