import imgDecoracao1 from "../assets/images/decoracao1.jpeg";
import imgDecoracao2 from "../assets/images/decoracao.jpeg";
import imgSafari from "../assets/images/safari.jpeg";

export interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Decoração Autoral Adulto Clean", 
    imageUrl: imgDecoracao1
  },
  {
    id: 2,
    title: "Aniversário Infantil Safári",
    imageUrl: imgSafari
  },
  {
    id: 3,
    title: "Cenário Criativo Celebre a Vida",
    imageUrl: imgDecoracao2
  }
];