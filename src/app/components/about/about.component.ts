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
    { icon: "group", title: "Trabajo en equipo", description: "Soy eficiente en equipos de trabajo, en grupos pequeños, y en relaciones de persona a persona." },
    { icon: "emoji_objects", title: "Resolución de problemas", description: "Uso mis destrezas lógicas y analíticas para responder a problemas complejos y difíciles. Tengo un alto sentido de la responsabilidad con el trabajo asignado. Sé priorizar los asuntos, cumplir con los objetivos y entregar el trabajo en tiempo y forma." },
    { icon: "autorenew", title: "Capacidad de adaptación a cambios", description: "Soy capaz de realizar tareas de carácter especializado, ya sea como miembro de un equipo o por mi propia cuenta. Mis funciones pueden incluir tareas de carácter variado. Considero que tengo buena capacidad de aprendizaje." },
    // { icon: "forum", title: "Buena comunicación", description: "Uso mis destrezas lógicas y analíticas para responder a problemas complejos y difíciles. Soy sistemática, metódica y disciplinada. En la aproximación al trabajo, tiendo a seguir muy de cerca las políticas, pautas y reglas." },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCompetenceDialog(competence: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: { title: competence.title, description: competence.description, icon: competence.icon }
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

}
