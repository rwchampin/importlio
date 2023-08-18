import continueWithSocialAuth from './continue-with-social-auth';


export const continueWithGoogle = () =>
	continueWithSocialAuth('google-oauth2', 'google');
export const continueWithFacebook = () =>
	continueWithSocialAuth('facebook', 'facebook');


export const getUserDetails = async (token: string) => {
		const apiUrl = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token='+token;

		const res = await fetch(apiUrl, {
		  method: 'GET',
		  headers: {
			Accept: 'application/json',
			// Authorization: `Bearer ${token}`,
		  },
		});
		debugger
		const data = await res.json();
		return data;
	  };