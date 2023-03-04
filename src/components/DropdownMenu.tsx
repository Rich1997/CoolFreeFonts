import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                as="div"
                className="h-[16px] w-[16px] rounded-full bg-primary-light custom-border cursor-pointer"
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
                <Menu.Items className="absolute w-[5.5rem] -left-2 mt-2 z-10 default-bg default-border focus:outline-none select-none">
                    <div className="p-2 flex flex-col items-start gap-2">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'h5-bold' : '',
                                        'h5 flex items-center gap-2'
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            active ? '' : 'default-text',
                                            'block h-[16px] w-[16px] rounded-full bg-primary-light custom-border cursor-pointer z-20'
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
                                        active ? 'h5-bold' : '',
                                        'h5 flex items-center gap-2'
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            active ? '' : 'default-text',
                                            'block h-[16px] w-[16px] rounded-full bg-primary-light custom-border cursor-pointer z-20'
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
                                        active ? 'h5-bold' : '',
                                        'h5 flex items-center gap-2'
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            active ? '' : 'default-text',
                                            'block h-[16px] w-[16px] rounded-full bg-primary-light custom-border cursor-pointer z-20'
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
