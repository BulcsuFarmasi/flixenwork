import { Route } from "@angular/router";
import { routes } from "./routing.module";

describe('routes', () => {
    it('should contain a redirect route', () => {
        const route:Route = { path: '', redirectTo: '/log-in', pathMatch:'full' }

        expect(routes).toContain(route);
    })
})