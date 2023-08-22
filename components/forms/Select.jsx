"use client";
import React, { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { BsCheckCircle } from 'react-icons/bs';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Select({
  name,
  data,
  value,
  onChange,
  label,
  labelId,
  required,
}) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({
    name: 'Select an option',
    id: null,
  });

  useEffect(() => {
    if (data.length > 0) {
      setOptions(data);
      setSelected(data.find(option => option.id === value) || data[0]);
    }
  }, [data]);

  const getSelectedOption = (optionName) => {
    return options.find((option) => option.name === optionName);
  };

  const handleChange = (option) => {debugger
    if(!option) return;

    const obj = getSelectedOption(option);

    if(obj.id) {
      setSelected(obj)
      onChange({
        target: {
          name,
          value: obj.id,
        },
      });
    }
   
  };

  return (
    <Listbox value={selected} onChange={handleChange} className="h-input">
      {({ open }) => (

          <div className="relative mt-1">
            <Listbox.Button className="text-black relative h-input w-full cursor-default rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={
                      
                      ({ active }) =>
                      classNames(
                        'h-input flex items-center justify-start cursor-pointer',
                        active ? 'text-black bg-gray-6' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={option.name}
                  >
                    {({ selected, active }) => {

                      return (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-red-8' : 'text-green-8',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <BsCheckCircle className="h-5 w-5 text-green-8 " aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}}

                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>

      )}
    </Listbox>
  );
}
