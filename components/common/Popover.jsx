"use client"
import { Popover as PP } from '@headlessui/react';

const Popover = ({ children }) => {
  return (
    <PP>
      <PP.Button className="relative" as="button">
        {children.filter(child => child.type === Trigger)}
      </PP.Button>

      <PP.Panel className="absolute z-10 bg-gray-300 rounded-lg p-1">
        {children.filter(child => child.type === Content)}
      </PP.Panel>
    </PP>
  );
};

const Trigger = ({ children }) => {
  return <>{children}</>;
};

const Content = ({ children }) => {
  return <div className="grid grid-cols-2">{children}</div>;
};

Popover.Trigger = Trigger;
Popover.Content = Content;

export default Popover;
