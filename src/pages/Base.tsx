import Navbar from "../components/Navbar";
import Sampler from "../components/Sampler";
import SettingsPanel from "../components/SettingsPanel";
import '../css/base.css'

const Base = () => {
  return (
    <div className="default-bg default-text w-full min-h-screen h-full">
      <Navbar />
      <SettingsPanel />
      <div className="default-bg default-text text-4xl md:p-12 py-12">
        <Sampler font="Rubik" minWeight={300} maxWeight={900} />
        <Sampler font="Inter" minWeight={100} maxWeight={900} />
        <Sampler font="Rubik" minWeight={300} maxWeight={900} />
      </div>
    </div>
  );
};

export default Base;