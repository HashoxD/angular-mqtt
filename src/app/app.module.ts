import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.hivemq.com',
  port: 8000,
  protocol: "ws",
  path: '/mqtt'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
