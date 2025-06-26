import { Component } from "@angular/core";

// In past angular only knows module based components now it supports standalone components

@Component(
    {
  selector: "app-header",
  standalone: false,
  templateUrl: "./header.html",
  // styles:[`h1 { color: red; }`], // This is how we can add styles inline
  // styleUrl: "./header.css", // This is how we can add styles in a separate file
  styleUrls:['./header.css'] // This is how we can add styles in a separate file
})

export class Header{}