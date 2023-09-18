import {
    HiOutlineMail
} from 'react-icons/hi';
export const email = {
    label: 'Email address',
    name: 'email',
    type: 'email',
    value: undefined,
    required: true,
    errorMessage: 'Email is required',
    description: 'We will never share your email with anyone else.',
    startComponent: <HiOutlineMail />
}

export const password = {
    label: 'Password',
    name: 'password',
    type: 'password',
    value: undefined,
    required: true,
    errorMessage: 'Password is required',
    description: 'Must be at least 8 characters long.',
}

export const re_password = {
    label: 'Confirm password',
    name: 're_password',
    type: 'password',
    value: undefined,
    required: true,
    errorMessage: 'Password is required',
    description: 'Must be at least 8 characters long.',
}

export const first_name = {
    label: 'First name',
    name: 'first_name',
    type: 'text',
    value: undefined,
    required: true,
    errorMessage: 'First name is required',
}

export const last_name = {
    label: 'Last name',
    name: 'last_name',
    type: 'text',
    value: undefined,
    required: true,
    errorMessage: 'Last name is required',
}

export const avatar = {
    label: 'Avatar',
    name: 'avatar',
    type: 'file',
    value: undefined,
    required: true,
    description: 'Upload a profile picture',
}

export const username = {
    label: 'Username',
    name: 'username',
    type: 'text',
    value: undefined,
    required: true,
    errorMessage: 'Username is required',
}

export const title = {
    label: 'Title',
    name: 'title',
    type: 'text',
    value: undefined,
    required: true,
    errorMessage: 'Title is required',
}

export const content = {
    label: 'Content',
    name: 'content',
    type: 'richtext',
    value: undefined,
    required: true,
    errorMessage: 'Content is required',
}

