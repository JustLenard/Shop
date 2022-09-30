import styled from 'styled-components'

export const Wrapper = styled.div`
	.btn {
		width: 12em;
		height: 4em;
		background-color: var(--green);

		border: none;
		border-radius: 10px;

		box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
		outline: none;
		cursor: pointer;

		transition: transform 0.3s ease;

		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		overflow: hidden;

		transition: 0.2s linear;

		:hover {
			filter: brightness(0.9);
		}
	}

	.btn:active {
		transform: scale(0.9);
	}

	.btn__text {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--white);
		position: absolute;
	}

	.btn__text--second {
		opacity: 0;
	}

	.btn__icon {
		font-size: 1.5rem;
		width: 1.5rem;
		height: 1.5rem;
		color: var(--white);
		fill: var(--white);
		position: absolute;
	}

	.btn__icon--cart {
		left: -20%;
	}

	.btn__icon--box {
		top: -50%;
	}

	/* --------- ANIMATION ----------- */
	.btn.active .btn__text--first {
		animation: text1 0.3s forwards;
	}

	.btn.active .btn__text--second {
		animation: text2 3s forwards;
	}

	.btn.active .btn__icon--cart {
		animation: cart 2.5s forwards;
	}

	.btn.active .btn__icon--box {
		animation: box 1.5s forwards;
	}

	@keyframes text1 {
		100% {
			opacity: 0;
		}
	}

	@keyframes text2 {
		90% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes cart {
		30%,
		60% {
			left: 42%;
		}
		100% {
			left: 110%;
		}
	}

	@keyframes box {
		80% {
			color: var(--white);
		}
		90%,
		100% {
			top: 15%;
			opacity: 0;
		}
	}
`
