import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  async assertArticleLinkIsVisible(title) {
    await this.step(
      `Assert the article link with title "${title}" is visible`,
      async () => {
        const articleLink = this.page.getByRole('link', {
          name: `Article title: ${title}`,
        });
        await expect(articleLink).toBeVisible();
      },
    );
  }
}
