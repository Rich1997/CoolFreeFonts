import Navbar from './components/Navbar';
import Sampler from './components/Sampler';
import SettingsPanel from './components/SettingsPanel';
import { useTheme } from './config/context/ThemeContext';
import Base from './pages/Base';
import Rose from './pages/Rose';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <Base>
                <Navbar />
                <SettingsPanel />
                <div className="default-bg default-text text-4xl md:p-12 py-12">
                    <Sampler font="Rubik" minWeight={300} maxWeight={900} />
                    <Sampler font="Inter" minWeight={100} maxWeight={900} />
                    <Sampler font="Rubik" minWeight={300} maxWeight={900} />
                </div>
            </Base>
        </div>
    );
}

export default App;
