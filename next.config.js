const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextJsConfig = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/index2': { page: '/index2' },
            '/index3': { page: '/index3' },
            '/index4': { page: '/index4' },
            '/index5': { page: '/index5' },
            '/index6': { page: '/index6' },
            '/index7': { page: '/index7' },
            '/index8': { page: '/index8' },
            '/about': { page: '/about' },
            '/blog': { page: '/blog' },
            '/blog2': { page: '/blog2' },
            '/blog-details': { page: '/blog-details' },
            '/coming-soon': { page: '/coming-soon' },
            '/contact': { page: '/contact' },
            '/error': { page: '/error' },
            '/faq': { page: '/faq' },
            '/pricing': { page: '/pricing' },
            '/privacy-policy': { page: '/privacy-policy' },
            '/project-details': { page: '/project-details' },
            '/projects': { page: '/projects' },
            '/projects2': { page: '/projects2' },
            '/service-details': { page: '/service-details' },
            '/services': { page: '/services' },
            '/services2': { page: '/services2' },
            '/signin': { page: '/signin' },
            '/signup': { page: '/signup' },
            '/team': { page: '/team' },
            '/terms-conditions': { page: '/terms-conditions' },
            '/know-more-details-one': { page: '/know-more-details-one' },
            '/know-more-details-two': { page: '/know-more-details-two' },
            '/know-more-details-three': { page: '/know-more-details-three' },
            '/know-more-details-four': { page: '/know-more-details-four' },
            '/know-more-details-five': { page: '/know-more-details-five' },
            '/know-more-details-six': { page: '/know-more-details-six' },
            '/service-line-one': {page: '/service-line-one'},
            '/service-line-two': {page: '/service-line-two'},
            '/service-line-three': {page: '/service-line-three'},
            '/growth-tips': {page: '/growth-tips'},
            '/quiz': {page: '/quiz'},
            '/result': {page: '/result'},
            '/download-result': {page: '/download-result'}
        }
    }
}

module.exports = withPlugins ([
    [
        withImages({
            webpack(config, options) {
                return config
            }
        })
    ],

    [
        nextJsConfig
    ]
])
