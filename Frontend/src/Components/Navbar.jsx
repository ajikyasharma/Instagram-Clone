import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const navigate= useNavigate()
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <p className='font-serif text-2xl  text-pink-500'>PixPulse</p>
                </div>

              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
       <NavLink to="/pixpulse/home"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? 'bg-pink-500 text-white rounded-md  text-md font-medium h-12 mt-1'
                    : 'text-pink-500 hover:bg-pink-500 hover:text-white text-md font-medium h-12 mt-1 rounded-md '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Home</p>
              </div>
        </NavLink>

        <NavLink to="/pixpulse/profile"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? 'bg-pink-500 text-white rounded-md  text-md font-medium h-12 mt-1'
                    : 'text-pink-500 hover:bg-pink-500 hover:text-white text-md font-medium h-12 mt-1 rounded-md '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Profile</p>
              </div>
        </NavLink>



        <NavLink to="/pixpulse/createpost"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? 'bg-pink-500 text-white rounded-md  text-md font-medium h-12 mt-1'
                    : 'text-pink-500 hover:bg-pink-500 hover:text-white text-md font-medium h-12 mt-1 rounded-md '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Create Post</p>
              </div>
        </NavLink>


        <NavLink to="/pixpulse/myposts"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? 'bg-pink-500 text-white rounded-md  text-md font-medium h-12 mt-1'
                    : 'text-pink-500 hover:bg-pink-500 hover:text-white text-md font-medium h-12 mt-1 rounded-md '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>My Posts</p>
              </div>
        </NavLink>


        <NavLink   onClick={()=>{
             localStorage.clear()
               navigate('/signin')

        }}
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? 'text-pink-500 font-medium text-md'
                    : 'text-pink-500 hover:bg-pink-500 hover:text-white text-md font-medium h-12 mt-1 rounded-md '
                
                   }`
                }
             >
             <div className={`py-3 pt-4 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Logout</p>
              </div>
        </NavLink>

       
                  </div>
                </div>
              </div>
              
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
            
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="">
                <Disclosure.Button
                  // key={item.name}
                  // as="a"
                  // href={item.href}
                  // className={classNames(
                  //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  //   'block rounded-md px-3 py-2 text-base font-medium'
                  // )}
                  // aria-current={item.current ? 'page' : undefined}
                >


                  

                  <NavLink to="/pixpulse/home"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? ' text-pink-500  text-md font-medium h-12 mt-1'
                    : 'text-pink-300 text-md font-medium h-12 mt-1 '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Home</p>
              </div>
        </NavLink>

        <NavLink to="/pixpulse/profile"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? ' text-pink-500  text-md font-medium h-12 mt-1'
                    : 'text-pink-300 text-md font-medium h-12 mt-1 '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Profile</p>
              </div>
        </NavLink>
            

        <NavLink to="/pixpulse/createpost"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? ' text-pink-500  text-md font-medium h-12 mt-1'
                    : 'text-pink-300 text-md font-medium h-12 mt-1 '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Create Post</p>
              </div>
        </NavLink>


        <NavLink to="/pixpulse/myposts"
             className={({ isActive }) =>
               `  ${
                  isActive
                   ? ' text-pink-500  text-md font-medium h-12 mt-1'
                    : 'text-pink-300 text-md font-medium h-12 mt-1 '
                
                   }`
                }
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>My Posts</p>
              </div>
        </NavLink>


        <NavLink  onClick={()=>{
             localStorage.clear()
               navigate('/signin')

        }}
             className={`text-pink-300 text-md font-medium h-12 mt-1 `}
             >
             <div className={`py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}>
               <p>Logout</p>
              </div>
        </NavLink>
                </Disclosure.Button>


            
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
