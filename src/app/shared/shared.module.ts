import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MaterialModule } from '../material/material.module';

//Components
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

//Directives
import { CustomizePaginatorDirective } from './directives/customize-paginator.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    SidebarComponent,
    NewsCardComponent,
    CustomizePaginatorDirective
  ],
  imports: [FormsModule, CommonModule, MaterialModule, HttpClientModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    LoadingComponent,
    SidebarComponent,
    NewsCardComponent
  ]
})
export class SharedModule {}
