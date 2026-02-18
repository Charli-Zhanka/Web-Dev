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
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848116254.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h73/83559851655214.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h0c/83559855161374.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 M1 2020 8GB SSD 256GB MacOS',
      description: 'Легкий и мощный ноутбук с процессором Apple M1, безвентиляторной системой охлаждения и длительным временем автономной работы до 18 часов.',
      price: 349990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h84/64111248097310.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h0e/64111253798942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h27/64111256649758.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-2020-8gb-ssd-256gb-macos-100797845/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2nd generation белый',
      description: 'Беспроводные наушники с активным шумоподавлением, пространственным аудио и улучшенным временем работы. Зарядный футляр с динамиком.',
      price: 110697,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h27/84610578087966.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h0d/84610580643870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h74/hb7/84610583658526.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 4,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 6GB/128GB серый',
      description: 'Стильный планшет с 10.9-дюймовым дисплеем, защитой от воды IP68 и мощным процессором. Подходит для учебы и развлечений.',
      price: 179990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h33/h0e/84909323976734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h11/84909330317342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h43/84909333364766.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000'
    },
    {
      id: 5,
      name: 'Кофемашина Philips EP3243/70',
      description: 'Автоматическая кофемашина с керамическими жерновами, функцией LatteGo для молочной пенки и 12 уровнями помола.',
      price: 415000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h1f/67735885152286.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/h85/64220138045470.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h23/64220139520030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h7c/64220140896286.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/kofemashina-philips-3200-series-ep3246-70-chernyi-108379415/?c=750000000'
    },
    {
      id: 6,
      name: 'Пылесос WEX EasyClean S10 черный, зеленый',
      description: 'Умный робот-пылесос с лазерной навигацией, мощностью всасывания 4000 Па и влажной уборкой. Управление через приложение.',
      price: 34990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p41/p9f/93175241.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h47/64415520456734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h42/64415522553886.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hbc/h90/64415524651038.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/wex-easyclean-s10-chernyi-zelenyi-151472849/?c=750000000'
    },
    {
      id: 7,
      name: 'Телевизор Xiaomi TV S Mini 55 2025 L55MA-SPLRU 140 см черный',
      description: 'OLED-телевизор с процессором α9 Gen6, поддержкой Dolby Vision и Gaming режимом. Идеален для просмотра фильмов и игр.',
      price: 289990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/34107209.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h7e/82870079291422.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h6b/82870082273566.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/had/82870085322782.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-tv-s-mini-55-2025-l55ma-splru-140-sm-chernyi-135083706/?c=750000000'
    },
    {
      id: 8,
      name: 'Кроссовки Nike Air FORCE 07 черный',
      description: 'Классические кроссовки Nike Air FORCE 07 с амортизацией Air Max и стильным дизайном. Подходят для повседневной носки.',
      price: 83992,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/p3d/66581888.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h70/h0d/64139432935454.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/hf9/64139435327518.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h13/64139437719646.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/krossovki-nike-air-force-1-07-dv0788-chernyi-41-146214274/?c=750000000'
    },
    {
      id: 9,
      name: 'Парфюмерная вода Giorgio Armani Acqua Di Gio 100 мл',
      description: 'Мужская парфюмерная вода с свежими морскими нотами и оттенками бергамота, нероли и розмарина. Классический аромат.',
      price: 42286,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd1/p36/108233050.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hb4/63804732719134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/hc3/63804735242270.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h82/63804737011742.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/giorgio-armani-acqua-di-gio-profondo-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-104108929/?c=750000000'
    },
    {
      id: 10,
      name: 'Смарт-часы Samsung Galaxy Watch6 Classic 47mm черный',
      description: 'Умные часы с вращающимся безелем, мониторингом здоровья и расширенными спортивными функциями. Работают до 40 часов.',
      price: 440000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h1f/82621670522910.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/hd4/84949647245342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/hdb/84949654421534.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h1f/84949658877982.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-classic-47-mm-chernyi-112404540/?c=750000000'
    }
  ];
}