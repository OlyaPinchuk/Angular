import {AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterViewInit{

  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(BComponent)
  b: BComponent;

  @ViewChild('xxx')
  xxx: ElementRef;

  constructor(private dataService: DataService) {
  }
  increment(): void{
    this.dataService.setNewState();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('init')
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.a),
    console.log(this.b),
    this.a.abc = 'hello abc';
    console.log(this.xxx.nativeElement.innerText);
  }


}
