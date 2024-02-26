import { AutorInterface } from 'src/app/autores/types/autor.interface';

export interface LivroInterface {
  id?: string;
  titulo: string;
  subtitulo?: string;
  numeroPaginas: number;
  isbn: string;
  autores: AutorInterface[];
  editora: string;
  ano: number;
  // Parte Nova Feita na 01 Aula Dia (26/02/2024)
  logoURL: string;
  preco: number;
}
