import { ChangeEvent, useEffect, useState } from 'react';
import { useSettings } from '../config/context/SettingsContext';
import { useTheme, Theme } from '../config/context/ThemeContext';
import RangeInput from './RangeInput';

const Sampler = (props: {
    font: string;
    minWeight: number;
    maxWeight: number;
}) => {
    const { theme } = useTheme();
    const { settings, setSize } = useSettings();
    const [mode, setMode] = useState(theme);
    const [state, setState] = useState<React.CSSProperties>({
        fontWeight: String(props.minWeight + 200),
        fontSize: settings.fontSize,
        lineHeight: 1,
        letterSpacing: '0em',
        fontFamily: props.font,
    });

    const [toggle, setToggle] = useState(theme + mode);

    useEffect(() => {
        setToggle(theme + mode);
    }, [theme, mode]);

    useEffect(() => {
        setState({ ...state, fontSize: settings.fontSize });
    }, [settings]);

    function toggleState(ifTrue: string, ifFalse: string) {
        if (toggle === 'darkdark' || toggle === 'lightlight') return ifTrue;
        else return ifFalse;
    }

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
            className={`md:p-12 p-6 -mb-[1px] ${
                mode === 'dark'
                    ? 'default-outline default-bg default-text'
                    : 'default-selected'
            }`}
        >
            <div className="flex flex-wrap items-center justify-between gap-8 pb-8 text-xs">
                <div className="h5-custom">{props.font}</div>
                <div className="flex-wrap gap-8 md-mobile-flex">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <div className="text-right">Weight</div>
                            <div className="text-right w-8">
                                {state.fontWeight}
                            </div>
                        </div>
                        <RangeInput
                            className={`${toggleState(
                                'slider-toggle-dark',
                                'slider-toggle'
                            )}`}
                            name="fontWeight"
                            min={props.minWeight}
                            max={props.maxWeight}
                            defaultValue={state.fontWeight}
                            onChange={handleChange}
                            style={getStyles(
                                state.fontWeight,
                                props.minWeight,
                                props.maxWeight
                            )}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <div className="text-right">Size</div>
                            <div className="text-right w-10">
                                {state.fontSize}
                            </div>
                        </div>
                        <RangeInput
                            className={`${toggleState(
                                'slider-toggle-dark',
                                'slider-toggle'
                            )}`}
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
                            <div className="text-right">Tracking</div>
                            <div className="text-right w-14">
                                {state.letterSpacing}
                            </div>
                        </div>
                        <RangeInput
                            className={`${toggleState(
                                'slider-toggle-dark',
                                'slider-toggle'
                            )}`}
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
                <div className="flex flex-wrap items-center gap-4 text-xs">
                    <div className="w-24">Color mode</div>
                    <button
                        className={`${toggleState(
                            'text-neutral-600',
                            'text-black'
                        )}`}
                        disabled={
                            toggle === 'lightdark' || toggle === 'darklight'
                                ? true
                                : false
                        }
                        onClick={() =>
                            setMode(mode === 'dark' ? Theme.light : Theme.dark)
                        }
                    >
                        White
                    </button>
                    <button
                        className={`${toggleState(
                            'text-white',
                            'text-neutral-400'
                        )}`}
                        disabled={
                            toggle === 'lightdark' || toggle === 'darklight'
                                ? false
                                : true
                        }
                        onClick={() =>
                            setMode(mode === 'dark' ? Theme.light : Theme.dark)
                        }
                    >
                        Black
                    </button>
                </div>
            </div>
            <div
                className={`md-mobile-block w-full min-h-fit h-full overflow-hidden py-8 bg-transparent default-text focus:outline-none break-all ${
                    mode === 'dark'
                        ? 'default-bg default-text'
                        : 'bg-alt text-alt'
                } ${toggleState('caret-zinc-400', 'caret-zinc-800')}`}
                style={state}
                contentEditable
                suppressContentEditableWarning={true}
                spellCheck={false}
            >
                {props.font}
            </div>
            <div
                className={`py-4 text-md md-mobile-block-reverse w-full min-h-fit h-full overflow-hidden bg-transparent default-text focus:outline-none break-all ${
                    mode === 'dark'
                        ? 'default-bg default-text'
                        : 'bg-alt text-alt'
                } ${toggleState('caret-zinc-400', 'caret-zinc-800')}`}
                contentEditable
                suppressContentEditableWarning={true}
                spellCheck={false}
            >
                {props.font}
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-between pt-8 text-xs">
                <div>Open Source</div>
                <div>Edit</div>
                <div>Download</div>
            </div>
        </div>
    );
};

export default Sampler;
