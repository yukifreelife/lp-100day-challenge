/**
 * Retrieves the translation of text.
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 */
import { useBlockProps, RichText, InspectorControls, ColorPalette } from '@wordpress/block-editor';

/**
 * WordPress components
 */
import {
	PanelBody,
	TextControl,
	SelectControl,
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor.
 */
export default function Edit( { attributes, setAttributes } ) {
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

	const blockProps = useBlockProps( {
		style: {
			backgroundColor: backgroundColor,
			textAlign: alignment,
		},
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'CTA設定', 'lp-cta-block' ) }>
					<TextControl
						label={ __( '見出し', 'lp-cta-block' ) }
						value={ heading }
						onChange={ ( value ) => setAttributes( { heading: value } ) }
					/>

					<TextControl
						label={ __( '説明文', 'lp-cta-block' ) }
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						multiline
					/>

					<TextControl
						label={ __( 'ボタンテキスト', 'lp-cta-block' ) }
						value={ buttonText }
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
					/>

					<TextControl
						label={ __( 'ボタンリンク先', 'lp-cta-block' ) }
						value={ buttonUrl }
						onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
					/>

					<SelectControl
						label={ __( '配置', 'lp-cta-block' ) }
						value={ alignment }
						options={ [
							{ label: __( '左', 'lp-cta-block' ), value: 'left' },
							{ label: __( '中央', 'lp-cta-block' ), value: 'center' },
							{ label: __( '右', 'lp-cta-block' ), value: 'right' },
						] }
						onChange={ ( value ) => setAttributes( { alignment: value } ) }
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
				<div className="lp-cta-block__inner">
					<RichText
						tagName="h2"
						className="lp-cta-block__heading"
						value={ heading }
						onChange={ ( value ) => setAttributes( { heading: value } ) }
						placeholder={ __( '見出しを入力...', 'lp-cta-block' ) }
						style={ { color: headingColor } }
					/>

					<RichText
						tagName="p"
						className="lp-cta-block__description"
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						placeholder={ __( '説明文を入力...', 'lp-cta-block' ) }
					/>

					<div className="lp-cta-block__button-wrapper">
						<RichText
							tagName="a"
							className="lp-cta-block__button"
							value={ buttonText }
							onChange={ ( value ) => setAttributes( { buttonText: value } ) }
							placeholder={ __( 'ボタンテキスト...', 'lp-cta-block' ) }
							href={ buttonUrl }
							style={ {
								backgroundColor: buttonColor,
								color: buttonTextColor,
							} }
						/>
					</div>
				</div>
			</div>
		</>
	);
}
