import { authReducer, types } from '../../../src/auth';

describe('Pruebas en el AuthReducer', () => {
	test('Debe retornar el estado por defecto', () => {
		const state = authReducer({ logged: false }, {});
		expect(state).toEqual({ logged: false });
	});
	test('debe de (login) llamar el login autenticar y establecer el user', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Pablo',
				id: '123',
			},
		};

		const state = authReducer({ logged: false }, action);
		expect(state).toEqual({ logged: true, user: action.payload });
	});
	test('Debe de (logout) borrar el name del usurio y logged en false', () => {
		const state = {
			logged: true,
			user: { id: '123', name: 'Pablo' },
		};
		const action = {
			type: types.logout,
		};
		const newState = authReducer(state, action);
		expect(newState).toEqual({ logged: false });
	});
});
