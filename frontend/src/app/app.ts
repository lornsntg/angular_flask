import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlaskService } from './services/flask-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  profilo: any = {}; //dove salveremo il JSON ricevuto

  constructor(private flaskService: FlaskService) {}
  
  ngOnInit(): void {
  //quando il componente si avvia chiama il service
    this.flaskService.getProfilo().subscribe((dati) => {
    this.profilo = dati; //assegna il JSON ricevuto
    console.log("Dati arrivati:", this.profilo);
  });
}
}
