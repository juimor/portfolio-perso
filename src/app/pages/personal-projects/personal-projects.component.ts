import { Component } from '@angular/core';
import { projectsMenuItems } from 'src/app/constants/Constants';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent {
  projectsMenuItems = projectsMenuItems;
  backgroundTitle: string | null = null;
  gridColoumns = 2;
  Style: string | null = null;
  isFooterHide: boolean = true;

  changeBackgroundTitle(title: string) {
    this.backgroundTitle = title;
    this.setBackgroundStyle();
  }

  setBackgroundStyle() {
    if (this.backgroundTitle != null) {
      this.Style =
        'background: url(../../../assets/' +
        this.backgroundTitle +
        ' ); background-repeat: no-repeat; background-position: center; background-size: 100%;';
    } else this.Style = '';
  }

  setFooterVisibility() {
    this.isFooterHide = !this.isFooterHide;
  }

  hideFooter(isFooterHide: boolean) {
    this.isFooterHide = isFooterHide;
  }
}
