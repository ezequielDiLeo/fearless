
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MiembroEquipo {
  nombre: string;
  foto: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {

  equipo: MiembroEquipo[] = [
    { nombre: 'Javier Rios', foto: 'javier.jpg' },
    { nombre: 'Alan Benitez', foto: 'alan.jpg' },
    { nombre: 'Lautaro Sarasa', foto: 'lauti.jpg' }
  ];

  sacarTurno(miembro: MiembroEquipo): void {
    const mensaje = `Hola! Quisiera reservar un turno con ${miembro.nombre}.`;

    const url = `https://wa.me/5491123888962?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
