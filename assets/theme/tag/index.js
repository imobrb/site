export default {
    root: ({ props }) => ({
        class: [
            //Font
            'text-xs font-primary text-support-500',

            //Alignments
            'inline-flex items-center justify-center',

            //Spacing
            'px-1.5 py-0.5',

            //Shape
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded
            },

            //Colors
            'text-primary-inverse',
            {
                'bg-primary-500': props.severity == null || props.severity == 'primary',
                'bg-green-500': props.severity == 'success',
                'bg-white/60 border-2 border-white/40': props.severity == 'info',
                'bg-orange-500': props.severity == 'warning',
                'bg-red-500': props.severity == 'danger'
            }
        ]
    }),
    value: {
        class: 'leading-normal'
    },
    icon: {
        class: 'mr-1 text-sm'
    }
};
