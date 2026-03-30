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
	RangeControl,
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
		testimonials,
		backgroundColor,
		headingColor,
		cardBackgroundColor,
		starColor,
		columns,
	} = attributes;

	const blockProps = useBlockProps( {
		style: {
			backgroundColor: backgroundColor,
		},
	} );

	const updateTestimonial = ( index, field, value ) => {
		const newTestimonials = [ ...testimonials ];
		newTestimonials[ index ][ field ] = value;
		setAttributes( { testimonials: newTestimonials } );
	};

	const addTestimonial = () => {
		setAttributes( {
			testimonials: [
				...testimonials,
				{
					name: '新しいお客様',
					role: '役職・会社名',
					content: 'ここに感想が入ります。',
					rating: 5,
				},
			],
		} );
	};

	const removeTestimonial = ( index ) => {
		const newTestimonials = testimonials.filter( ( _, i ) => i !== index );
		setAttributes( { testimonials: newTestimonials } );
	};

	const renderStars = ( rating ) => {
		return Array.from( { length: 5 }, ( _, i ) => (
			<span
				key={ i }
				style={ {
					color: i < rating ? starColor : '#e0e0e0',
					fontSize: '18px',
				} }
			>
				★
			</span>
		) );
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
					<RangeControl
						label={ __( '列数', 'lp-cta-block' ) }
						value={ columns }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
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
						{ __( '星の色', 'lp-cta-block' ) }
					</label>
					<ColorPalette
						value={ starColor }
						onChange={ ( value ) => setAttributes( { starColor: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="lp-testimonials-block">
					<div className="lp-testimonials-block__header">
						<RichText
							tagName="h2"
							className="lp-testimonials-block__heading"
							value={ heading }
							onChange={ ( value ) => setAttributes( { heading: value } ) }
							placeholder={ __( '見出しを入力...', 'lp-cta-block' ) }
							style={ { color: headingColor } }
						/>
						<RichText
							tagName="p"
							className="lp-testimonials-block__subheading"
							value={ subheading }
							onChange={ ( value ) => setAttributes( { subheading: value } ) }
							placeholder={ __( 'サブ見出しを入力...', 'lp-cta-block' ) }
						/>
					</div>

					<div
						className="lp-testimonials-block__grid"
						style={ {
							gridTemplateColumns: `repeat(${ columns }, 1fr)`,
						} }
					>
						{ testimonials.map( ( testimonial, index ) => {
							return (
								<div
									key={ index }
									className="lp-testimonials-block__card"
									style={ { backgroundColor: cardBackgroundColor } }
								>
									<div className="lp-testimonials-block__card-header">
										<div className="lp-testimonials-block__rating">
											{ renderStars( testimonial.rating ) }
										</div>
										<Button
											isDestructive
											isSmall
											onClick={ () => removeTestimonial( index ) }
											className="lp-testimonials-block__remove-btn"
										>
											削除
										</Button>
									</div>

									<RichText
										tagName="p"
										className="lp-testimonials-block__content"
										value={ testimonial.content }
										onChange={ ( value ) => updateTestimonial( index, 'content', value ) }
										placeholder={ __( '感想を入力...', 'lp-cta-block' ) }
									/>

									<div className="lp-testimonials-block__author">
										<RichText
											tagName="div"
											className="lp-testimonials-block__name"
											value={ testimonial.name }
											onChange={ ( value ) => updateTestimonial( index, 'name', value ) }
											placeholder={ __( 'お名前', 'lp-cta-block' ) }
										/>
										<RichText
											tagName="div"
											className="lp-testimonials-block__role"
											value={ testimonial.role }
											onChange={ ( value ) => updateTestimonial( index, 'role', value ) }
											placeholder={ __( '役職・会社名', 'lp-cta-block' ) }
										/>
									</div>

									<RangeControl
										label={ __( '評価', 'lp-cta-block' ) }
										value={ testimonial.rating }
										onChange={ ( value ) => updateTestimonial( index, 'rating', value ) }
										min={ 1 }
										max={ 5 }
										className="lp-testimonials-block__rating-control"
									/>
								</div>
							);
						} ) }
					</div>

					<Button
						isSecondary
						onClick={ addTestimonial }
						className="lp-testimonials-block__add-btn"
					>
						{ __( 'お客様の声を追加', 'lp-cta-block' ) }
					</Button>
				</div>
			</div>
		</>
	);
}
