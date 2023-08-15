"use client"

import gsap from 'gsap'
export default function useNotification() {
 

  const show = ({
    message = 'Notification',
    type = 'success'
  }) => {
    const el = document.createElement('div')
    el.classList.add('notification')
    el.classList.add(type)
    el.innerHTML = message
    document.body.appendChild(el)

    setTimeout(() => {
        gsap.to(el, {duration: 0.5, opacity: 1, right: 20, ease: 'expo.out' })
        }
    , 100)

    setTimeout(() => {
        gsap.to(el, {duration: 0.5, opacity: 0})
        }
    , 3000)

    setTimeout(() => {
        el.remove()
        }
    , 3500)

    }

    return {
        show
    }
}