"use client"

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
export default function useNotification() {
    const el = document.createElement('div')
    el.classList.add('notification')
    const notification = useRef(el)

    const kill = () => {
        gsap.to(notification.current, {duration: 0.5, opacity: 0})
        setTimeout(() => {
            notification.current.remove()
            }
        , 500)
    }

    useEffect(() => {
        if( notification.current ) {
            debugger
        document.body.appendChild(notification.current)
        }
        return () => {
            document.body.removeChild(notification.current)
        }
    }, [])

  const show = ({
    message = 'Notification',
    type = 'success'
  }) => {
   

    setTimeout(() => {
        gsap.to(notification.current, {duration: 0.5, opacity: 1, right: 20, ease: 'expo.out' })
        }
    , 100)

    setTimeout(() => {
        gsap.to(notification.current, {duration: 0.5, opacity: 0})
        }
    , 3000)

    setTimeout(() => {
        notification.current.remove()
        }
    , 3500)

    }

    const toggle = ({ message, type }) => {
        if( notification.current ) {
            kill()
        }


        show({ message, type })

    }

    const hide = () => {
        gsap.to(notification.current, {duration: 0.5, opacity: 0, x: window.innerWidth + 100, ease: 'expo.out' })
        setTimeout(() => {
            kill()
            }
        , 500)
    }

    return {
        show,
        toggle,
        hide
    }
}