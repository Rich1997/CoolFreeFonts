import Navbar from './components/Navbar';
import Sampler from './components/Sampler';
import { useTheme } from './config/context/ThemeContext';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <div className="default-bg default-text w-full min-h-screen h-full">
                <Navbar />
                <div className="default-bg default-text text-4xl p-12">
                    <Sampler font="Rubik" />
                    <Sampler font="Inter" />
                    <Sampler font="Rubik" />
                </div>
            </div>
        </div>
    );
}

export default App;
