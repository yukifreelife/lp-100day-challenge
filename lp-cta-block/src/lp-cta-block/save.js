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
		description,
		buttonText,
		buttonUrl,
		backgroundColor,
		headingColor,
		buttonColor,
		buttonTextColor,
		alignment,
	} = attributes;

	const blockProps = useBlockProps.save( {
		style: {
			backgroundColor: backgroundColor,
			textAlign: alignment,
		},
	} );

	return (
		<div { ...blockProps }>
			<div className="lp-cta-block__inner">
				<RichText.Content
					tagName="h2"
					className="lp-cta-block__heading"
					value={ heading }
					style={ { color: headingColor } }
				/>

				<RichText.Content
					tagName="p"
					className="lp-cta-block__description"
					value={ description }
				/>

				<div className="lp-cta-block__button-wrapper">
					<a
						href={ buttonUrl }
						className="lp-cta-block__button"
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
						} }
					>
						<RichText.Content value={ buttonText } />
					</a>
				</div>
			</div>
		</div>
	);
}
