import { Injectable } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  screenSize: string;

  breakpoints: { [key: string]: string } = {
    "mobile": "(max-width: 1100px)",
    "tablet": "(max-width: 1770px)"
  };

  breakpointsStates: {}

  constructor(private breakpointObserver: BreakpointObserver) { }

  onLayoutChanges(): Observable<string> {
    return this.breakpointObserver
      .observe(Object.values(this.breakpoints))
      .pipe(map((observeResponse) => {
        this.screenSize = observeResponse.breakpoints[this.breakpoints['mobile']] ? 'is-mobile' : (observeResponse.breakpoints[this.breakpoints['tablet']] ? 'is-tablet' : 'is-desktop');
        return this.screenSize;
      }));
  }
}
