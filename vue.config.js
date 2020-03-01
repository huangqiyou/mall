module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'commons': '@/commons',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
            }
        }
    }
}