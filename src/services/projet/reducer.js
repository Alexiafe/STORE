import * as types from "./constants";


const initialState = {
	items: [],
	panier: [],
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		case types.AJOUTE_STOCK:
			var {items} = state;
			items.push(
				{
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price,
					description: action.payload.description,
					URL: action.payload.URL,
					stock: action.payload.stock,
					panier: 0,
					panierActif: false,

				}

				//items.push(action.payload);
			);
			return {
				...state,
				items: items
			}
			break;

		case types.SUPPRIME_STOCK:
			var {items} = state;
			var {panier} = state;
			panier.forEach((el, i, arr) => {
				if (el.id === items[action.payload].id){
					arr.splice(i, 1);
				}
			})
			items.splice(action.payload, 1);

			return {
				...state,
				items: items,
				panier: panier,
			};
			break;

		case types.INCREMENT_STOCK:
			var {items} = state;
			items[action.payload].stock = items[action.payload].stock +1;
			return {
				...state,
				items: items
			};
			break;

		case types.DECREMENT_STOCK:
			var {items} = state;
			items[action.payload].stock = items[action.payload].stock -1;
			return {
				...state,
				items: items
			};
			break;

		case types.AJOUTE_PANIER:
			var {panier} = state;
			var {items} = state;
			panier.push(
				items[action.payload],
				)

			//panier[action.payload].panier = panier[action.payload].panier +1;
			//items[action.payload].stock = items[action.payload].stock -1;

			return {
				...state,
				panier: panier,
				items: items,
			};
			break;

			case types.INCREMENT_PANIER:
			var {panier} = state;
			var {items} = state;
			panier[action.payload].panier = panier[action.payload].panier +1;
			//items[action.payload].stock = items[action.payload].stock -1;
			return {
				...state,
				panier: panier
			};
			break;

		case types.DECREMENT_PANIER:
			var {panier} = state;
			var {items} = state;
			panier[action.payload].panier = panier[action.payload].panier -1;
			//items[action.payload].stock = items[action.payload].stock +1;
			return {
				...state,
				panier: panier
			};
			break;

		case types.VALIDE_COMMANDE:
			var {panier} = state;
			panier[action.payload].panier=0;
			panier.splice(action.payload, 1);
			return {
				...state,
				panier: panier,
			};
			break;


		case types.VALIDE_EDIT:
			var {items} = state;
			var {panier} = state;
			var indexPanier = panier.findIndex((elt) => elt == items[action.index]);
			panier[indexPanier] = {
				...items[action.index],
				...action.objet,
			};
			items[action.index]= {
				...items[action.index],
				...action.objet,
			}
			return {
				...state,
				items: items,
				panier: panier,
			};
			break;

		case types.SET_PANIER_1:
		var {items} = state;
		items[action.payload].panierActif = true;
			return {
				...state,
				items: items
			};
			break;


		case types.SET_PANIER_2:
		var {items} = state;
		var {panier} = state;

			items.forEach((el, i, arr) => {
				if (el.id === action.id){
					arr[i].panierActif = false;
				}
			})

			return {
				...state,
				items: items
			};
			break;



		case types.INCREMENT_STOCK_2:
		var {items} = state;
		var {panier} = state;

			items.forEach((el, i, arr) => {
				if (el.id === action.id){
					arr[i].stock = arr[i].stock +1
				}
			})

			return {
				...state,
				items: items
			};
			break;


		case types.DECREMENT_STOCK_2:
		var {items} = state;
		var {panier} = state;

			items.forEach((el, i, arr) => {
				if (el.id === action.id){
					arr[i].stock = arr[i].stock -1
				}
			})

			return {
				...state,
				items: items
			};
			break;







		default:
			return state;

	}
};

