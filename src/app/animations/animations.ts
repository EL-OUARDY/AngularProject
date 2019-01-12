import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter', [  // void => *
        style({ transform: 'translateX(-10px)' }),
        animate(1000)
    ]),

    transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
    ])

]);
