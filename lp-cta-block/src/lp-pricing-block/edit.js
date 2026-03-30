/**
 * Retrieves the translation of text.
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 */
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

/**
 * WordPress components
 */
import {
	PanelBody,
	TextControl,
	ToggleControl,
	ColorPalette,
	Button,
} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor.
 */
export default function Edit( { attributes, setAttributes } ) {
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

	const blockProps = useBlockProps( {
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	const updatePlan = ( index, field, value ) => {
		const newPlans = [ ...plans ];
		newPlans[ index ][ field ] = value;
		setAttributes( { plans: newPlans } );
	};

	const updatePlanFeature = ( planIndex, featureIndex, value ) => {
		const newPlans = [ ...plans ];
		newPlans[ planIndex ].features[ featureIndex ] = value;
		setAttributes( { plans: newPlans } );
	};

	const addPlanFeature = ( planIndex ) => {
		const newPlans = [ ...plans ];
		newPlans[ planIndex ].features.push( '新しい機能' );
		setAttributes( { plans: newPlans } );
	};

	const removePlanFeature = ( planIndex, featureIndex ) => {
		const newPlans = [ ...plans ];
		newPlans[ planIndex ].features = newPlans[ planIndex ].features.filter(
			( _, i ) => i !== featureIndex
		);
		setAttributes( { plans: newPlans } );
	};

	const addPlan = () => {
		setAttributes( {
			plans: [
				...plans,
				{
					name: '新しいプラン',
					price: '0',
					currency: '円',
					period: '/月',
					description: 'プランの説明',
					features: [ '機能1', '機能2' ],
					featured: false,
					buttonText: '選択する',
					buttonUrl: '#contact',
				},
			],
		} );
	};

	const removePlan = ( index ) => {
		const newPlans = plans.filter( ( _, i ) => i !== index );
		setAttributes( { plans: newPlans } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'セクション設定', 'lp-cta-block' ) }>
					<TextControl
						label={ __( '見出し', 'lp-cta-block' ) }
						value={ heading }
						onChange={ ( value ) => setAttributes( { heading: value } ) }
					/>

					<TextControl
						label={ __( 'サブ見出し', 'lp-cta-block' ) }
						value={ subheading }
						onChange={ ( value ) => setAttributes( { subheading: value } ) }
					/>

					<TextControl
						label={ __( '列数', 'lp-cta-block' ) }
						type="number"
						value={ columns }
						onChange={ ( value ) => setAttributes( { columns: parseInt( value ) || 3 } ) }
						min={ 1 }
						max={ 4 }
					/>
				</PanelBody>

				<PanelBody title={ __( '色設定', 'lp-cta-block' ) }>
					<label style={ { display: 'block', marginBottom: '8px' } }>
						{ __( '背景色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ backgroundColor }
						onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
					/>

					<label style={ { display: 'block', marginBottom: '8px', marginTop: '16px' } }>
						{ __( '見出し色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ headingColor }
						onChange={ ( value ) => setAttributes( { headingColor: value } ) }
					/>

					<label style={ { display: 'block', marginBottom: '8px', marginTop: '16px' } }>
						{ __( 'カード背景色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ cardBackgroundColor }
						onChange={ ( value ) => setAttributes( { cardBackgroundColor: value } ) }
					/>

					<label style={ { display: 'block', marginBottom: '8px', marginTop: '16px' } }>
						{ __( 'おすすめカード背景色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ featuredCardBackgroundColor }
						onChange={ ( value ) =>
							setAttributes( { featuredCardBackgroundColor: value } )
						}
					/>

					<label style={ { display: 'block', marginBottom: '8px', marginTop: '16px' } }>
						{ __( 'おすすめテキスト色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ featuredTextColor }
						onChange={ ( value ) => setAttributes( { featuredTextColor: value } ) }
					/>

					<label style={ { display: 'block', marginBottom: '8px', marginTop: '16px' } }>
						{ __( 'ボタン背景色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ buttonColor }
						onChange={ ( value ) => setAttributes( { buttonColor: value } ) }
					/>

					<label style={ { display: 'block', marginBottom: '8px', marginTop: '16px' } }>
						{ __( 'ボタン文字色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ buttonTextColor }
						onChange={ ( value ) => setAttributes( { buttonTextColor: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="lp-pricing-block">
					<div className="lp-pricing-block__header">
						<RichText
							tagName="h2"
							className="lp-pricing-block__heading"
							value={ heading }
							onChange={ ( value ) => setAttributes( { heading: value } ) }
							placeholder={ __( '見出しを入力...', 'lp-cta-block' ) }
							style={ { color: headingColor } }
						/>

						<RichText
							tagName="p"
							className="lp-pricing-block__subheading"
							value={ subheading }
							onChange={ ( value ) => setAttributes( { subheading: value } ) }
							placeholder={ __( 'サブ見出しを入力...', 'lp-cta-block' ) }
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
								<div className="lp-pricing-block__card-header">
									{ plan.featured && (
										<span
											className="lp-pricing-block__badge"
											style={ { color: featuredTextColor } }
										>
											{ __( 'おすすめ', 'lp-cta-block' ) }
										</span>
									)}
									<Button
										isDestructive
										isSmall
										onClick={ () => removePlan( index ) }
										className="lp-pricing-block__remove-btn"
									>
										削除
									</Button>
								</div>

								<RichText
									tagName="h3"
									className="lp-pricing-block__plan-name"
									value={ plan.name }
									onChange={ ( value ) => updatePlan( index, 'name', value ) }
									placeholder={ __( 'プラン名', 'lp-cta-block' ) }
									style={ { color: plan.featured ? featuredTextColor : '' } }
								/>

								<div className="lp-pricing-block__price">
									<RichText
										tagName="span"
										className="lp-pricing-block__price-amount"
										value={ plan.price }
										onChange={ ( value ) => updatePlan( index, 'price', value ) }
										placeholder="0"
										style={ { color: plan.featured ? featuredTextColor : '' } }
									/>
									<RichText
										tagName="span"
										className="lp-pricing-block__price-currency"
										value={ plan.currency }
										onChange={ ( value ) => updatePlan( index, 'currency', value ) }
										placeholder="円"
									/>
									<RichText
										tagName="span"
										className="lp-pricing-block__price-period"
										value={ plan.period }
										onChange={ ( value ) => updatePlan( index, 'period', value ) }
										placeholder="/月"
									/>
								</div>

								<RichText
									tagName="p"
									className="lp-pricing-block__description"
									value={ plan.description }
									onChange={ ( value ) => updatePlan( index, 'description', value ) }
									placeholder={ __( '説明文', 'lp-cta-block' ) }
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
											<RichText
												value={ feature }
												onChange={ ( value ) =>
													updatePlanFeature( index, featureIndex, value )
												}
												placeholder={ __( '機能', 'lp-cta-block' ) }
											/>
											<Button
												isDestructive
												isSmall
												onClick={ () => removePlanFeature( index, featureIndex ) }
												className="lp-pricing-block__feature-remove"
											>
												×
											</Button>
										</li>
									) ) }
								</ul>

								<Button
									isSecondary
									isSmall
									onClick={ () => addPlanFeature( index ) }
									className="lp-pricing-block__add-feature-btn"
								>
									+ { __( '機能を追加', 'lp-cta-block' ) }
								</Button>

								<div className="lp-pricing-block__button-wrapper">
									<RichText
										tagName="a"
										className="lp-pricing-block__button"
										value={ plan.buttonText }
										onChange={ ( value ) =>
											updatePlan( index, 'buttonText', value )
										}
										placeholder={ __( 'ボタンテキスト', 'lp-cta-block' ) }
										href={ plan.buttonUrl }
										style={ {
											backgroundColor: plan.featured
												? featuredTextColor
												: buttonColor,
											color: plan.featured ? buttonColor : buttonTextColor,
										} }
									/>
								</div>

								<TextControl
									label={ __( 'ボタンリンク先', 'lp-cta-block' ) }
									value={ plan.buttonUrl }
									onChange={ ( value ) => updatePlan( index, 'buttonUrl', value ) }
									className="lp-pricing-block__button-url"
								/>

								<ToggleControl
									label={ __( 'おすすめプラン', 'lp-cta-block' ) }
									checked={ plan.featured }
									onChange={ ( value ) => updatePlan( index, 'featured', value ) }
								/>
							</div>
						) ) }
					</div>

					<Button
						isSecondary
						onClick={ addPlan }
						className="lp-pricing-block__add-btn"
					>
						{ __( 'プランを追加', 'lp-cta-block' ) }
					</Button>
				</div>
			</div>
		</>
	);
}
