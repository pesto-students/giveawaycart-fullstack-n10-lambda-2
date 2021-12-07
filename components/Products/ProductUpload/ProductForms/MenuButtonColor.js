import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Color } from '../Filters'
import { useDispatch, useSelector } from 'react-redux'
import { setProductColor, setProductColorValidation } from '../../../../redux/actions/productUploadActions'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MenuButtonColor = () => {
  
  const [selected, setSelected] = useState('Select Color')

  const dispatch = useDispatch();
  const productColor = useSelector(state => state.productColor)

  useEffect(() => {

    const init = async () => {
      if (selected !== 'Select Color') {
         await dispatch(setProductColor(selected))
      }
      else {
        await dispatch(setProductColorValidation(false))
     }
    }
    init()
  },[selected])

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left tracking-wider font-semibold  cursor-default focus:outline-none focus:ring-1 focus:ring-header focus:border-header sm:text-sm">
              <span className="block truncate">{selected}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base tracking-wider ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {Color.map((person) => (
                  <Listbox.Option
                    key={person}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-header' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9 tracking-wider font-semibold font-serif text-sm  block  text-gray-700'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </>
  );
}

export default MenuButtonColor;