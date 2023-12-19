import { apiSlice } from '../services/api';
import { generatePassword } from '@/lib/functions';
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

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		
		retrieveUser: builder.query<User, void>({
			query: (isAuthenticated:any) => {
				if (isAuthenticated) {
					return {
						url: '/users/me/',
						method: 'GET',
					};
				} else {
					return {
						url: '/users/me/',
						method: 'GET',
					};
				}
			}
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
				password,
				re_password,
			}) => ({
				url: '/users/',
				method: 'POST',
				body: { first_name, last_name, email, password, re_password },
			}),
		}),
		editProfile: builder.mutation({
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
			query: () => {
				return {
					url: '/logout/',
					method: 'POST',
				};
			}
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
		 createRoom: builder.mutation({
			query: ({ 
				name,
				description,
				is_active,
				user,
				assistant,
			 }) => ({
				url: '/ai/chat-rooms/',
				method: 'POST',
				body: {
					name,
					description,
					is_active,
					user,
					assistant,
				},
			}),
		 }),
		 createChatMessage: builder.mutation({
			query: ({ message }) => ({
				url: '/ai/chat-messages/',
				method: 'POST',
				body: message,
			}),
		 }),
		 sendContact: builder.mutation({
			query: ({ name, email, subj,message }) => ({
				url: '/contact-messages/',
				method: 'POST',
				body: {
					name,
					email,
					subj,
					message,
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
	useCreateRoomMutation,
	useCreateChatMessageMutation,
	useSendContactMutation,
} = authApiSlice;
