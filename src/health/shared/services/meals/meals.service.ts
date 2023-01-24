import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Store } from 'store';

import { AuthService } from 'src/auth/shared/services/auth/auth.service';

import { Observable, of, filter, map } from 'rxjs';

export interface Meal {
  name: string,
  ingredients: string[],
  timestamp: number,
  $key: string,
  $exists: () => boolean
}

@Injectable()
export class MealsService implements OnInit{

  meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`).valueChanges() as Observable<Meal[]>;

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.meals$.subscribe((next:any) => this.store.set('meals', next));
  }

  get uid() {
    return this.authService.user.then(uid => uid);
  }

  getMeal(key: string) {
    if (!key) return of({});
    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean), 
      map(meals => meals.find((meal: Meal) => meal.$key === key)));
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  updateMeal(key: string, meal: Meal) {
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }

}