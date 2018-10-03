import { UserRouterModuleModule } from './user-router-module.module';

describe('UserRouterModuleModule', () => {
  let userRouterModuleModule: UserRouterModuleModule;

  beforeEach(() => {
    userRouterModuleModule = new UserRouterModuleModule();
  });

  it('should create an instance', () => {
    expect(userRouterModuleModule).toBeTruthy();
  });
});
