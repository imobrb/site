export default {
    root: {
        class: [
            //Shape
            'overflow-hidden rounded ',

            //Color
            '!border-blue-950',
        ]
    },
    header: {
        class: '!hidden'
    },
    content: {
        class: '!p-0'
    },
    mask: ({ props }) => ({
        class: [
            // Transitions
            'transition-all',
            'duration-300',
            { 'p-5': !props.position == 'full' },

            // Background and Effects
            { 'has-[.mask-active]:bg-transparent bg-black/10': props.modal, 'has-[.mask-active]:backdrop-blur-none backdrop-blur-sm': props.modal }
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