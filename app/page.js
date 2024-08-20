import SettingsButton from "./components/SettingsButton";
import WeatherWidget from "./components/WeatherWidget";
import Settings from "./components/Settings";

export default function Page() {
  let isSettingsOpen = true;

  return (
    <div>
      {isSettingsOpen ? <Settings /> : <WeatherWidget />}
      <div className="flex justify-center mt-1.5">
        <SettingsButton />
      </div>
    </div>
  );
}
