import { FormControl } from '@angular/forms';
export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  gender: string;
}

export interface IFormEmployee {
  id: FormControl<number | null>;
  first_name: FormControl<string | null>;
  last_name: FormControl<string | null>;
  email: FormControl<string | null>;
  avatar: FormControl<string | null>;
  gender: FormControl<string | null>;
}

