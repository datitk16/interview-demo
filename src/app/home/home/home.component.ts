import { Component, OnInit } from '@angular/core';
import { BlockModel } from '../models/block-name.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  block: BlockModel[] = [
    {
      image: 'gau.png',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'woman.jpeg',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'gau.png',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'woman.jpeg',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'gau.png',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'woman.jpeg',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'gau.png',
      content: 'Product name is quite long in some case'
    },
    {
      image: 'woman.jpeg',
      content: 'Product name is quite long in some case'
    },


  ]

}
