import { Fragment, useState } from 'react';
import { Listbox, Menu, Transition } from '@headlessui/react';
import { colorThemes, colorThemesList } from '../utils/colorThemes';

function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const op = localStorage.getItem('homeSelection');
    const [selected, setSelected] = useState(
        op === 'System'
            ? colorThemesList[0]
            : op === 'Light'
            ? colorThemesList[1]
            : colorThemesList[2]
    );

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
                                onClick={() => {}}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <button
                                            className={`flex items-center gap-2 ${
                                                selected ? 'font-bold' : ''
                                            } ${active ? 'default-text' : ''}`}
                                        >
                                            <div
                                                className="block md:h-[16px] md:w-[16px] h-4 w-4 rounded-full custom-border cursor-pointer z-20"
                                                style={{
                                                    backgroundColor: `${themeOption.primaryColor}`,
                                                }}
                                            ></div>
                                            {themeOption.colorTheme}
                                        </button>
                                        {selected
                                            ? localStorage.setItem(
                                                  'homeSelection',
                                                  themeOption.colorTheme
                                              )
                                            : ''}
                                        {/* {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                                  ) : null} */}
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
