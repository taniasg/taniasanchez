import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  screenSize: string = "";

  skills = [
    { label: "Angular", description: "En los últimos años he desarrollado aplicaciones robustas, escalables y optimizadas para distintos proyectos utilizando Typescript, Angular Material, Chart.js, entre otros.", img: "../../../assets/images/hands/hand1.png" },
    { label: "Javascript", description: "Desarrollo código para la optimización de procesos desde automatización de reportes hasta creación y consumo de servicios.", img: "../../../assets/images/hands/hand2.png" },
    { label: "Node.js", description: "He trabajado con Node.js creando APIs REST. Algunas librerías que he utilizado incluyen npm, Express, Socket.io y MongoDB.", img: "../../../assets/images/hands/hand3.png" },
    { label: "HTML/CSS", description: "Recientemente he trabajado en desarrollo web responsivo creando módulos CSS predominantemente en SASS. Mi objetivo es el rendimiento, simplicidad e integridad.", img: "../../../assets/images/hands/hand4.png" },
    { label: "AWS", description: "Tengo conocimientos básicos acerca del manejo de herramientas y servicios de la nube de Amazon tales como Cognito, CloudWatch, DynamoDB, S3 y Lambda.", img: "../../../assets/images/hands/hand5.png" }
  ]

  skillSelected: any = this.skills[0];

  constructor(private layoutService: LayoutService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
  }

  ngOnInit() {
  }

  changeSkill(index: number) {
    console.log(index)
    if (index == this.skills.length - 1) this.skillSelected = this.skills[0];
    else if (index == 0) this.skillSelected = this.skills[this.skills.length];
    else this.skillSelected = this.skills[index];
    console.log(this.skillSelected)
  }

  previousSkill(index: number) {
    if(index == 0) this.skillSelected = this.skills[this.skills.length - 1]
    else {
      console.log('IM HERE');
      this.skillSelected = this.skills[index - 1]}
  }

  nextSkill(index: number) {
    if(index == this.skills.length - 1) this.skillSelected = this.skills[0]
    else this.skillSelected = this.skills[index + 1]
  }

}
