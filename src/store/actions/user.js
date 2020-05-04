export function changeAuth(auth) {
	return {
		type: "CHANGE_AUTH",
		payload: auth,
	};
}
