import { NgModule } from '@angular/core';
import { HeroSection } from './hero-section/hero-section.component';
import { AboutSection } from './about-section/about-section.component';
import { ServicesSection } from './services-section/services-section.component';
import { SolutionsSection } from './solutions-section/solutions-section.component';
import { PartnersSection } from './partners-section/partners-section.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ComponentsModule, CommonModule],
  declarations: [
    HeroSection,
    AboutSection,
    ServicesSection,
    SolutionsSection,
    PartnersSection,
  ],
  exports: [
    HeroSection,
    AboutSection,
    ServicesSection,
    SolutionsSection,
    PartnersSection,
  ],
})
export class SectionsModule {}
