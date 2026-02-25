import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ProductService } from './services/product.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService
  ]
};