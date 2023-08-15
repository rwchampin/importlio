import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setAuth, logout } from './authSlice';
import { Mutex } from 'async-mutex';

interface User {
	first_name: string;
	last_name: string;
	email: string;
}

interface SocialAuthArgs {
	provider: string;
	state: string;
	code: string;
}

interface CreateUserResponse {
	success: boolean;
	user: User;
}

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
	credentials: 'include',
});
const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock();
	let result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire();
			try {
				const refreshResult = await baseQuery(
					{
						url: '/jwt/refresh/',
						method: 'POST',
					},
					api,
					extraOptions
				);
				if (refreshResult.data) {

					api.dispatch(setAuth());

					result = await baseQuery(args, api, extraOptions);
				} else {
					api.dispatch(logout());
				}
			} finally {
				release();
			}
		} else {
			await mutex.waitForUnlock();
			result = await baseQuery(args, api, extraOptions);
			debugger
		}
	}
	return result;
};

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({
		retrieveUser: builder.query<User, void>({

			query: (res) => {
				debugger; // Add debugger statement here

				return {
					url: '/users/me/',
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authentication': `Bearer ${res}`,
					}
				};
			},
		}),
		socialAuthenticate: builder.mutation<
			CreateUserResponse,
			SocialAuthArgs
		>({
			query: (res) => {
				const { provider, state, code } = res;
				// debugger; // Add debugger statement here
				return {
					url: `/o/${provider}/?state=${encodeURIComponent(
						state
					)}&code=${encodeURIComponent(code)}`,
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				};
			},
		}),
		login: builder.mutation({
			query: ({ email, password }) => {
				debugger; // Add debugger statement here
				return {
					url: '/jwt/create/',
					method: 'POST',
					body: { email, password },
				};
			},
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => {
				// debugger; // Add debugger statement here
				return {
					url: '/users/',
					method: 'POST',
					body: { first_name, last_name, email, password, re_password },
				};
			},
		}),
		verify: builder.mutation({
			query: (res) => {
				// debugger; // Add debugger statement here
				return {
					url: '/jwt/verify/',
					method: 'POST',
					body: { token: res },
				};
			},
		}),
		logout: builder.mutation({
			query: (res) => {
				// debugger; // Add debugger statement here
				return {
					url: '/logout/',
					method: 'POST',
				};
			},
		}),
		activation: builder.mutation({
			query: ({ uid, token }) => {
				// debugger; // Add debugger statement here
				return {
					url: '/users/activation/',
					method: 'POST',
					body: { uid, token },
				};
			},
		}),
		resetPassword: builder.mutation({
			query: email => {
				// debugger; // Add debugger statement here
				return {
					url: '/users/reset_password/',
					method: 'POST',
					body: { email },
				};
			},
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => {
				debugger; // Add debugger statement here
				return {
					url: '/users/reset_password_confirm/',
					method: 'POST',
					body: { uid, token, new_password, re_new_password },
				};
			},
		}),
		preregister: builder.mutation({
			query: ({ email }) => {
				// debugger; // Add debugger statement here
				return {
					url: '/registrants/',
					method: 'POST',
					body: { "email": email },
				};
			},
		}),
		fullRegister: builder.mutation({
			query: ({ first_name, last_name, email }) => {
				// debugger; // Add debugger statement here
				debugger
				return {
					url: '/registrants/',
					method: 'POST',
					body: {
						"first_name": first_name,
						"last_name": last_name,
						"email": email
					},
				};
			},
		}),
		getPosts: builder.query({
			query: () => {
				// debugger; // Add debugger statement here
				return {
					url: '/posts/',
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				};
			},
		}),
		createPost: builder.mutation({
			query: ({
				post_type,
				headline,
				title,
				subtitle,
				shadow_text,
				excerpt,
				content,
				featured_image,
				 categories,
				  tags,
				  seo_title,
				  seo_description,
				  post_image_1,
				  post_image_2,
				  post_image_3,
			}) => {


				const postData = {
					"post_type": post_type,
					"title": title,
					"content": content,
					"headline": headline,
					"subtitle": subtitle,
					"shadow_text": shadow_text,
					"excerpt": excerpt,
					"featured_image": featured_image,
					"categories": categories,
					"tags": tags,
					"seo_title": seo_title,
					"seo_description": seo_description,
					"post_image_1": post_image_1,
					"post_image_2": post_image_2,
					"post_image_3": post_image_3,
				};

				// Convert the object to JSON format
				const jsonData = JSON.stringify(postData);


				return {
					url: '/posts/create/',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: jsonData
				};
			},
		}),
		editPost: builder.mutation({
			query: ({
				post_type,
				headline,
				title,
				subtitle,
				shadow_text,
				excerpt,
				content,
				featured_image,
				 categories,
				  tags,
				  seo_title,
				  seo_description,

			}) => {


				const postData = {
					"post_type": post_type,
					"title": title,
					"content": content,
					"headline": headline,
					"subtitle": subtitle,
					"shadow_text": shadow_text,
					"excerpt": excerpt,
					"featured_image": featured_image,
					"categories": categories,
					"tags": tags,
					"seo_title": seo_title,
					"seo_description": seo_description,

				};

				// Convert the object to JSON format
				const jsonData = JSON.stringify(postData);


				return {
					url: '/posts/create/',
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: jsonData
				};
			},
		}),
	}),
});



export const {
	useEditPostMutation,
	useFullRegisterMutation,
	useGetPostsQuery,
	useCreatePostMutation,
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	usePreregisterMutation,
} = apiSlice;
