import { ChangeEvent, useEffect, useRef, useState } from 'react';
import RangeInput from './RangeInput';
import { useTheme, Theme } from '../context/ThemeContext';
import { useSettings } from '../context/SettingsContext';
import CircleHalfStroke from '../assets/images/icons/CircleHalfStroke';
import { colorThemes } from '../utils/colorThemes';
import DropdownMenu from './DropdownMenu';

const getColorTheme = (key: string, init: string) => {
    const res = window.localStorage.getItem(key);
    return res === null ? (init as 'base' | 'rose') : (res as 'base' | 'rose');
};

const SettingsPanel = () => {
    const [colorTheme, setColorTheme] = useState<'base' | 'rose'>(
        getColorTheme('colorTheme', 'base')
    );
    const { theme, setTheme } = useTheme();
    const { settings, setSize } = useSettings();
    const ref = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(entry.isIntersecting ? false : true);
            },
            {
                root: null,
                rootMargin: '-1px 0px 0px 0px',
                threshold: 1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    useEffect(() => {
        window.localStorage.setItem('colorTheme', colorTheme);
        const root = document.documentElement;
        root.style.setProperty(
            '--primary-light',
            colorThemes[colorTheme].primaryLight
        );
        root.style.setProperty(
            '--primary-dark',
            colorThemes[colorTheme].primaryDark
        );
        root.style.setProperty(
            '--secondary-light',
            colorThemes[colorTheme].secondaryLight
        );
        root.style.setProperty(
            '--secondary-dark',
            colorThemes[colorTheme].secondaryDark
        );
        root.style.setProperty(
            '--tertiary-light',
            colorThemes[colorTheme].tertiaryLight
        );
        root.style.setProperty(
            '--tertiary-dark',
            colorThemes[colorTheme].tertiaryDark
        );
    }, [colorTheme]);

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
                    ? 'linear-gradient(var(--primary-light), var(--primary-light))'
                    : 'linear-gradient(var(--primary-dark), var(--primary-dark))',
            backgroundColor:
                theme === Theme.dark
                    ? 'var(--secondary-dark)'
                    : 'var(--secondary-light)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${
                ((parseFloat(value) - min) * 100) / (max - min)
            }% 100%`,
        };
    };

    return (
        <div className="w-full sticky top-0 default-bg z-50" ref={ref}>
            <div className="pt-12"></div>
            <div className="md:px-12 px-0">
                <div className="h-[1px] dark:bg-secondary-dark bg-secondary-light w-full"></div>
                <div className="flex items-center justify-between gap-4 py-4 md:px-0 px-6">
                    <div className="md:flex hidden items-center gap-4">
                        <div className="">Font size</div>
                        <div className="flex w-14 justify-end">
                            {settings.fontSize}
                        </div>
                        <button
                            onClick={() =>
                                setColorTheme(() =>
                                    colorTheme === 'rose' ? 'base' : 'rose'
                                )
                            }
                        >
                            check
                        </button>
                        <RangeInput
                            width="w-96"
                            className={`${toggleState(
                                'slider-toggle-dark',
                                'slider-toggle'
                            )}`}
                            name="size"
                            min={12}
                            max={280}
                            defaultValue={String(settings.fontSize).slice(
                                0,
                                -2
                            )}
                            onChange={handleChange}
                            style={getStyles(settings.fontSize, 12, 280)}
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <DropdownMenu />
                        <button
                            type="button"
                            onClick={() =>
                                setTheme(
                                    theme === 'dark' ? Theme.light : Theme.dark
                                )
                            }
                        >
                            <CircleHalfStroke size={18} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isSticky ? 'md:px-0' : 'md:px-12'} px-0`}>
                <div className="h-[1px] dark:bg-secondary-dark bg-secondary-light w-full"></div>
            </div>
        </div>
    );
};

export default SettingsPanel;
