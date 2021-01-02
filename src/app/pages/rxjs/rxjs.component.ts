import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take, map, filter, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSubs!: Subscription;

  constructor() {}

  ngOnInit(): void {
    // this.retornaObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (valor) => console.log('Subs:', valor),
    //     (err) => console.error(err),
    //     () => console.log('Fin')
    //   );
    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log,
      console.error,
      () => console.log('Fin')
    );
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      take(1000),
      map((valor) => valor + 1),
      filter((valor) => valor % 2 === 0)
    );
  }

  retornaObservable(): Observable<number> {
    let i = 0;

    return new Observable((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 5) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 3) {
          observer.error('Número inconrrecto');
        }
      }, 1500);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
