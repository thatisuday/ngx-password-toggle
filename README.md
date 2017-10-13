# ngx-password-toggle
Angular 4+ directive to show/hide password

[![npm](https://img.shields.io/npm/v/ngx-password-toggle.svg?style=flat-square)](https://www.npmjs.com/package/ngx-password-toggle)
[![npm](https://img.shields.io/npm/dt/ngx-password-toggle.svg?style=flat-square)](https://www.npmjs.com/package/ngx-password-toggle)
![npm](https://img.shields.io/github/issues/thatisuday/ngx-password-toggle.svg?style=flat-square)
![npm](https://img.shields.io/david/thatisuday/ngx-password-toggle.svg?style=flat-square)


## Install
```
npm i ngx-password-toggle
```

## Import
```
import { NgxPasswordToggleModule } from 'ngx-password-toggle';

@NgModule({
  imports: [
    ...,
    NgxPasswordToggleModule
  ]
})
export class MyModule(){ }
```

## Use directive
use `passwordToggle` directive

![](https://i.imgur.com/RS3X7mB.png)

```
<!-- Password -->
<div class="field">
  <label for="">Password</label>
  <input type="password" name="password" ngModel passwordToggle required>
</div>
```

