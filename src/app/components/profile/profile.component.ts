import { Component, Input, OnInit } from "@angular/core";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

interface Orgs {
  login?: string;
  id?: number;
  node_id?: string;
  url?: string;
  repos_url?: string;
  events_url?: string;
  hooks_url?: string;
  issues_url?: string;
  members_url?: string;
  public_members_url?: string;
  avatar_url?: string;
  description?: string;
}
interface profile {
  username: string;
  type?: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  bio?: string;
  twitter?: string;
  orgs?: Array<Orgs>;
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  fapeople = faUsers;
  @Input() profile;
  constructor() {
  }

  ngOnInit() {}

  kFormatter(num: number): string {
    if (Math.abs(num) < 999) return String(num);
    const value = Math.sign(num) * Number(Math.abs(num) / 1000);

    return `${value.toFixed(1)}k`;
  }

}
