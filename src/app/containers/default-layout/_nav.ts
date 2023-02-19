import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  
  {
    name: 'السنوات الدراسية ',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      
      {
        name: 'السنة الدراسة الاولي',
        url: '/base/cards'
      }
      
    ]
  }
  
];
