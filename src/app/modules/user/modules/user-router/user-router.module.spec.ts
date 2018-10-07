import { UserRouterModule } from './user-router.module';

describe('UserRouterModule', () => {
  let userRouterModuleModule: UserRouterModule;

  beforeEach(() => {
    userRouterModuleModule = new UserRouterModule();
  });

  it('should create an instance', () => {
    expect(userRouterModuleModule).toBeTruthy();
  });
});
