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
		plans,
		backgroundColor,
		headingColor,
		cardBackgroundColor,
		featuredCardBackgroundColor,
		featuredTextColor,
		buttonColor,
		buttonTextColor,
		columns,
	} = attributes;

	const blockProps = useBlockProps.save( {
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	return (
		<div { ...blockProps }>
			<div className="lp-pricing-block">
				<div className="lp-pricing-block__header">
					<RichText.Content
						tagName="h2"
						className="lp-pricing-block__heading"
						value={ heading }
						style={ { color: headingColor } }
					/>

					<RichText.Content
						tagName="p"
						className="lp-pricing-block__subheading"
						value={ subheading }
					/>
				</div>

				<div
					className="lp-pricing-block__grid"
					style={ {
						gridTemplateColumns: `repeat(${ columns }, 1fr)`,
					} }
				>
					{ plans.map( ( plan, index ) => (
						<div
							key={ index }
							className={ `lp-pricing-block__card ${
								plan.featured ? 'lp-pricing-block__card--featured' : ''
							}` }
							style={ {
								backgroundColor: plan.featured
									? featuredCardBackgroundColor
									: cardBackgroundColor,
							} }
						>
							{ plan.featured && (
								<span
									className="lp-pricing-block__badge"
									style={ { color: featuredTextColor } }
								>
									おすすめ
								</span>
							)}

							<RichText.Content
								tagName="h3"
								className="lp-pricing-block__plan-name"
								value={ plan.name }
								style={ { color: plan.featured ? featuredTextColor : '' } }
							/>

							<div className="lp-pricing-block__price">
								<RichText.Content
									tagName="span"
									className="lp-pricing-block__price-amount"
									value={ plan.price }
									style={ { color: plan.featured ? featuredTextColor : '' } }
								/>
								<RichText.Content
									tagName="span"
									className="lp-pricing-block__price-currency"
									value={ plan.currency }
								/>
								<RichText.Content
									tagName="span"
									className="lp-pricing-block__price-period"
									value={ plan.period }
								/>
							</div>

							<RichText.Content
								tagName="p"
								className="lp-pricing-block__description"
								value={ plan.description }
								style={ { color: plan.featured ? featuredTextColor : '' } }
							/>

							<ul className="lp-pricing-block__features">
								{ plan.features.map( ( feature, featureIndex ) => (
									<li
										key={ featureIndex }
										className="lp-pricing-block__feature"
										style={ { color: plan.featured ? featuredTextColor : '' } }
									>
										<span className="lp-pricing-block__feature-check">✓</span>
										<RichText.Content value={ feature } />
									</li>
								) ) }
							</ul>

							<div className="lp-pricing-block__button-wrapper">
								<a
									href={ plan.buttonUrl }
									className="lp-pricing-block__button"
									style={ {
										backgroundColor: plan.featured
											? featuredTextColor
											: buttonColor,
										color: plan.featured ? buttonColor : buttonTextColor,
									} }
								>
									<RichText.Content value={ plan.buttonText } />
								</a>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
