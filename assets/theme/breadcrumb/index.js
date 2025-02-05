export default {
    root: {
        class: [
            // Shape

            // Spacing

            // Color

            // Misc
        ]
    },
    menu: {
        class: [
            // Flex & Alignment
            'flex items-center flex-nowrap',

            // Spacing
            'm-0 p-0 list-none leading-none'
        ]
    },
    action: {
        class: [
            // Flex & Alignment
            'flex items-center hover:bg-primary-500/20 p-2 rounded-md',

            // Shape

            // Color
            'text-white/80',

            // States
            'focus-visible:outline-none focus-visible:outline-offset-0',
            'focus-visible:ring focus-visible:ring-primary-400/50',

            // Transitions
            'transition-shadow duration-200',

            // Misc
            'text-white/80 font-primary uppercase'
        ]
    },
    icon: {
        class: 'text-white/80'
    },
    separator: {
        class: [
            // Flex & Alignment
            'flex items-center',

            // Spacing
            'mx-2',

            // Color
            'text-white/80'
        ]
    }
};
