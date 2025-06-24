import type { IUser } from '@/views/types';

export interface ICompositionCounterProps {
  title?: string;
}

export interface IUserBlockProps {
  user: IUser;
}

export interface IUserBlockEmits {
  (e: 'increment-age', value: string): void;
  (e: 'decrement-age'): void;
}

// type TFruits = Array<string>;

// interface IUser<T> {
//   name: string;
//   entity: T;
// }

// const user: IUser<string> = {
//   name: 'Sergey',
//   entity: 'Audi',
// };

// const fruits: TFruits = ['apple', 'banana'];

export interface IInfoBannerProps {
  text: string;
  link: string;
}
