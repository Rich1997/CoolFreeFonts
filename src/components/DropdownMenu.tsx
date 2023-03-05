import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const op = localStorage.getItem('homeSelection');
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                as="div"
                className="md:h-[16px] md:w-[16px] h-8 w-8 rounded-full bg-primary-light custom-border cursor-pointer"
            ></Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave=""
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute md:w-[5.5rem] w-32 -left-2 md:mt-2 mt-4 z-10 default-bg default-border focus:outline-none select-none">
                    <div className="md:p-2 p-4 flex flex-col items-start md:gap-2 gap-4 h5-menu">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'default-text' : '',
                                        'flex items-center md:gap-2 gap-4'
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            active ? '' : 'default-text',
                                            'block md:h-[16px] md:w-[16px] h-4 w-4 rounded-full bg-primary-light custom-border cursor-pointer z-20'
                                        )}
                                    ></div>
                                    Default
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'default-text' : '',
                                        'flex items-center md:gap-2 gap-4'
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            active ? '' : 'default-text',
                                            'block md:h-[16px] md:w-[16px] h-4 w-4 rounded-full bg-primary-light custom-border cursor-pointer z-20'
                                        )}
                                    ></div>
                                    Rose
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'default-text' : '',
                                        'flex items-center md:gap-2 gap-4'
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            active ? '' : 'default-text',
                                            'block md:h-[16px] md:w-[16px] h-4 w-4 rounded-full bg-primary-light custom-border cursor-pointer z-20'
                                        )}
                                    ></div>
                                    Sky
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
