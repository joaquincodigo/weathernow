import SettingsButton from "./components/SettingsButton";
import WeatherWidget from "./components/WeatherWidget";
import Settings from "./components/Settings";

export default function Page() {
  return (
    <div>
      <WeatherWidget />
      <Settings />
      <SettingsButton />
    </div>
  );
}
