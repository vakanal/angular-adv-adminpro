import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ErrorsModule } from './errors/errors.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AuthModule, PagesModule, ErrorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
