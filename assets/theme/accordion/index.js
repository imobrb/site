export default {
    accordiontab: {
        root: {
            class: 'mb-1'
        },
        header: ({ props }) => ({
            class: [
                // State
                { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled }
            ]
        }),
        headerAction: ({ context }) => ({
            class: [
                //Font
                'font-medium',
                'leading-none',

                // Alignments
                'flex items-center',
                'relative',

                // Sizing
                'px-4 py-4',

                // Shape
                'rounded-md',
                { 'rounded-t-md': !context.active, 'rounded-b-none': context.active },

                // Color
                'border border border-primary-500/30',
                'bg-primary-500/20',
                'text-surface-600 dark:text-surface-0/80',
                { 'text-white bg-primary-500/30': context.active },

                // Transition
                'transition duration-200 ease-in-out',
                'transition-shadow duration-200',

                // States
                'hover:bg-primary-500/30',
                'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50', // Focus

                // Misc
                'cursor-pointer no-underline select-none'
            ]
        }),
        headerIcon: {
            class: 'inline-block mr-2'
        },
        headerTitle: {
            class: 'leading-none'
        },
        content: {
            class: [
                // Spacing
                'p-2',

                //Shape
                'rounded-b-md',
                'border-t-0',

                // Color
                'bg-primary-500/20',
                'border border-primary-500/30',
                'text-white-700 dark:text-surface-0/80'
            ]
        },
        transition: {
            enterFromClass: 'max-h-0',
            enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
            enterToClass: 'max-h-[1000px]',
            leaveFromClass: 'max-h-[1000px]',
            leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
            leaveToClass: 'max-h-0'
        }
    }
};
