//import { Observable, BehaviorSubject } from 'rxjs';
//import { distinctUntilChanged } from 'rxjs/operators';

// import 'rxjs/add/operator/pluck';
// import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  [key: string]: any
}

const state: State = {};

export class Store {

  // private subject = new BehaviorSubject<State>(state);
  // //private store = this.subject.asObservable().distinctUntilChanged();

  // get value() {
  //   return this.subject.value;
  // }

  // select<T>(name: string): Observable<T> {
  //   return this.store.pluck(name);
  // }

  // set(name: string, state: any) {
  //   this.subject.next({ ...this.value, [name]: state });
  // }

}
