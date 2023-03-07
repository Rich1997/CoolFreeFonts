import { useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { themeColors, colorThemesList } from '../utils/colorThemes';
import { colorThemes, useColorTheme } from '../context/ColorThemeContext';

export default function Example() {
    const op = localStorage.getItem('homeSelection');
    const [selected, setSelected] = useState(
        op === 'default'
            ? colorThemesList[0]
            : op === 'rose'
            ? colorThemesList[1]
            : colorThemesList[2]
    );

    const { color, setColor } = useColorTheme();

    useEffect(() => {
        window.localStorage.setItem('homeSelection', color);
        const root = document.documentElement;
        root.style.setProperty(
            '--primary-light',
            themeColors[color].primaryLight
        );
        root.style.setProperty(
            '--primary-dark',
            themeColors[color].primaryDark
        );
        root.style.setProperty(
            '--secondary-light',
            themeColors[color].secondaryLight
        );
        root.style.setProperty(
            '--secondary-dark',
            themeColors[color].secondaryDark
        );
        root.style.setProperty(
            '--tertiary-light',
            themeColors[color].tertiaryLight
        );
        root.style.setProperty(
            '--tertiary-dark',
            themeColors[color].tertiaryDark
        );
    }, [color]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="flex items-center relative">
                <Listbox.Button className="md:h-[16px] md:w-[16px] h-8 w-8 rounded-full bg-primary-light custom-border cursor-pointer">
                    {/* <selected.icon size={16} /> */}
                </Listbox.Button>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave=""
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Listbox.Options className="flex flex-col gap-2 absolute md:w-[5.5rem] w-32 md:-left-[1.55rem] -left-8 md:mt-4 mt-8 z-10 default-bg default-border focus:outline-none select-none md:p-2 p-4">
                        {colorThemesList.map((themeOption, themeOptionId) => (
                            <Listbox.Option
                                key={themeOptionId}
                                className={`h5-menu`}
                                value={themeOption}
                                onClick={() => {
                                    setColor(
                                        themeOption.colorTheme.toLocaleLowerCase() as colorThemes
                                    );
                                }}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <button
                                            className={`flex items-center md:gap-2 gap-4 ${
                                                selected
                                                    ? 'font-bold default-text'
                                                    : ''
                                            } ${active ? 'default-text' : ''}`}
                                        >
                                            <div
                                                className="flex items-center justify-center md:h-[16px] md:w-[16px] h-4 w-4 rounded-full border dark:border-white border-primary-dark cursor-pointer z-20"
                                                style={{
                                                    backgroundColor: `${themeOption.primaryColor}`,
                                                }}
                                            >
                                                {selected ? (
                                                    <div className="w-2 h-2 rounded-full bg-primary-dark"></div>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                            {themeOption.colorTheme
                                                .charAt(0)
                                                .toLocaleUpperCase() +
                                                themeOption.colorTheme.slice(1)}
                                        </button>
                                        {selected
                                            ? localStorage.setItem(
                                                  'homeSelection',
                                                  themeOption.colorTheme
                                              )
                                            : ''}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
