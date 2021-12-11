import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductSearchValue } from '../../redux/actions/productActions';
import { listProducts } from '../../redux/actions/productActions';

const Search = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  
  const [count, setCount] = useState(1)
  const handleKeyDown = async (e) => {
    
    if (e.key === 'Enter') {
      setCount(count+1)
    
    console.log('count', count)
      if (keyword.trim()) {
        await dispatch(setProductSearchValue(keyword))
        await dispatch(listProducts(keyword));
        router.push(`/search`)
        await dispatch(setProductSearchValue(''))
      } else {
        console.log('even this?')
        await dispatch(setProductSearchValue(""))
        router.push('/products')
      }      
    }
  }

  const searchValue = (e) => {
    console.log('the value', e.target.value)
    setKeyword(e.target.value)
    
  }
  const [keyword, setKeyword] = useState('')

  return (
    <>
      <div className="w-full px-0.5 sm:max-w-xs sm:mx-auto ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            onChange={searchValue}
            onKeyDown={handleKeyDown}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </>
  );
}

export default Search;