import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id?: number;
  editMode = false;
  subscriber?: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.id = +id;
      this.editMode = id !== undefined; // checking if edit mode or not, if id is available it's edit mode
    });
  }

  ngOnDestroy(): void {
    this.subscriber!.unsubscribe();
  }
}
