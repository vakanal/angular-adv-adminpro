import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public title!: string;
  public titleSubs!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.titleSubs = this.getArgumentosRuta().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  getArgumentosRuta(): Observable<Data> {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event) => (event as ActivationEnd).snapshot.firstChild === null),
      map((event) => (event as ActivationEnd).snapshot.data)
    );
  }
}
