import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    { title: "Angular", description: "En los últimos años he desarrollado aplicaciones robustas, escalables y optimizadas para distintos proyectos utilizando Typescript, Angular Material, Chart.js, entre otros.", img: "../../../assets/images/hands/hand1_ring.png" },
    { title: "Javascript", description: "Soy capaz de construir aplicaciones de principio a fin empleando frameworks, librerías y herramientas trabajando en front-end y back-end.", img: "../../../assets/images/hands/hand2_ring.png" },
    { title: "Node.js", description: "He trabajado con Node.js creando APIs REST. Algunas librerías que he utilizado incluyen npm, Express, Socket.io y MongoDB.", img: "../../../assets/images/hands/hand3_ring.png" },
    { title: "HTML/CSS", description: "Recientemente he trabajado en desarrollo web responsivo creando módulos CSS predominantemente en SASS. Mi objetivo es el rendimiento, simplicidad e integridad.", img: "../../../assets/images/hands/hand4_ring.png" },
    { title: "AWS", description: "Tengo conocimientos básicos acerca del manejo de herramientas y servicios de la nube de Amazon tales como Cognito, CloudWatch, DynamoDB, S3 y Lambda.", img: "../../../assets/images/hands/hand5_ring.png" }
  ];

  index = 1;

  screenSize: string = "";

  @ViewChild("hand", { static: false }) hand;
  @ViewChild("skill", { static: false }) skill;

  constructor() {  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.skills.forEach((skill, index) => {
      if (index != 0) {
        let hand = this.hand.nativeElement.querySelector(`.hand-${index + 1}`);
        let skill = this.skill.nativeElement.querySelector(`.skill-${index + 1}`);

        hand.style["opacity"] = 0;
        skill.style["transform"] = "translateX(-500px)";
        skill.style["display"] = "none";
      }
    });
  }

  previousSkill(index: number) {
    let actualHand = this.hand.nativeElement.querySelector(`.hand-${this.index}`);
    let actualSkill = this.skill.nativeElement.querySelector(`.skill-${this.index}`);

    let prevHand = this.index == 1 ?
      this.hand.nativeElement.querySelector(`.hand-${this.skills.length}`) :
      this.hand.nativeElement.querySelector(`.hand-${this.index - 1}`);
    let prevSkill = this.index == 1 ?
      this.skill.nativeElement.querySelector(`.skill-${this.skills.length}`) :
      this.skill.nativeElement.querySelector(`.skill-${this.index - 1}`);

    actualSkill.style["transform"] = this.screenSize == 'is-mobile' ? "translateX(500px)" : "translateX(-600px)";

    this._animateSkill(actualSkill, actualHand, prevSkill, prevHand);

    this.index = this.index == 1 ? this.skills.length : this.index - 1;
  }

  nextSkill() {
    let actualHand = this.hand.nativeElement.querySelector(`.hand-${this.index}`);
    let actualSkill = this.skill.nativeElement.querySelector(`.skill-${this.index}`);

    let nextHand = this.index == this.skills.length ?
      this.hand.nativeElement.querySelector(`.hand-1`) :
      this.hand.nativeElement.querySelector(`.hand-${this.index + 1}`);
    let nextSkill = this.index == this.skills.length ?
      this.skill.nativeElement.querySelector(`.skill-1`) :
      this.skill.nativeElement.querySelector(`.skill-${this.index + 1}`);

    actualSkill.style["transform"] = "translateX(-600px)";

    this._animateSkill(actualSkill, actualHand, nextSkill, nextHand);

    this.index = this.index == this.skills.length ? 1 : this.index + 1;
  }

  private _animateSkill(skillOne: HTMLElement, handOne: HTMLElement, skillTwo: HTMLElement, handTwo: HTMLElement) {
    setTimeout(function () {
      skillOne.style["display"] = "none";
      skillTwo.style["display"] = "block";
    }, 500);

    setTimeout(() => {
      // skillTwo.style["transition-duration"] = "0.6s"
      skillTwo.style["transform"] = "translateX(0px)";
    }, 200);


    setTimeout(() => {
      handOne.style["transition-duration"] = "0.6s";
      handOne.style["opacity"] = "0";
      handTwo.style["transition-duration"] = "0s";
      handTwo.style["opacity"] = "1";
    }, 300);
  }

}
