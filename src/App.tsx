import Navbar from './components/Navbar';
import Sampler from './components/Sampler';
import { useTheme } from './config/context/ThemeContext';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`App ${theme} w-full min-h-screen h-full}`}>
            <Navbar />
            <div className="default-bg default-text text-4xl p-12">
                <Sampler font="Rubik" />
                <Sampler font="Inter" />
                <Sampler font="Rubik" />
            </div>
        </div>
    );
}

export default App;
