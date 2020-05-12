import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/utils/dialog/dialog/dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  competences = [
    { icon: "how_to_reg", title: "Responsable y Organizada", description: "Soy sistemática, metódica y disciplinada. En mi aproximación al trabajo, tiendo a seguir muy de cerca las políticas, pautas y reglas. Trabajo más eficaz y cómodamente en situaciones estructuradas, claras e inequívocas." },
    { icon: "search", title: "Enfoque a los detalles", description: "Soy una persona precisa, exacta y meticulosa. Constantemente busco la perfección y me intereso mucho en los detalles." },
    { icon: "group", title: "Trabajo en equipo", description: "Puedo trabajar bien por mí misma en la solución de problemas y planeamiento de actividades. Soy eficiente en equipos de trabajo, en grupos pequeños, y en relaciones de persona a persona." },
    { icon: "emoji_objects", title: "Resolución de problemas", description: "Uso mis destrezas lógicas y analíticas para responder a problemas complejos y difíciles. Soy sistemática, metódica y disciplinada. En la aproximación al trabajo, tiendo a seguir muy de cerca las políticas, pautas y reglas." },
    { icon: "autorenew", title: "Capacidad de adaptación a cambios", description: "Soy capaz de realizar tareas de carácter especializado, ya sea como miembro de un equipo o por mi propia cuenta. Mis funciones pueden incluir tareas de carácter variado, ya que si no tengo conocimiento sobre algo, lo investigo y lo aplico." },
    { icon: "forum", title: "Buena comunicación", description: "Uso mis destrezas lógicas y analíticas para responder a problemas complejos y difíciles. Soy sistemática, metódica y disciplinada. En la aproximación al trabajo, tiendo a seguir muy de cerca las políticas, pautas y reglas." },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCompetenceDialog(title: string, description: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: { title: title, description: description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

}
