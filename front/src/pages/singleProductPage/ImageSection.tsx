import React, { useState } from 'react'
import * as S from './styles/SingleProductPage.styles'

interface Props {
	gallery: string[]
}

const ImageSection: React.FC<Props> = ({ gallery }) => {
	const [focusedImage, setFocusedImage] = useState('')

	const handleHover = (imageLink: string) => {
		setFocusedImage(imageLink)
	}
	return (
		<>
			<S.ImagesContainer>
				<S.SmallImages>
					{gallery.map((imageLink: string) => {
						return (
							<img
								src={imageLink}
								alt="product"
								key={imageLink}
								onMouseOver={() => handleHover(imageLink)}
							/>
						)
					})}
				</S.SmallImages>
				<S.BigImageWrapper>
					<img src={focusedImage || gallery[0]} alt="focused product" />
				</S.BigImageWrapper>
			</S.ImagesContainer>
		</>
	)
}

export default ImageSection
