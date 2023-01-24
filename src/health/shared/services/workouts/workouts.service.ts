import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Store } from 'store';

import { filter, map, Observable, of } from 'rxjs';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Workout {
  name: string,
  type: string,
  strength: any,
  endurance: any,
  timestamp: number,
  $key: string,
  $exists: () => boolean
}

@Injectable()
export class WorkoutsService implements OnInit {

  workouts$: Observable<Workout[]> = this.db.list(`workouts/${this.uid}`).valueChanges() as Observable<Workout[]>;

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.workouts$.subscribe(next => this.store.set('workouts', next));
  }

  get uid() {
    return this.authService.user.then(uid=>uid);
  }

  getWorkout(key: string) {
    if (!key) return of({});
    return this.store.select<Workout[]>('workouts').pipe(
      filter(Boolean),
      map(workouts => workouts.find((workout: Workout) => workout.$key === key)));
  }

  addWorkout(workout: Workout) {
    return this.db.list(`workouts/${this.uid}`).push(workout);
  }

  updateWorkout(key: string, workout: Workout) {
    return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }

}