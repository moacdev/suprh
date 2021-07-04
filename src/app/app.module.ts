import { InMemoryDataService } from './Services/In-Memory/in-memory-data.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NotAccessDialogComponent } from './SUPRH/Paie/not-access-dialog/not-access-dialog.component';

@NgModule({
  declarations: [
  
    
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { apiBase: "/paie/users" } ),
  ],
  providers: [
    InMemoryDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
