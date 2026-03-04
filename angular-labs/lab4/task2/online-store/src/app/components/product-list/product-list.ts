import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 Pro Max 256GB серый',
      description: 'Флагманский смартфон Apple с титановым корпусом, мощным процессором A17 Pro и профессиональной камерой. Поддержка Dynamic Island и USB-C.',
      price: 649990,
      rating: 4.8,
      image: 'https://avatars.mds.yandex.net/get-mpic/16396243/2a000001992e5e9a7f22eb0af166855f23d1/orig',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 M1 2020 8GB SSD 256GB MacOS',
      description: 'Легкий и мощный ноутбук с процессором Apple M1, безвентиляторной системой охлаждения и длительным временем автономной работы до 18 часов.',
      price: 349990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-2020-8gb-ssd-256gb-macos-100797845/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2nd generation белый',
      description: 'Беспроводные наушники с активным шумоподавлением, пространственным аудио и улучшенным временем работы. Зарядный футляр с динамиком.',
      price: 110697,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 4,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 6GB/128GB серый',
      description: 'Стильный планшет с 10.9-дюймовым дисплеем, защитой от воды IP68 и мощным процессором. Подходит для учебы и развлечений.',
      price: 179990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и стиля, предлагающее безупречную производительность и непревзойденные возможности для тех, кто всегда в движении.',
      price: 878541,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000'
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий.',
      price: 354925,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 7,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции, предотвращающей смешивание потоков холодного и теплого воздуха.',
      price: 173086,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000'
    },
    {
      id: 8,
      name: 'Наушники GERLAX GH-34 черный',
      description: 'GERLAX GH-34 это идеальный выбор для тех, кто ценитвысокое качество звука',
      price: 2769,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000'
    },
    {
      id: 9,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! ',
      price: 204211,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000'
    },
    {
      id: 10,
      name: 'Планшет AIRSTAR G3000 pluse 10.1 дюйм 16 Гб/512 Гб черный',
      description: 'Этот планшет идеально подходит для студентов, профессионалов и всех, кто ценит мобильность и функциональность в повседневной жизни. Работают до 40 часов.',
      price: 38990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/peb/3848531.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/airstar-g3000-pluse-10-1-djuim-16-gb-512-gb-chernyi-128606600/?c=750000000'
    },
    {
      id: 11,
      name: 'Catrice Soft Glam Baked Blush румяна 010 On Cloud Pink',
      description: 'Румяна Catrice Soft Glam Baked Blush 010 On Cloud Pink придают лицу свежий и здоровый вид, обеспечивая мягкое сияние и естественный румянец.',
      price: 3200,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p08/71928435.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/catrice-soft-glam-baked-blush-rumjana-010-on-cloud-pink-147819804/?c=750000000'
    }
  ];
}