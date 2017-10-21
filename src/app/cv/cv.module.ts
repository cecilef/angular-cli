import { NgModule } from '@angular/core';
import { CvIntroductionComponent } from './cv-introduction/cv-introduction.component';
import { CvComponent } from './cv.component';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';
import { CvEducationComponent } from './cv-education/cv-education.component';
import { CvSkillsComponent } from './cv-skills/cv-skills.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CvComponent,
    CvIntroductionComponent,
    CvExperienceComponent,
    CvEducationComponent,
    CvSkillsComponent
  ],
  exports: [
    CvComponent,
    CvIntroductionComponent
  ]
})

export class CvModule {}
