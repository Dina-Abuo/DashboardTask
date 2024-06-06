import { Component } from '@angular/core';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css'],
})
export class RightSideComponent {
  selectedRam: number = 90;
  value: number = 90;
  min: number = 90;
  max: number = 90;

  setRam(value: number) {
    this.selectedRam = value;
    console.log(this.selectedRam);
  }
  // document.getElementById("myinput").oninput = function() {
  //   var value = (this.value-this.min)/(this.max-this.min)*100
  //   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
  // };
}
