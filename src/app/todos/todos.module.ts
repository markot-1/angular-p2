import { NgModule } from "@angular/core";
import { TodosComponent } from "./components/todos/todos.component";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    {path: '', component: TodosComponent}
];

@NgModule({
    declarations: [TodosComponent],
    imports: [RouterModule.forChild(routes)],
})

export class TodosModule {}