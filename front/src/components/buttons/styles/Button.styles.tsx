import styled from 'styled-components/macro'

const Button = styled.button`
	padding: 1rem 2rem;
	display: inline-block;
	border: none;
	text-transform: uppercase;
	border-radius: 10px;

	box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.4);

	transition: 0.2s linear;
	cursor: pointer;

	:hover {
		scale: 1.05;
		filter: brightness(0.9);
	}
`

export const GreenButton = styled(Button)`
	background-color: var(--green);
	color: var(--white);

	/* Because there is no height/width, the white button with border
    is bigger the green one without, hence this. Don't know if
    there is a better way of doing this */
	/* padding: 17px 33px; */
`

export const WhiteButton = styled(Button)`
	border: 1px solid black;
	background-color: var(--white);
`

export const RedButton = styled(Button)`
	background-color: var(--redButton);
	color: var(--white);
`
