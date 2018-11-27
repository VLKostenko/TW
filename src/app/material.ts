import { MatButtonModule, MatSlideToggleModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule ({
	imports: [ MatButtonModule, MatSlideToggleModule ],
	exports: [ MatButtonModule, MatSlideToggleModule ],
})

export class MaterialModule { }