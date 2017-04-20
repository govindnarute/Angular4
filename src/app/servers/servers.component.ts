import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
isServerDisabled=false
serverCreatedMessage="Server not created yet!!!!"
  constructor() { 

    setTimeout(()=>{
      this.isServerDisabled=true;
      console.log("setTimeout")
    },2000)
  }

  ngOnInit() {
  }
onServerCreated(){
  this.serverCreatedMessage="Server created successfully..."
}
}
