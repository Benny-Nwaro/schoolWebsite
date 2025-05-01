"use client";
import dynamic from "next/dynamic";

export const Listbox = dynamic(() => import('@headlessui/react').then((mod) => mod.Listbox), { ssr: false });
export const ListboxOption = dynamic(() => import('@headlessui/react').then((mod) => mod.ListboxOption), { ssr: false });

export const CheckIcon = dynamic(() => import('@heroicons/react/20/solid').then((mod) => mod.CheckIcon), { ssr: false });
export const ChevronUpDownIcon = dynamic(() => import('@heroicons/react/20/solid').then((mod) => mod.ChevronUpDownIcon), { ssr: false });
export const XMarkIcon = dynamic(() => import('@heroicons/react/20/solid').then((mod) => mod.XMarkIcon), { ssr: false });
