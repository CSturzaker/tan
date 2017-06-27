import { TanPage } from './app.po';

describe('tan App', () => {
  let page: TanPage;

  beforeEach(() => {
    page = new TanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
