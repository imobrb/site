export default {
    root: ({ props }) => ({
        class: [
            // Flexbox
            'flex flex-col',

            // Position
            'relative',
            { '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full' },

            // Size
            {
                'h-full w-full': props.position == 'left' || props.position == 'right',
                'h-auto w-full': props.position == 'top' || props.position == 'bottom'
            },

            // Shape
            'border-0',

            // Remove dark:border class
            'shadow-lg',

            // Colors
            'pattern',
            'text-surface-700',

            // Remove dark:bg-surface-800 class
            'dark:text-white/80',
            // Remove dark:border-surface-700 class

            // Transitions
            'transition-transform',
            'duration-300',

            // Misc
            'pointer-events-auto'
        ]
    }),
    header: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-between',
            'shrink-0',

            // Spacing
            'p-5',

            // Colors
            'pattern',
            'text-surface-700'
        ]
    },
    title: {
        class: ['text-lg']
    },
    icons: {
        class: ['flex items-center']
    },
    closeButton: {
        class: [
            'absolute',
            'top-7',
            'right-9',

            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Spacing
            'mr-2',
            'last:mr-0',
            'w-8 h-8',

            // Shape
            'border-0',
            'rounded-full',

            // Colors
            'text-white',
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:text-white/80 hover:bg-primary-500/30',
            // Remove dark:hover:text-white/80 and dark:hover:bg-surface-800/80 classes
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset focus:ring-primary-500',
            // Remove dark:focus:ring-primary-300/50 class

            // Misc
            'overflow-hidden'
        ]
    },
    closeButtonIcon: {
        class: [
            // Display
            'inline-block',

            // Size
            'w-4',
            'h-4'
        ]
    },
    content: {
        class: [
            // Spacing and Size
            'p-5',
            'pt-0',
            'h-full',
            'w-full',

            // Growth and Overflow
            'grow',
            'overflow-y-auto'
        ]
    },
    mask: ({ props }) => ({
        class: [
            // Transitions
            'transition-all',
            'duration-300',
            { 'p-5': !props.position == 'full' },

            // Background and Effects
            { 'has-[.mask-active]:bg-transparent bg-black/40': props.modal, 'has-[.mask-active]:backdrop-blur-none backdrop-blur-sm': props.modal }
        ]
    }),
    transition: ({ props }) => {
        return props.position === 'top'
            ? {
                  enterFromClass: 'translate-x-0 -translate-y-full translate-z-0 mask-active',
                  leaveToClass: 'translate-x-0 -translate-y-full translate-z-0 mask-active'
              }
            : props.position === 'bottom'
            ? {
                  enterFromClass: 'translate-x-0 translate-y-full translate-z-0 mask-active',
                  leaveToClass: 'translate-x-0 translate-y-full translate-z-0 mask-active'
              }
            : props.position === 'left'
            ? {
                  enterFromClass: '-translate-x-full translate-y-0 translate-z-0 mask-active',
                  leaveToClass: '-translate-x-full translate-y-0 translate-z-0 mask-active'
              }
            : props.position === 'right'
            ? {
                  enterFromClass: 'translate-x-full translate-y-0 translate-z-0 mask-active',
                  leaveToClass: 'translate-x-full translate-y-0 translate-z-0 mask-active'
              }
            : {
                  enterFromClass: 'opacity-0 mask-active',
                  enterActiveClass: 'transition-opacity duration-400 ease-in',
                  leaveActiveClass: 'transition-opacity duration-400 ease-in',
                  leaveToClass: 'opacity-0 mask-active'
              };
    }
};
