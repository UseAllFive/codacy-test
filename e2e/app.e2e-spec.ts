import { CodacyTestPage } from './app.po';

describe('codacy-test App', () => {
  let page: CodacyTestPage;

  beforeEach(() => {
    page = new CodacyTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
