import { Route } from "@angular/router";


import { userRoutes } from "./user-router-module.module";
import { LogInComponent } from "../../components/log-in/log-in.component";

describe('UserRoutes', () => {
    it('should contain route for log-in', () => {
        let route:Route = { path: 'log-in', component: LogInComponent}
        expect(userRoutes).toContain(route);
    })
})