import { ChangeEvent, useEffect, useState } from 'react';
import FontSize from '../assets/images/icons/FontSize';
import FontWeight from '../assets/images/icons/FontWeight';
import LetterSpacing from '../assets/images/icons/LetterSpacing';
import { useSettings } from '../context/SettingsContext';
import { useTheme, Theme } from '../context/ThemeContext';
import RangeInput from './RangeInput';

const Sampler = (props: {
    font: string;
    minWeight: number;
    maxWeight: number;
}) => {
    const { theme } = useTheme();
    const { settings } = useSettings();
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
                    ? 'linear-gradient(var(--primary-light), var(--primary-light))'
                    : 'linear-gradient(var(--primary-dark), var(--primary-dark))',
            backgroundColor:
                (theme === Theme.light && mode === Theme.light) ||
                (theme === Theme.dark && mode === Theme.dark)
                    ? 'var(--secondary-dark)'
                    : 'var(--secondary-light)',
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
                    <div className="flex pr-8 items-center gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="flex gap-2 items-center h5-bold">
                                <FontWeight size={10} />
                                Weight
                            </div>
                            <div className="text-right w-7">
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
                    <div className="flex pr-8 items-center gap-4">
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center h5-bold">
                                <FontSize size={10} />
                                Size
                            </div>
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
                            onChange={handleChange}
                            value={
                                settings.fontSize === state.fontSize
                                    ? parseInt(
                                          String(settings.fontSize).slice(0, -2)
                                      )
                                    : undefined
                            }
                            style={getStyles(state.fontSize, 12, 280)}
                        />
                    </div>
                    <div className="flex pr-8 items-center gap-4">
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center h5-bold">
                                <LetterSpacing size={12} />
                                Tracking
                            </div>
                            <div className="text-right w-12">
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
                    <div className="w-24 h5-bold">Color mode</div>
                    <button
                        className={`${toggleState(
                            'text-tertiary-dark',
                            'text-primary-dark'
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
                            'text-primary-light',
                            'text-tertiary-light'
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
                style={{ fontFamily: props.font }}
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
