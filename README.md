# Flexi Button
A highly customizable button component for Angular

## Live Demo

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://bolt.new/~/stackblitz-starters-k8agwdjl)

## Features
- Supports text, icon, or both
- Integration with Google Material Symbols for icons
- Customizable size, color, and rounded corners
- Built-in loading state

## Installation
Install the package using npm
```bash
npm i flexi-button
```

## Usage
#### 1. Button with Text
Examples
```html
<flexi-button btnColor="primary" title="Print" btnSize="x-small" btnIcon="print" />
<flexi-button btnColor="primary" title="Print" btnSize="small" btnIcon="print" />
<flexi-button btnColor="primary" title="Print" btnSize="medium" btnIcon="print" />
<flexi-button btnColor="primary" title="Print" btnSize="large" btnIcon="print" />

<flexi-button btnColor="primary" btnText="Print" btnSize="x-small" btnIcon="print" />
<flexi-button btnColor="primary" btnText="Print" btnSize="small" btnIcon="print" />
<flexi-button btnColor="primary" btnText="Print" btnSize="medium" btnIcon="print" />
<flexi-button btnColor="primary" btnText="Print" btnSize="large" btnIcon="print" />

<flexi-button btnColor="primary" loadingText="loading..." [loading]="true" btnSize="x-small" btnIcon="print" />
<flexi-button btnColor="primary" loadingText="loading..." [loading]="true" btnSize="small" btnIcon="print" />
<flexi-button btnColor="primary" loadingText="loading..." [loading]="true" btnSize="medium" btnIcon="print" />
<flexi-button btnColor="primary" loadingText="loading..." [loading]="true" btnSize="large" btnIcon="print" />
```

#### 2. Button with Icon
You can use any icon from <a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:download:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%235f6368&icon.platform=web" target="_blank">Google Material Symbols.</a>
```html
<flexi-button btnIcon="print" btnColor="primary" title="Print" flexiToolTip btnSize="medium">
```

#### 3. Button with Icon and Text
Combine text and an icon in the same button
```html
<flexi-button btnIcon="print" btnColor="primary" btnText="Print" btnSize="medium">
```

#### 4. Rounded Button
Make the button corners rounded
```html
<flexi-button btnIcon="print" btnColor="primary" btnText="Print" btnSize="medium" [btnRounded]="true">
```

#### 4. Button with Loading State
Display a loading spinner instead of the button's content
```html
<flexi-button btnColor="primary" btnSize="medium" [loading]="true">
```

## Inputs Reference
| Input Name      | Type    | Description                                                                                 |
|-----------------|---------|---------------------------------------------------------------------------------------------|
| `btnColor`      | string  | Button color. Available values: `light`, `primary`, `success`, `danger`, `warning`, `info`, `dark`, `indigo`, `purple`, `pink`, `teal`, `yellow`, `secondary`, `black`, `white`. |
| `btnSize`       | string  | Button size (e.g., `small`, `medium`, `large`).                                             |
| `btnText`       | string  | Text displayed on the button (use `title` for tooltip functionality instead).               |
| `btnIcon`       | string  | Icon name from Google Material Symbols.                                                    |
| `title`         | string  | Text displayed on the button as a tooltip instead of `btnText`.                             |
| `btnRounded`    | boolean | Whether the button should have rounded corners.                                             |
| `flexiToolTip`  | string  | Tooltip text displayed when hovering over the button.                                       |
| `loading`       | boolean | Displays a loading spinner if set to `true`.                                                |