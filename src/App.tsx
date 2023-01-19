import Navbar from './components/Navbar';
import Sampler from './components/Sampler';

function App() {
    return (
        <div className="App default-bg w-full min-h-screen h-full text-colors">
            <Navbar />
            <div className="text-4xl p-12">
                <Sampler font="Rubik" />
                <Sampler font="Inter" />
                <Sampler font="Rubik" />
            </div>
        </div>
    );
}

export default App;
