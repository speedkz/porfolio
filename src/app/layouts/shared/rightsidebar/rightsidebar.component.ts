import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.hide();
  }

  /**
   * Change the left-sidebar theme
   * @param theme Change the theme
   */
  changeLeftSidebarTheme(theme: string) {
    this.hide();
  }

  /**
   * Change the layout
   * @param type Change the layout type
   */
  changeLeftSidebarType(type: string) {
    this.hide();
  }

  /**
   * Change the layout width
   * @param width string 
   */
  changeLayoutWidth(width: string) {
    this.hide();
  }


  /**
   * Hide the sidebar
   */
  public hide() {
    document.body.classList.remove('right-bar-enabled');
  }
}
