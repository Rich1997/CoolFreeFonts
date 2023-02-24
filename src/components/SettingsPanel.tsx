import RangeInput from './RangeInput';
import { useTheme, Theme } from '../config/context/ThemeContext';
import { ChangeEvent } from 'react';
import { useSettings } from '../config/context/SettingsContext';

const SettingsPanel = () => {
    const { theme } = useTheme();
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
        <div className="md:block hidden px-12 pt-12 w-full">
            <div className="h-[1px] dark:bg-neutral-800 bg-neutral-300 w-full"></div>
            <div className="flex items-center gap-4 py-4">
                <div className="">Font size</div>
                <div className="flex w-14 justify-end">{settings.fontSize}</div>
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
            <div className="h-[1px] dark:bg-neutral-800 bg-neutral-300 w-full"></div>
        </div>
    );
};

export default SettingsPanel;
