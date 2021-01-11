import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

describe('When all data correctly init', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('should render correct numbers of property cards in the results column', async () => {
    const resultCards = await screen.getAllByTestId('result-list');
    expect(resultCards).toHaveLength(3);
  });

  test('should render correct numbers of property cards in the saved column', async () => {
    const savedCards = await screen.getAllByTestId('saved-list');
    expect(savedCards).toHaveLength(1);
  });

  test('should click Save button in the results list and display the exact property in the saved list', async () => {
    const results = within(screen.getByTestId('result-column'));
    const saved = within(screen.getByTestId('saved-column'));

    await userEvent.hover(await results.findByText('$726,500'));
    await userEvent.click(screen.getByText('Save'));
    expect(await saved.findByText('$726,500')).toBeInTheDocument();
  });

  test('should click Remove button in the saved list and the exact property disappear', async () => {
    const saved = within(screen.getByTestId('saved-column'));

    await userEvent.hover(await saved.findByText('$526,500'));
    await userEvent.click(screen.getByText('Remove'));
    expect(await saved.queryByText('$526,500')).not.toBeInTheDocument();
  });
});
