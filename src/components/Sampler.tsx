import { ChangeEvent, useEffect, useState } from 'react';
import { useTheme, Theme } from '../config/context/ThemeContext';
import RangeInput from './RangeInput';

const Sampler = (props: { font: string }) => {
    const { theme } = useTheme();
    const [mode, setMode] = useState(theme);
    const [state, setState] = useState<React.CSSProperties>({
        fontWeight: '400',
        fontSize: '210px',
        lineHeight: 1,
        letterSpacing: '0em',
        fontFamily: props.font,
    });
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        setToggle((prevState) => !prevState);
    }, [theme, mode]);

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        let value = evt.target.value;
        if (evt.target.name === 'fontSize') value += 'px';
        if (evt.target.name === 'letterSpacing') value += 'em';
        setState({
            ...state,
            [evt.target.name]: value,
        });
    }

    const getStyles = (value: any, min: number, max: number) => {
        return {
            backgroundImage:
                (theme === Theme.light && mode === Theme.light) ||
                (theme === Theme.dark && mode === Theme.dark)
                    ? 'linear-gradient(#fff, #fff)'
                    : 'linear-gradient(#000, #000)',
            backgroundColor:
                (theme === Theme.light && mode === Theme.light) ||
                (theme === Theme.dark && mode === Theme.dark)
                    ? '#262626'
                    : '#d4d4d4',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${
                ((parseFloat(value) - min) * 100) / (max - min)
            }% 100%`,
        };
    };

    return (
        <div
            className={`p-12 -mb-[1px] ${
                mode === 'dark'
                    ? 'default-outline default-bg default-text'
                    : 'default-selected selected'
            }`}
        >
            <div className="flex flex-wrap items-center justify-between gap-8 pb-8">
                <div className="h4">{props.font}</div>
                <div className="flex-wrap gap-8 md-mobile-flex">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <div className="text-xs text-right">Weight</div>
                            <div className="text-xs text-right">
                                {state.fontWeight}
                            </div>
                        </div>
                        <RangeInput
                            name="fontWeight"
                            min="100"
                            max="900"
                            defaultValue={state.fontWeight}
                            onChange={handleChange}
                            style={getStyles(state.fontWeight, 100, 900)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <div className="text-xs text-right">Size</div>
                            <div className="text-xs text-right">
                                {state.fontSize}
                            </div>
                        </div>
                        <RangeInput
                            name="fontSize"
                            min="12"
                            max="280"
                            defaultValue={String(state.fontSize).slice(0, -2)}
                            onChange={handleChange}
                            style={getStyles(state.fontSize, 12, 280)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <div className="text-xs text-right">Tracking</div>
                            <div className="text-xs text-right">
                                {state.letterSpacing}
                            </div>
                        </div>
                        <RangeInput
                            name="letterSpacing"
                            min="-0.05"
                            max="0.1"
                            defaultValue={String(state.letterSpacing).slice(
                                0,
                                -2
                            )}
                            step="0.01"
                            onChange={handleChange}
                            style={getStyles(state.letterSpacing, -0.05, 0.1)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <div>Mode</div>
                    <button
                        className={`px-2 py-1 border ${
                            mode === 'dark' ? 'default-text' : 'text-alt'
                        } ${
                            toggle === false
                                ? 'border-neutral-300 hover:border-white'
                                : 'border-neutral-800 hover:border-black'
                        }`}
                        onClick={() =>
                            setMode(mode === 'dark' ? Theme.light : Theme.dark)
                        }
                    >
                        {toggle === false ? 'White' : 'Black'}
                    </button>
                </div>
            </div>
            <div
                className={`md-mobile-block w-full min-h-fit h-full overflow-hidden py-8 bg-transparent default-text dark:caret-zinc-400 caret-zinc-800 focus:outline-none break-all ${
                    mode === 'dark'
                        ? 'default-bg default-text'
                        : 'bg-alt text-alt'
                }`}
                style={state}
                contentEditable
                suppressContentEditableWarning={true}
            >
                {props.font}
            </div>
        </div>
    );
};

export default Sampler;
