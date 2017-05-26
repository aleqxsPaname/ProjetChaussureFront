import { RestRxjsPage } from './app.po';

describe('rest-rxjs App', () => {
  let page: RestRxjsPage;

  beforeEach(() => {
    page = new RestRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
