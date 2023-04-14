import { NgModule } from '@angular/core';
import { HeroSection } from './hero-section/hero-section.component';
import { AboutSection } from './about-section/about-section.component';

@NgModule({
  declarations: [HeroSection, AboutSection],
  exports: [HeroSection, AboutSection],
})
export class SectionsModule {}
