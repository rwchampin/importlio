
"use client"
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiChevronDown } from 'react-icons/bi';

function className(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

export default function Avatar({ user }) {
  return (
    <div className="flex h-96 justify-center">
      <div
        x-data="{
          open: true,
          toggle() {
            if (this.open) {
              return this.close();
            }

            this.$refs.button.focus();

            this.open = true;
          },
          close(focusAfter) {
            if (!this.open) return;

            this.open = false;

            focusAfter && focusAfter.focus();
          },
        }"
        // x-on:keydown.escape.prevent.stop="close($refs.button)"
        // x-on:focusin.window="!$refs.panel.contains($event.target) && close()"
        x-id="['dropdown-button']"
        className="relative inline-block"
      >
        <button
          // x-ref="button"
          // x-on:click="toggle()"
          // :aria-expanded="open"
          // :aria-controls="$id('dropdown-button')"
          type="button"
        >
          <div className="relative h-10 w-10">
            <Image
              className="h-full w-full rounded-full object-cover object-center ring ring-white"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width={40}
              height={40}
            />
          </div>
        </button>

        <div
          x-ref="panel"
          x-show="open"
          // x-transition.origin.top.left
          // x-on:click.outside="close($refs.button)"
          // :id="$id('dropdown-button')"
          className="absolute left-0 z-10 mt-2 w-60 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg"
        >
          <div className="py-3 px-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  className="h-full w-full rounded-full object-cover object-center ring ring-white"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={40}
                  height={40}
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">Steven Jobs</div>
                <div className="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </div>
          </div>
          <div className="p-1">
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              View profile
              <span className="inline-flex flex-1 justify-end gap-1 text-xs capitalize text-gray-400">
                <kbd className="min-w-[1em] font-sans">⌥</kbd>
                <kbd className="min-w-[1em] font-sans">⇧</kbd>
                <kbd className="min-w-[1em] font-sans">P</kbd>
              </span>
            </a>
            {/* Other menu items */}
          </div>
        </div>
      </div>
    </div>
  );
}
