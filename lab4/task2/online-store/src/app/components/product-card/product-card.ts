import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareOnTelegram(): void {
    const text = encodeURIComponent(this.product.name);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isStarFilled(star: number): boolean {
    return star <= Math.round(this.product.rating);
  }
}