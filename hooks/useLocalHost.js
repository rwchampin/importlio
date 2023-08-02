"use client";
export default function useLocalHost() {

    return window.location.hostname.indexOf('localhost') > -1;
}