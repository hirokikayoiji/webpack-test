
module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'standard'
    ],
    plugins: [
    ],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}