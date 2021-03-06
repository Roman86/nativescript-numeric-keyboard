import * as elementRegistryModule from "nativescript-angular/element-registry";
import { Directive } from '@angular/core';

// import { NumericKeyboardView } from "nativescript-numeric-keyboard";
import { NumericKeyboardView } from "../";

@Directive({
  selector: "NumericKeyboard"
})

export class NumericKeyboardDirective {
  constructor() { }
}

export const NSNUMKEY_DIRECTIVES = [ NumericKeyboardDirective ];

elementRegistryModule.registerElement("NumericKeyboard", () => NumericKeyboardView);