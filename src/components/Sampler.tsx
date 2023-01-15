import { ChangeEvent, useState } from 'react';

const Sampler = () => {
    const [state, setState] = useState<React.CSSProperties>({
        fontWeight: '400',
        fontSize: '100px',
        lineHeight: 1,
        letterSpacing: '0em',
    });

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
            background: '#262626 linear-gradient(#fff, #fff) no-repeat',
            backgroundSize: `${
                ((parseFloat(value) - min) * 100) / (max - min)
            }% 100%`,
        };
    };

    return (
        <div className="p-12 out -mb-[1px]">
            <div className="flex flex-wrap items-center justify-between gap-8 pb-8">
                <div className="h4">Inter</div>
                <div className="flex-wrap gap-8 md-mobile-flex">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <div className="text-xs text-right">Weight</div>
                            <div className="text-xs text-right">
                                {state.fontWeight}
                            </div>
                        </div>
                        <input
                            className="slider"
                            name="fontWeight"
                            type="range"
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
                        <input
                            className="slider"
                            name="fontSize"
                            type="range"
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
                        <input
                            className="slider"
                            name="letterSpacing"
                            type="range"
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
            </div>
            <div
                className="md-mobile-block w-full min-h-fit h-full overflow-hidden py-8 bg-transparent text-colors dark:caret-zinc-400 caret-zinc-800 focus:outline-none placeholder:dark:text-white placeholder:text-black break-all"
                style={state}
                contentEditable
                suppressContentEditableWarning={true}
            >
                Hello world!!
            </div>
        </div>
    );
};

export default Sampler;
