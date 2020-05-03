const InitialState = {
	owner: "Alex",
	arr: [
		{
			id: "1",
			name: "alex",
			category: "creator",
			description: "...",
			price: "all",
		},
		{
			id: "2",
			name: "naska",
			category: "osoba",
			description: "prekrasnaya Anastasi",
			price: "all",
		},
		{
			id: "3",
			name: "tuman",
			category: "pes",
			description: "hochet est` ruki",
			price: "all",
		},
		{
			id: "4",
			name: "pisuk",
			category: "unknown",
			description: "who is it?",
			price: "all",
		},
		{
			id: "5",
			name: "fil",
			category: "friend",
			description: "leha leha leha leha leha",
			price: "all",
		},
		{
			id: "6",
			name: "gaba",
			category: "tea",
			description: "ohhhhhh yeeeaaaa",
			price: "all",
		},
	],
};

export function itemsReducer(state = InitialState, action) {
	switch (action.type) {
		case "CREATE_ITEM":
			return { ...state, array: action.payload };

		default:
			return state;
	}
}