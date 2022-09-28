import React, { useState } from 'react'
import { ChevronLeftSVG, ChevronRightSVG } from '../../assets/icons'
import * as S from './styles/SingleProductPage.styles'

interface Props {
	gallery: string[]
}

const ImageSection: React.FC<Props> = ({ gallery }) => {
	const [focusedImage, setFocusedImage] = useState('')

	const handleHover = (imageLink: string) => {
		setFocusedImage(imageLink)
	}

	// Delete this later
	const newGallery = [...gallery, ...gallery, ...gallery]

	const scrollRight = () => {
		const slider = document.getElementById('scroll')

		if (slider) {
			slider.scrollLeft = slider.scrollLeft + 200
		}
	}

	const scrollLeft = () => {
		const slider = document.getElementById('scroll')

		if (slider) {
			slider.scrollLeft = slider.scrollLeft - 200
		}
	}

	return (
		<>
			<S.ImagesContainer>
				<S.Scroll>
					<S.SvgWrapper onClick={scrollLeft}>
						<ChevronLeftSVG />
					</S.SvgWrapper>
					<S.SmallImages id="scroll">
						{newGallery.map((imageLink: string, i: number) => {
							return (
								<img
									src={imageLink}
									alt="product"
									// key={imageLink}
									key={i}
									onMouseOver={() => handleHover(imageLink)}
								/>
							)
						})}
					</S.SmallImages>
					<S.SvgWrapper onClick={scrollRight}>
						<ChevronRightSVG />
					</S.SvgWrapper>
				</S.Scroll>
				<S.BigImageWrapper>
					<img src={focusedImage || gallery[0]} alt="focused product" />
				</S.BigImageWrapper>
			</S.ImagesContainer>
		</>
	)
}

export default ImageSection
