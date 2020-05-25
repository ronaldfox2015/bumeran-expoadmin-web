import { ExpoFeriaAdminPage } from './app.po';

describe('expoferia-admin App', () => {
  let page: ExpoFeriaAdminPage;

  beforeEach(() => {
    page = new ExpoFeriaAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
