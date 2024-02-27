import { Component, NgModule } from "@angular/core"
import { LivroRotingModule } from "./livros-routing.module"
import { IonicModule } from "@ionic/angular"
import { LivrolistaComponent } from "./components/livro-lista/livro-lista-component"

@NgModule ({
    imports:[LivroRotingModule,IonicModule],
    declarations: [LivrolistaComponent],
})
export class LivroModule { }