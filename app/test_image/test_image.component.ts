import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from "@angular/core";
import * as utils from "utils/utils";

declare var UIColor: any;

@Component({
  selector: "test_image",
  templateUrl: "test_image/test_image.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestImageComponent {
  constructor() { }
}
