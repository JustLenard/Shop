import styled from 'styled-components/macro'

export const SingleColor = styled.div<{ color: string }>`
	border: 1px solid black;

	width: 35px;
	height: 35px;

	background-color: ${({ color }) => color};
	cursor: pointer;
	transition: 0.3s linear;

	border-radius: 3px;
`
