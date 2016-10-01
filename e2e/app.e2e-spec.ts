import { MaxCookPage } from './app.po';

describe('max-cook App', function() {
  let page: MaxCookPage;

  beforeEach(() => {
    page = new MaxCookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
