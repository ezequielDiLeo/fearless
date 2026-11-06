
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Review {
  nombre: string;
  texto: string;
  estrellas: number;
  fotos?: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews {

  readonly googleReviewsUrl =
    'https://www.google.com/maps/place/Peluqueria+FEARLESS+y+Barber%C3%ADa/@-34.6926423,-58.4050153,17z/data=!4m8!3m7!1s0x95bccd3a4136958b:0xd5849c5bb628fced!8m2!3d-34.6926423!4d-58.4050153!9m1!1b1!16s%2Fg%2F11rqz6lh3x?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D';

  readonly reviews: Review[] = [
    {
      nombre: 'Jorge Raul Delgado',
      estrellas: 5,
      fotos: '3 fotos',
      texto:
        'Profesionales, buena atención y gran servicio!! Un local distinto, siempre buena predisposición, y la mejor atención para los clientes!!'
    },
    {
      nombre: 'Franco Muñoz',
      estrellas: 5,
      texto:
        'Excelente servicio, excelente profesionales! Los mejores'
    },
    {
      nombre: 'Santino Vera',
      estrellas: 4,
      fotos: '1 foto',
      texto:
        'No solo los cortes son excelentes, sino también el trato. Cada vez que vuelvo de Fearless salgo más contento que la vez anterior. Los barberos cada día se profesionalizan más y más! Espero ansioso mi próximo turno!!'
    }
  ];

  readonly mapEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.497005166142!2d-58.407590224454076!3d-34.692642272922576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd3a4136958b%3A0xd5849c5bb628fced!2sPeluqueria%20FEARLESS%20y%20Barber%C3%ADa!5e0!3m2!1ses-419!2sar!4v1757520042971!5m2!1ses-419!2sar'
    );
  }
}
