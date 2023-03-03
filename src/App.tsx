import { useTheme } from './config/context/ThemeContext';
import Base from './pages/Base';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
           <Base/>
        </div>
    );
}

export default App;
