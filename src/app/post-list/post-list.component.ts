import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  // Posts récupérés sur blogmotion
  posts = [
    {
      title: 'Comment j’ai domotisé mes volets roulants',
      content: 'Après les prises réseaux, je me suis attaqué aux volets roulants. Je voulais absolument pouvoir piloter mes volets roulants de façon centralisée, à distance et sans-fil.'
    },

    {
      title: 'Lévitation magnétique et impression 3D',
      content: 'La chaine polysculpt, que je vous conseille, a publié une vidéo DIY dans laquelle il intègre un aimant pour faire léviter un pot de fleur imprimé en 3D.'
    },

    {
      title: '[Script] Convertir un dump MCT en binaire (lecteur USB *.MFD)',
      content: "Reparlons de Mifare. J'utilise l'application Android Mifare Classic Tool, aka MCT mais son format de dump n'est pas compatible avec nfc-mfclassic que l'on utilise avec un lecteur USB comme le ACR122U."
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
