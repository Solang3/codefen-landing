module.exports = {
	siteMetadata: {
		title: 'Codefen Landing',
		description: 'Codefen.',
		keywords: `SEO Keywords here`,
		twitter: 'https://twitter.com/codefen',
		siteUrl: `https://www.codefen.io`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		}
	],
	pathPrefix: "/codefen-landing"
};
