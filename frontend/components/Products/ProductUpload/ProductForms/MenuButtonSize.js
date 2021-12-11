import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Size } from '../Filters'
import { useDispatch, useSelector } from 'react-redux'
import { setProductSize, setProductSizeValidation } from '../../../../redux/actions/productUploadActions'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MenuButtonSize = () => {
  
  const [selected, setSelected] = useState('Select Size')

  const dispatch = useDispatch();
  const productSize = useSelector(state => state.productSize)

  useEffect(() => {

    const init = async () => {
      if (selected !== "Select Size") {

        var selectSize = [];
        var inStock = false;
        const Size = [
              'XS',
              'S',
              'M',
              'L',
              'XL',
              'XXL (2XL)',
              'XXXL (3XL)',
              'XXXL (4XL)',
              'VXL (5XL)',
              'Between 1 to 2 Years',
              'Between 2 to 3 Years',
              'Between 3 to 4 Years',
              'Between 4 to 5 Years',
              'Between 5 to 6 Years',
              'Between 6 to 7 Years',
              'Between 7 to 8 Years',
              'Between 8 to 9 Years',
              'Between 9 to 10 Years',
            ];
        for (var i = 0; i < Size.length; i++) {
          if (Size[i] === selected) {
              inStock = true
            }
            selectSize.push({
                name: Size[i],
                inStock: inStock,
                isSelected: inStock
            });
          inStock = false
        }
        console.log('1',selectSize)
         await dispatch(setProductSize(selectSize))
      }
      else {
        console.log('0', productSize.value)
        await dispatch(setProductSizeValidation(false))
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
                {Size.map((person) => (
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

export default MenuButtonSize;