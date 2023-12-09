"use client"
import { Fragment, useState } from 'react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CustomFilter = ({title, options}: CustomFilterProps) => {

  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = (e: {title: string, value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())
  
    
    router.push(newPathName)
  }


  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e)
        handleUpdateParams(e)
      }}
      >
        <div className='relative z-10 w-fit'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image
            src="/chevron-up-down.svg"
            alt="chevron up down"
            width={20}
            height={20}
            className='ml-4 object-contain'
            />
          </Listbox.Button>
          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
            <Listbox.Options className="absolute custom-filter__options bg-white shadow-lg max-h-60 rounded py-1">
              {options.map((option) => (
                <Listbox.Option
                key={option.title}
                value={option}
                className={({active}) => `relative select-none py-2 px-4 ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                >
                  {({selected}) => (
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
            
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter