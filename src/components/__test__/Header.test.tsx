import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';
import { BrowserRouter as Router} from 'react-router-dom';

describe('when everything is OK', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  test('should be redirected to Homepage when users click the LOGO', async () => {
    await userEvent.click(screen.getByText(/MyProperty.com/));
    expect(window.location.href).toBe('http://localhost/home');
  });

  test('should be redirected to Homepage when users click the Home tab', async () => {
    await userEvent.click(screen.getByText(/Home/));
    expect(window.location.href).toBe('http://localhost/home');
  });

  test('should be redirected to StyleGuide page when users click the StyleGuide tab', async () => {
    await userEvent.click(screen.getByText(/Style Guide/));
    expect(window.location.href).toBe('http://localhost/styleguide');
  });
})