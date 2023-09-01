import { apiSlice } from '../services/apiSlice';

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

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveUser: builder.query<User, void>({
			query: () => '/users/me/',
		}),
		socialAuthenticate: builder.mutation<
			CreateUserResponse,
			SocialAuthArgs
		>({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(
					state
				)}&code=${encodeURIComponent(code)}`,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}),
		}),
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/jwt/create/',
				method: 'POST',
				body: { email, password },
			}),
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => ({
				url: '/users/',
				method: 'POST',
				body: { first_name, last_name, email, password, re_password },
			}),
		}),
		verify: builder.mutation({
			query: () => ({
				url: '/jwt/verify/',
				method: 'POST',
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/logout/',
				method: 'POST',
			}),
		}),
		activation: builder.mutation({
			query: ({ uid, token }) => ({
				url: '/users/activation/',
				method: 'POST',
				body: { uid, token },
			}),
		}),
		resetPassword: builder.mutation({
			query: email => ({
				url: '/users/reset_password/',
				method: 'POST',
				body: { email },
			}),
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: '/users/reset_password_confirm/',
				method: 'POST',
				body: { uid, token, new_password, re_new_password },
			}),
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

		createPost: builder.mutation({
			query: ({
				post_type,
				headline,
				title,
				subtitle,
				status,
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
				id,
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
				status,
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
					"status": status,

				};

				// Convert the object to JSON format
				const jsonData = JSON.stringify(postData);


				return {
					url: `${process.env.NEXT_PUBLIC_HOST}/api/posts/${id}/update`,
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
	useCreatePostMutation,
	useEditPostMutation,
	usePreregisterMutation,
	useFullRegisterMutation,
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
} = authApiSlice;
