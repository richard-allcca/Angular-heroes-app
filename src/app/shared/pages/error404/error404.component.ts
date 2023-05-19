import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404Component {}
