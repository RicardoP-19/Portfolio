import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsivService {
  isMobile: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile = this.breakpointObserver.observe(['(max-width: 940px)'])
      .pipe(
        map((state: BreakpointState) => state.matches),
        shareReplay(1)
      );
  }
}
