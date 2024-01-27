/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            textColor: {
                'basic': 'rgb(var(--text-color))'
            },
            animation: {
                'heartBeat': 'heartbeat 0.7s ease-in-out '
            },
            keyframes: {
                'heartbeat': {
                    '0%': {transform: 'scale(0)'},
                    '50%': {transform: 'scale(1.3)'},
                    '100%': {transform: 'scale(1)'}
                }
            },
            gridTemplateColumns: {
                'standard': "repeat(6, minmax(100px, 1fr));",
            },
            transitionProperty: {
                'bg-opacity': 'background-opacity',
                'widthBorder': 'width , border'
            }
        },
    },
    plugins: [],
}

