import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DiverDto } from '../../models/user';
import { Router } from '@angular/router';
import { Dive, DivePreview } from '../../models/dive';
import { DiveDetailComponent } from './dive-detail/dive-detail.component';
import { DiveService } from '../../services/dive.service';
import { ButtonModule } from 'primeng/button';
import { AddDiveComponent } from './add-dive/add-dive.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DiveDetailComponent, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [DialogService],
})
export class DashboardComponent {
  ref: DynamicDialogRef | undefined;

  show() {
    console.log('lkfjsd');
    this.ref = this.dialogService.open(AddDiveComponent, {
      header: 'Add a Dive',
    });
  }
  user: DiverDto | null = null;
  showDiveDetail = false;
  detailDive: Dive | null = null;

  dives: DivePreview[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private diveService: DiveService,
    private dialogService: DialogService
  ) {
    this.user = this.userService.getUserFromLocalStorage();
    if (this.user === null) {
      //router.navigate(['/login']);
       
    }
  }

  ngOnInit():  void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let dives =  this.diveService.getAllDives().subscribe({
      next: (dives: DivePreview[]) => {
        this.dives = dives;
      }
    });
    console.log(this.dives);
    
  }

  diveDetail(dive: number) {
    this.showDiveDetail = true;
    // this.diveService.getDiveById(dive).subscribe({
    //   next: (dive: Dive) => {
    //     this.detailDive = dive;
    //   },
    //   error: () => {
    //     console.log('Error getting dive');
    //   },
    // });

    this.detailDive = {
      id: 1,
      date: new Date('2024-03-27'),
      rating: 4,
      weather: 'Sunny',
      visibilityDistance: {
        visibilityDistanceValue: 20,
        distanceUnit: 'meters',
      },
      visibilityRating: 'Good',
      waterTemperature: {
        temperatureValue: 25,
        temperatureUnit: '°C',
      },
      airTemperature: {
        temperatureValue: 28,
        temperatureUnit: '°C',
      },
      entry: 'Boat',
      operator: 123,
      comments: 'Beautiful dive spot!',
      buddy: 456,
      diveType: 'Recreational',
      superDive: 0,
      diveVacation: 789,
      equipment: 987,
    };
  }

  closeDiveDetail() {
    this.showDiveDetail = false;
  }
  navigateToUserDetails() {
    this.router.navigate(['/user-details']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}