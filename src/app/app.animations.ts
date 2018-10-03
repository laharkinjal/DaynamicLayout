import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '100%', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('200ms', style({
                'opacity': '0'
            })),
            animate('200ms', style({
                'max-height': '0px'
            })),
            animate('700ms', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms', style({
                'visibility': 'visible'
            })),
            animate('600ms', style({
                'max-height': '100%'
            })),
            animate('800ms', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
];

export const SlideInOutNoHeightAnimation = [
    trigger('slideInOutNoHeight', [
        
        transition(':enter', [
          style({height: 0, opacity:0}),
          animate(250, style({height: '*', opacity:1}))
        ]),
        transition(':leave', [style({height: '*', opacity:1}),
          animate(250, style({height: 0, opacity:0}))])
    ]),
];