import { Route } from "@angular/router";

import { HomeComponent } from "../../components/home/home.component";
import { routes } from "./routing.module";

describe('routes', () => {
    it('should contain a redirect route', () => {
        const route:Route = { path: '', component: HomeComponent }

        expect(routes).toContain(route);
    })
})