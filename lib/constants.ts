
import React, { ChangeEvent } from 'react'


export const screens = {
    '2xl':"1536",
    'lg':"1024",
    'md':"768",
    'sm':"640",
    'xl':"1280",
}

export const badgeTypes = {
    CATEGORY: 'category',
    TAG: 'tag',
    POST_TYPE: 'post_type',
}

interface formFieldType {
    type: 'text' | 'file' | 'richtext' | 'select' | 'multiselect' | 'email' | 'password' | 're_password' | any
}
export interface FormItemProps {
    label: string;
    name: string;
    type: formFieldType | any;
    placeholder?: string;
    value?: object | string | number | boolean | ''
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
}
export interface FormProps {
    config: FormItemProps[];
    onSubmit: (event: any) => void;
    onChange: (event: any) => void;
	isLoading?: boolean;
	btnText?: string,
    preFormText?: string | React.ReactNode;
	postFormText?: string | React.ReactNode;
    onSuccess?: () => void;
    onError?: () => void;
    errors?: any;
    formType?: string;
}
export interface InputProps {
    onFocus?: () => void
    onBlur?: () => void
    name: string
    label: string
    labelPlacement?: 'inside' | 'outside' | 'outside-left' | undefined
    type: string
    placeholder?: any
    defaultValue?: any
    isRequired?: boolean
    isDisabled?: boolean
    isReadOnly?: boolean
    isInvalid?: boolean
    isFullWidth?: boolean
    value?: any
    onChange?: (event: any) => void
    required?: boolean
    children?: React.ReactNode
    disabled?: boolean
    classNames?: any
    id?: string
    className?: string
    autoComplete?: string
    autoFocus?: boolean
    autoCorrect?: string
    description?: string
    errors?: any
    startContent?: React.ReactNode | null | undefined;
    endContent?: React.ReactNode | null | undefined;
    beforeContent?: React.ReactNode | null | undefined;
    afterContent?: React.ReactNode | null | undefined;
    validationState?: 'valid' | 'invalid' | null | undefined | any;
    link?: {
		linkText: string;
		linkUrl: string;
	}
    data?: any
    options?: any
}

export interface ImageProps {
    src: string;
    alt: string;
}


export interface PopOverProps {
    children: React.ReactNode;
    className?: string;
    content: string;
    placement: string;
    isHovered: boolean;
}


export interface BasePageProps {
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    theme?: 'light' | 'dark';
    bg?: string | null | undefined;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
    belowSubtitle?: any;
    headline: string | React.ReactNode;
    shadowText: string | React.ReactNode;
    customComponent?: React.ReactNode | null | undefined;
    children?: React.ReactNode | null | undefined;
    topLeftPageComponent?: React.ReactNode | null | undefined;
    topRightPageComponent?: React.ReactNode | null | undefined;
    shadowTextPosition?: "center" | "top";
    contentStyles?: string;
    contentParentStyles?: string;
    showSidebar?: boolean
    showPostsInFooter?: boolean
    images?: any
    showBreadcrumbs?: boolean
} 

export interface ShadowTextProps {
    children: React.ReactNode | string;
    size?: string;
    position?: string;
    type?: string;
    theme?: string;
    className?: string;
}


interface Tag {
    id: string
    name: string
    slug: string
}

export interface Categories {
    id: string
    name: string
    slug: string
}

export interface PostType {
    id: string
    name: string
    slug: string
}
export interface Post {
  id: string
    title: string
    content: string
    published: string
    updated: string
    headline: string
    slug: string
    featured_image: string
    subtitle: string
    shadow_text: string
    tags: Tag[]
    categories: Categories[]
    post_type: PostType
    seo_title: string
    seo_description: string
    seo_keywords: string
    seo_image: string
    likes: number
    dislikes: number
    readtime: number
}


export interface TooltipProps {
    children: React.ReactNode;
    showArrow?: boolean;
    content: React.ReactNode | string;
    placement?: "top" | "bottom" | "left" | "right";
    isOpen?: boolean;
}

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    avatar?: string;
    id: string;
    is_admin?: boolean;
    is_staff?: boolean;
    is_active?: boolean;
    is_superuser?: boolean;

 

    amazon_associate_id?: string;
    
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    tz?: string;

}

export interface AvatarProps {
    src?: string;
    user: User
}

export interface ButtonProps {
    children: React.ReactNode | string;
    href?: string;
    className?: string;
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    radius?: 'sm' | 'md' | 'lg' | 'none' | 'full';
    spinner?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    spinnerPlacement?: 'start' | 'end';
    isIconOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onPress?: () => void;
    onPressStart?: () => void;
    onPressEnd?: () => void;
    onPressChange?: () => void;
    onPressUp?: () => void;
    onKeyDown?: () => void;
    onKeyUp?: () => void;
    onClick?: () => void;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    target?: string;
}

export const POST_COLUMNS_NO_CONTENT = [
    "id",
    "status",
    "title",
    "excerpt",
    "published",
    "updated",
    "headline",
    "slug",
    "featured_image",
    "subtitle",
    "shadow_text",
    "tags",
    "categories",
    "post_type",
    "seo_title",
    "seo_description",

]


export const userProfileFields = {
    'avatar': '',
    first_name: '',
    last_name: '',
    email: '',
    amazon_associate_id: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    tz: '',
    password: '',
    re_password: '',
}


export interface LinkProps {
    href?: string;
    pretty: string;
    dropdownData: any;
    name?: string;
  }


  export interface NotificationProps {
    id: string | number;
    type: "success" | "error" | "info" | "warning";
    title: string;
    message: string
  }

  