import { TrinjerPage } from './app.po';

describe('trinjer App', () => {
  let page: TrinjerPage;

  beforeEach(() => {
    page = new TrinjerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
