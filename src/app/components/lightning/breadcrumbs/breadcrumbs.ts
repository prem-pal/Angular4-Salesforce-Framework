import {Component, ChangeDetectionStrategy, Input, ContentChildren, QueryList} from '@angular/core';
import {NglBreadcrumb} from './breadcrumb';

@Component({
 selector: 'ngl-breadcrumbs',
 templateUrl: 'breadcrumbs.component.html',
 moduleId: module.id,
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglBreadcrumbs {
  @Input() assistiveText: string;
  @ContentChildren(NglBreadcrumb) breadcrumbs: QueryList<NglBreadcrumb>;
}
