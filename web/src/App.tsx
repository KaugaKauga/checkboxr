import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import './App.css';
import {
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  BookOpenIcon,
  XMarkIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useTodoStore } from './helpers/store';
import { NavLink, Outlet } from 'react-router-dom';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Home', to: '/', icon: HomeIcon, current: true, end: true },
  { name: 'History', to: 'history', icon: BookOpenIcon, current: false },
  { name: 'Analytics', to: 'analytics', icon: ChartBarIcon, current: false },
  { name: 'Settings', to: 'settings', icon: Cog6ToothIcon, current: false },
]

const App = () => {
  const { showSidebar, toggleSidebar } = useTodoStore(state => ({ showSidebar: state.showSidebar, toggleSidebar: state.toggleSidebar }));
  return (
    <>
      <div className='h-full'>
        <Transition.Root show={showSidebar} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={toggleSidebar}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-stone-200">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-700"
                        onClick={() => toggleSidebar()}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-stone-700" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Checkboxr"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={({isActive}) => `${isActive && 'bg-stone-300'} text-stone-700 hover:bg-stone-300 hover:text-stone-700 group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                          end={item.end}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-stone-700' : 'text-stone-700 group-hover:text-stone-700',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-stone-300 p-4">
                    <NavLink to="profile" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <UserIcon
                            className="inline-block h-6 w-6 mr-4"
                          />
                        </div>
                        <p className="text-sm font-medium text-stone-700">Profile</p>
                      </div>
                    </NavLink>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-stone-300 bg-stone-200">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Checkboxr"
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-stone-200 px-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({isActive}) => `${isActive && 'bg-stone-300'} text-stone-700 hover:bg-stone-300 hover:text-stone-700 group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                    end={item.end}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-stone-700' : 'text-stone-700 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-stone-300 p-4">
            <NavLink to="profile" className="group block flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <UserIcon
                      className="inline-block h-6 w-6 mr-4"
                    />
                  </div>
                  <p className="text-sm font-medium text-stone-700">Profile</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64 h-full">
          <main className="flex-1 h-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 h-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App;
