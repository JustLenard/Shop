import React, { useState } from 'react'
import { ChevronLeftSVG, ChevronRightSVG } from '../../assets/icons'
import * as S from './styles/ImageSection.styles'

interface Props {
	gallery: string[]
}

const ImageSection: React.FC<Props> = ({ gallery }) => {
	const [focusedImage, setFocusedImage] = useState('')

	const setBigPicture = (imageLink: string) => {
		setFocusedImage(imageLink)
	}

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
				<S.BigImageWrapper>
					<img src={focusedImage || gallery[0]} alt="focused product" />
				</S.BigImageWrapper>
				<S.Scroll>
					<S.SvgWrapper onClick={scrollLeft}>
						<ChevronLeftSVG />
					</S.SvgWrapper>
					<S.SmallImages id="scroll">
						{gallery.map((imageLink: string, i: number) => {
							return (
								<S.SmallImage
									src={imageLink}
									alt="product"
									key={i}
									onMouseOver={() => setBigPicture(imageLink)}
									onClick={() => setBigPicture(imageLink)}
									highlight={imageLink === focusedImage}
								/>
							)
						})}
					</S.SmallImages>
					<S.SvgWrapper onClick={scrollRight}>
						<ChevronRightSVG />
					</S.SvgWrapper>
				</S.Scroll>
			</S.ImagesContainer>
		</>
	)
}

export default ImageSection
