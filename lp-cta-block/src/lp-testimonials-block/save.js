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
		testimonials,
		backgroundColor,
		headingColor,
		cardBackgroundColor,
		starColor,
		columns,
	} = attributes;

	const blockProps = useBlockProps.save( {
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	const renderStars = ( rating ) => {
		return Array.from( { length: 5 }, ( _, i ) => (
			<span
				key={ i }
				className={ `lp-testimonials-block__star ${ i < rating ? 'lp-testimonials-block__star--filled' : '' }` }
				style={ {
					color: i < rating ? starColor : '#e0e0e0',
				} }
				aria-label={ `${ rating } / 5` }
			>
				★
			</span>
		) );
	};

	return (
		<div { ...blockProps }>
			<div className="lp-testimonials-block">
				<div className="lp-testimonials-block__header">
					<RichText.Content
						tagName="h2"
						className="lp-testimonials-block__heading"
						value={ heading }
						style={ { color: headingColor } }
					/>

					<RichText.Content
						tagName="p"
						className="lp-testimonials-block__subheading"
						value={ subheading }
					/>
				</div>

				<div
					className="lp-testimonials-block__grid"
					style={ {
						gridTemplateColumns: `repeat(${ columns }, 1fr)`,
					} }
				>
					{ testimonials.map( ( testimonial, index ) => (
						<div
							key={ index }
							className="lp-testimonials-block__card"
							style={ { backgroundColor: cardBackgroundColor } }
						>
							<div className="lp-testimonials-block__rating">
								{ renderStars( testimonial.rating ) }
							</div>

							<RichText.Content
								tagName="p"
								className="lp-testimonials-block__content"
								value={ testimonial.content }
							/>

							<div className="lp-testimonials-block__author">
								<RichText.Content
									tagName="div"
									className="lp-testimonials-block__name"
									value={ testimonial.name }
								/>
								<RichText.Content
									tagName="div"
									className="lp-testimonials-block__role"
									value={ testimonial.role }
								/>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
