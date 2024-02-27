import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { LivrolistaComponent } from "./components/livro-lista/livro-lista-component";

const rotues: Routes = [
    {
        path:"",
        component: LivrolistaComponent
    }

];

@NgModule({
    imports:[RouterModule.forChild(rotues)],
    exports: [RouterModule]
})
export class LivroRotingModule {}