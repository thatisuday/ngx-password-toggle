import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

const eye = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC44NSA0ODguODUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC44NSA0ODguODU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjQ0LjQyNSw5OC43MjVjLTkzLjQsMC0xNzguMSw1MS4xLTI0MC42LDEzNC4xYy01LjEsNi44LTUuMSwxNi4zLDAsMjMuMWM2Mi41LDgzLjEsMTQ3LjIsMTM0LjIsMjQwLjYsMTM0LjIgICBzMTc4LjEtNTEuMSwyNDAuNi0xMzQuMWM1LjEtNi44LDUuMS0xNi4zLDAtMjMuMUM0MjIuNTI1LDE0OS44MjUsMzM3LjgyNSw5OC43MjUsMjQ0LjQyNSw5OC43MjV6IE0yNTEuMTI1LDM0Ny4wMjUgICBjLTYyLDMuOS0xMTMuMi00Ny4yLTEwOS4zLTEwOS4zYzMuMi01MS4yLDQ0LjctOTIuNyw5NS45LTk1LjljNjItMy45LDExMy4yLDQ3LjIsMTA5LjMsMTA5LjMgICBDMzQzLjcyNSwzMDIuMjI1LDMwMi4yMjUsMzQzLjcyNSwyNTEuMTI1LDM0Ny4wMjV6IE0yNDguMDI1LDI5OS42MjVjLTMzLjQsMi4xLTYxLTI1LjQtNTguOC01OC44YzEuNy0yNy42LDI0LjEtNDkuOSw1MS43LTUxLjcgICBjMzMuNC0yLjEsNjEsMjUuNCw1OC44LDU4LjhDMjk3LjkyNSwyNzUuNjI1LDI3NS41MjUsMjk3LjkyNSwyNDguMDI1LDI5OS42MjV6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
const eyeCrossed = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM3OS41NjEgMzc5LjU2MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzc5LjU2MSAzNzkuNTYxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxwYXRoIGQ9Ik0zMjAuODM4LDEyMS45MjljLTcuMzIxLTUuNjc3LTE1LjYwNC0xMS42MS0yNC42NjQtMTcuMzYyTDM0MS40OTgsNTguNmM2LjIwNC02LjI5Miw2LjEzMy0xNi40MjMtMC4xNi0yMi42MjcgIGMtNi4yOTItNi4yMDQtMTYuNDIyLTYuMTM0LTIyLjYyNiwwLjE1OUwyNjcuMTIsODguNDU2Yy0yMy4yNTMtMTEuMDE4LTQ5LjU4Ny0xOC45NjMtNzcuMTkyLTE4Ljk2M2wtMC45OTEsMC4wMDMgIGMtNTIuMjYyLDAuMzY5LTk5Ljk4MSwyOS45MzItMTMwLjgxLDU0LjY2N0MyNy42MzIsMTQ4LjYzMS0wLjA3MywxODAuMzIsMCwxOTAuNjQ5YzAuMDgyLDExLjcwMiwyNi45ODEsNDIuMjM0LDU4LjczNyw2Ni42NzEgIGM2LjY0Niw1LjExNCwxNS4wNzMsMTEuMTQ1LDI0Ljg3NSwxNy4yNDlMMzcuODcsMzIwLjk2MmMtNi4yMDQsNi4yOTItNi4xMzMsMTYuNDIzLDAuMTYsMjIuNjI3ICBjMy4xMTcsMy4wNzQsNy4xNzUsNC42MDcsMTEuMjMzLDQuNjA3YzQuMTMyLDAsOC4yNjMtMS41OTEsMTEuMzk0LTQuNzY2bDUyLjIxLTUyLjk1MWMyMi42NjYsMTAuNTM1LDQ5LjEwMSwxOC42NTEsNzYuNzUyLDE4LjY1MSAgbDEuMDA3LTAuMDAzYzU1LjUyNS0wLjM5MiwxMDUuNzc2LTMzLjU2NiwxMzAuNzg4LTUzLjMwN2MzMS42MDMtMjQuOTQyLDU4LjIzMS01Ni4wMTEsNTguMTQ4LTY3Ljg0NSAgQzM3OS40ODQsMTc2Ljk4OCwzNTIuMDQzLDE0Ni4xMjYsMzIwLjgzOCwxMjEuOTI5eiBNMTExLjMxNCwxODkuODY0Yy0wLjMwNS00My4zMzYsMzQuNTc4LTc4LjcxNCw3Ny45MTMtNzkuMDE5ICBjMTUuOTc1LTAuMTEzLDMwLjg2LDQuNTY5LDQzLjMxNCwxMi42ODFsLTEwNy45MzgsMTA5LjQ3QzExNi4zMTgsMjIwLjY1NywxMTEuNDI3LDIwNS44MzksMTExLjMxNCwxODkuODY0eiBNMTkwLjMzNCwyNjcuNzc3ICBjLTE1Ljc4NCwwLjExMS0zMC41LTQuNDYyLTQyLjg2My0xMi4zOTZsMTA3Ljc3Ny0xMDkuMzA4YzguMTA3LDEyLjI1LDEyLjg4NywyNi45LDEyLjk5OSw0Mi42ODQgIEMyNjguNTUyLDIzMi4wOTQsMjMzLjY2OSwyNjcuNDcyLDE5MC4zMzQsMjY3Ljc3N3oiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';

@Directive({
  selector: '[passwordToggle]'
})
export class NgxPasswordToggleDirective implements OnInit {
  visible: boolean = false;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    let inputElem = this.elem.nativeElement;
    let parentElem = inputElem.parentElement;
    this.renderer.setStyle(parentElem, 'position', 'relative');

    let inputElemHeight = inputElem.offsetHeight;
    let inputElemTop = inputElem.offsetTop;
    this.renderer.setStyle(inputElem, 'padding-right', (inputElemHeight + 5) + 'px');

    // create toggle button
    let toggleElem = this.renderer.createElement('div');
    this.renderer.setStyle(toggleElem, 'position', 'absolute');
    this.renderer.setStyle(toggleElem, 'top', inputElemTop + 'px');
    this.renderer.setStyle(toggleElem, 'right', '0px');
    this.renderer.setStyle(toggleElem, 'width', inputElemHeight + 'px');
    this.renderer.setStyle(toggleElem, 'height', inputElemHeight + 'px');
    this.renderer.setStyle(toggleElem, 'cursor', 'pointer');
    this.renderer.setStyle(toggleElem, 'opacity', '0.6');
    this.renderer.setStyle(toggleElem, 'background-color', 'transparent');
    this.renderer.setStyle(toggleElem, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(toggleElem, 'background-position', 'center center');
    this.renderer.setStyle(toggleElem, 'background-image', `url(${eyeCrossed})`);

    // append toggle element to input element holder
    this.renderer.appendChild(parentElem, toggleElem);

    // listen to click event on toggle button
    this.renderer.listen(toggleElem, 'click', (event) => {
      this.visible = !this.visible;
      this.renderer.setStyle(toggleElem, 'background-image', `url(${this.visible ? eye : eyeCrossed})`);

      this.renderer.setAttribute(inputElem, 'type', this.visible ? 'text' : 'password');
    });
  }

}
