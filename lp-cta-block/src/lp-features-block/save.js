/**
 * React hook that is used to mark the block wrapper element.
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup.
 */
export default function save( { attributes } ) {
	const {
		heading,
		subheading,
		features,
		backgroundColor,
		headingColor,
		iconColor,
		cardBackgroundColor,
		columns,
		layout,
	} = attributes;

	const blockProps = useBlockProps.save( {
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	const getIconSVG = ( iconName ) => {
		const icons = {
			'award': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
			'clock': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
			'shield': 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
			'yes': 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
			'heart': 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
			'star-filled': 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
			'groups': 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
			'megaphone': 'M4 10v10h2v-4h2l4 4v-12l-4 4H6v-4H4zm12-1c-.7 0-1.37.1-2 .29V5.5c0-1.38-1.12-2.5-2.5-2.5S9 4.12 9 5.5v2.79c-.63-.19-1.3-.29-2-.29-2.76 0-5 2.24-5 5s2.24 5 5 5c.7 0 1.37-.1 2-.29V17.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-2.79c.63.19 1.3.29 2 .29 2.76 0 5-2.24 5-5s-2.24-5-5-5z',
			'chart-line': 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
			'target': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.22-7.52-1.72 1.72 7.52.31-2.58z',
			'smiley': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7zm8-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z',
			'thumbs-up': 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z',
		};

		const path = icons[ iconName ] || icons['star-filled'];
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="lp-features-block__icon-svg"
			>
				<path d={ path } />
			</svg>
		);
	};

	return (
		<div { ...blockProps }>
			<div className="lp-features-block">
				<div className="lp-features-block__header">
					<RichText.Content
						tagName="h2"
						className="lp-features-block__heading"
						value={ heading }
						style={ { color: headingColor } }
					/>

					<RichText.Content
						tagName="p"
						className="lp-features-block__subheading"
						value={ subheading }
					/>
				</div>

				<div
					className={ `lp-features-block__layout lp-features-block__layout--${ layout }` }
					style={
						layout === 'grid'
							? { gridTemplateColumns: `repeat(${ columns }, 1fr)` }
							: {}
					}
				>
					{ features.map( ( feature, index ) => (
						<div
							key={ index }
							className="lp-features-block__card"
							style={ { backgroundColor: cardBackgroundColor } }
						>
							<div
								className="lp-features-block__icon"
								style={ { color: iconColor } }
							>
								{ getIconSVG( feature.icon ) }
							</div>

							<RichText.Content
								tagName="h3"
								className="lp-features-block__title"
								value={ feature.title }
							/>

							<RichText.Content
								tagName="p"
								className="lp-features-block__description"
								value={ feature.description }
							/>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
