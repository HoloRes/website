module.exports = {
	extends: [
		'next/core-web-vitals',
		'airbnb',
		'airbnb-typescript',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'sort-keys': 'off',
		'func-names': 'off',
		'prettier/prettier': ['off', {
			useTabs: false
		}],
		'@typescript-eslint/indent': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/react-in-jsx-scope': 'off',
		'no-plusplus': ['error', {
			'allowForLoopAfterthoughts': true,
		}],
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/anchor-is-valid': [ 'error', {
			'components': [ 'Link' ],
			'specialLink': [ 'hrefLeft', 'hrefRight' ],
			'aspects': [ 'invalidHref', 'preferButton' ],
		}],
		'@next/next/no-img-element': 'off',
		'jsx-a11y/alt-text': 'off',
	}
}
