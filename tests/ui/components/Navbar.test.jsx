import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));
describe('Pruebas en Navbar', () => {
	const contextValue = {
		logged: true,
		user: {
			name: 'Pablo Anibal',
		},
		logout: jest.fn(),
	};
	beforeEach(() => jest.clearAllMocks());
	test('Debe de mostrar el nombre del usuario que está logeado', () => {
		render(
			<MemoryRouter>
				<AuthContext.Provider value={contextValue}>
					<Navbar />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// screen.debug();
		expect(screen.getByText('Pablo Anibal')).toBeTruthy();
	});
	test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		const logoutBtn = screen.getByRole('button');
		fireEvent.click(logoutBtn);
		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
