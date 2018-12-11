import {Component, DoCheck, OnInit} from '@angular/core';
import {Project} from '../_model/project';
import {ProjectService} from '../_service/project.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, DoCheck {
  projects: Project[];
  searchInput: FormControl;
  extendedSearchEnabled: boolean;
  searchFormGroup: FormGroup;

  constructor(
      private projectService: ProjectService
  ) { }

  ngOnInit() {
      this.extendedSearchEnabled = false;
      this.searchInput = new FormControl();
      this.searchFormGroup = new FormGroup({
          'nameInput': new FormControl(),
          'authorInput': new FormControl(),
          'categoryInput': new FormControl(),
          'startInput': new FormControl('', [
              Validators.pattern('^[12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$')
          ]),
          'endInput': new FormControl('', [
              Validators.pattern('^[12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$')
          ]),
      });

      this.projects = this.projectService.projectsArray;
      for (let project of this.projects) {
          project._positionsCount = 0;
          project._registredPositionsCount = 0;
          for (const position of project.positions) {
              project._positionsCount += position.capacity;
          }
      }

      this.onChangesSearch();
  }

  isEmpty(value: string): boolean {
      if (value === null) {
          return true;
      } else if (value === '') {
          return true;
      }

      return false;
  }

  onChangesSearch() {
      this.searchFormGroup.valueChanges.subscribe(() => {
          const searchName: string = this.searchFormGroup.get('nameInput').value;
          const searchAuthor: string = this.searchFormGroup.get('authorInput').value;
          const searchCategory: string = this.searchFormGroup.get('categoryInput').value;
          const searchStart: string = this.searchFormGroup.get('startInput').value;
          const searchEnd: string = this.searchFormGroup.get('endInput').value;

          if (!this.searchFormGroup.valid) {
              return;
          }

          let searchValueCount = 0;
          if (!this.isEmpty(searchName)) {
              searchValueCount++;
          }
          if (!this.isEmpty(searchAuthor)) {
              searchValueCount++;
          }
          if (!this.isEmpty(searchCategory)) {
              searchValueCount++;
          }
          if (!this.isEmpty(searchStart)) {
              searchValueCount++;
          }
          if (!this.isEmpty(searchEnd)) {
              searchValueCount++;
          }

          let searchedProjects = [];
          for (let proj of this.projectService.projectsArray) {
              let searchedCount = 0;
              if (!this.isEmpty(searchName) && proj.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) {
                  searchedCount++;
              }
              if (!this.isEmpty(searchAuthor) && proj.author.name.toLowerCase().indexOf(searchAuthor.toLowerCase()) >= 0) {
                  searchedCount++;
              }
              if (!this.isEmpty(searchCategory) && proj.category.name.toLowerCase().indexOf(searchCategory.toLowerCase()) >= 0) {
                  searchedCount++;
              }

              if (!this.isEmpty(searchStart) && proj.start >= moment(searchStart).toDate()) {
                  searchedCount++;
              }

              if (!this.isEmpty(searchEnd) && proj.end <= moment(searchEnd).toDate()) {
                  searchedCount++;
              }

              console.log(searchedCount);
              if (searchedCount === searchValueCount) {
                  searchedProjects.push(proj);
              }
          }

          this.projects = searchedProjects;
      });
  }

  extendedSearch() {
      this.projects = this.projectService.projectsArray;
      this.extendedSearchEnabled = !this.extendedSearchEnabled;
      if (this.extendedSearchEnabled) {
          this.searchInput.disable();
          this.searchInput.reset();
      } else {
          this.searchInput.enable();
      }
  }

  onSearchButton() {
      if (this.searchInput.value === null) {
          return;
      }

      const value: string = this.searchInput.value;

      let searchedProjects = [];
      for (let proj of this.projectService.projectsArray) {
          if (proj.name.toLocaleLowerCase().indexOf(value.toLowerCase()) >= 0) {
              searchedProjects.push(proj);
          }
      }
      this.projects = searchedProjects;
  }

    ngDoCheck(): void {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

}
