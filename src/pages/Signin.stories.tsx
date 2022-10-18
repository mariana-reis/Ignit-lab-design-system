import { Meta, StoryObj } from '@strorybook/react';
import { SignIn } from './SignIn';
import { expect } from '@storybook/jest';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { rest } from 'msw';

export default {
	title: 'Pages/SignIn',
	component: SignIn,
	args: {},
	argTypes: {},
	parameters: {
		msw: {
			handlers: [
				rest.post('/sessions', (req, res, context) => {
					return res(
						context.json({
							message: 'Login realizado',
						})
					);
				}),
			],
		},
	},
} as Meta<ButtonProps>;

export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		userEvent.type(
			canvas.getByPlaceholderText('Digite seu e-mail'),
			'mariana_pereira15@yahoo.com'
		);
		userEvent.type(canvas.getByPlaceholderText('********'), '1234');

		userEvent.click(canvas.getByRole('button'));

		await waitFor(() => {
			return expect(canvas.getByText('Login realizado com sucesso!')).toBeInTheDocument();
		});
	},
};
