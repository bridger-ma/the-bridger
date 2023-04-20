import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

@NgModule({
  declarations: [LogoComponent, ClientProfileComponent],
  exports: [LogoComponent, ClientProfileComponent],
})
export class ComponentsModule {}
