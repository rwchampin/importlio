import { api } from '../services/api';

interface User {
	first_name: string;
	last_name: string;
	email: string;
	avatar?: string;
	is_admin?: boolean;
	is_active?: boolean;
	is_staff?: boolean;
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

const authApiSlice = api.injectEndpoints({
	endpoints: builder => ({
		retrieveUser: builder.query<User, void>({
			query: () => ({
				url: '/users/me/',
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			}),
		}),
		socialAuthenticate: builder.mutation<
			CreateUserResponse,
			SocialAuthArgs
		>({
			query: ({ provider, state, code }:any) => ({
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
			query: ({ email, password }:any):any => ({
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
				avatar,
				password,
				re_password,
			}) => ({
				url: '/users/',
				method: 'POST',
				body: { first_name, last_name, email, password, re_password, avatar },
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
		updatePost: builder.mutation({
			query: ({ slug, updates}) => ({
				url: `/posts/update/${slug}/`,
				method: 'PATCH',
				body: updates,
			}),

		}),
		preregister: builder.mutation({
			query: ({ email }) => ({
				url: '/registrants/',
				method: 'POST',
				body: { email },

			}),

		}),
		fullRegistration: builder.mutation({
			query: ({ email, first_name, last_name }) => ({
				url: '/registrants/',
				method: 'POST',
				body: {
					email,
					first_name,
					last_name,
				},
			}),

		}),
	}),
});

export const {
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useUpdatePostMutation,
	usePreregisterMutation,
	useFullRegistrationMutation
} = authApiSlice;
