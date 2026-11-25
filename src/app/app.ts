import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TitleService } from "./title.service";
import { TitleComponent } from "./title.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, TitleComponent],
	templateUrl: "./app.html",
	styleUrl: "./app.scss"
})
export class App {
	private readonly titleService = inject(TitleService);
	protected readonly title = this.titleService.title;
	// To set the title, use: this.chapterTitleService.setTitle('new-title');

	constructor() {
		this.titleService.setTitle("Expense Builder");
	}
}
