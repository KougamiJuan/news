import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/** Array of material components used */
const matModules = [
  MatIconModule,
  MatCardModule,
  MatRippleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules]
})
export class MaterialModule {}
