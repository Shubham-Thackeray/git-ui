import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  user = "shreeramk";
  // TODO create interfaces for data(profile data) and repo
  data :any;  
  repos = [];
  panelActive = 1;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getProfileData();
    this.getRepos();
  }
  getProfileData() {
    this.api.getProfile(this.user).subscribe(
      (res) => {
      
        this.data = res;
        
      },
      (err) => {
        console.log(err);
        // this.toast.showError(err.error.message);
      }
    );
  }

  getRepos() {
    this.api.getRepos(this.user).subscribe(
      (repo) => {
     
        this.repos = repo;
   
      },
      (err) => {
        console.log(err);
        // this.toast.showError(err.error.message);
      }
    );
  }

  kFormatter(num: number): string {
    if (Math.abs(num) < 999) return String(num);
    const value = Math.sign(num) * Number(Math.abs(num) / 1000);

    return value.toFixed(1)+' k';
  }
}
