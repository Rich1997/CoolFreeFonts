import RangeInput from './RangeInput';
import { useTheme, Theme } from '../config/context/ThemeContext';
import { ChangeEvent } from 'react';
import { useSettings } from '../config/context/SettingsContext';
import CircleHalfStroke from '../assets/images/icons/CircleHalfStroke';

const SettingsPanel = () => {
    const { theme, setTheme } = useTheme();
    const { settings, setSize } = useSettings();

    function toggleState(ifTrue: string, ifFalse: string) {
        if (theme === 'dark') return ifTrue;
        else return ifFalse;
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        let value = evt.target.value;
        if (evt.target.name === 'size') value += 'px';
        setSize(value);
    }

    const getStyles = (value: any, min: number, max: number) => {
        return {
            backgroundImage:
                theme === Theme.dark
                    ? 'linear-gradient(#fff, #fff)'
                    : 'linear-gradient(#000, #000)',
            backgroundColor: theme === Theme.dark ? '#262626' : '#d4d4d4',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${
                ((parseFloat(value) - min) * 100) / (max - min)
            }% 100%`,
        };
    };

    return (
        <div className="md:px-12 px-0 pt-12 w-full">
            <div className="h-[1px] dark:bg-neutral-800 bg-neutral-300 w-full"></div>
            <div className="flex items-center justify-between gap-4 py-4">
                <div className="md:flex hidden items-center gap-4">
                    <div className="">Font size</div>
                    <div className="flex w-14 justify-end">
                        {settings.fontSize}
                    </div>
                    <RangeInput
                        width="w-96"
                        className={`${toggleState(
                            'slider-toggle-dark',
                            'slider-toggle'
                        )}`}
                        name="size"
                        min={12}
                        max={280}
                        defaultValue={String(settings.fontSize).slice(0, -2)}
                        onChange={handleChange}
                        style={getStyles(settings.fontSize, 12, 280)}
                    />
                </div>
                <button
                    type="button"
                    className="ml-4 dark:hover:text-gray-100 hover:text-black"
                    onClick={() =>
                        setTheme(theme === 'dark' ? Theme.light : Theme.dark)
                    }
                >
                    <CircleHalfStroke size={18} />
                </button>
            </div>

            <div className="h-[1px] dark:bg-neutral-800 bg-neutral-300 w-full"></div>
        </div>
    );
};

export default SettingsPanel;
