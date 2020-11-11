import useWindowWidth from './useWindowWidth';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useWindowWidth', () => {
  it('resizes the window', async () => {
    const { result } = renderHook(useWindowWidth);
    
    window.innerWidth = 500;
    await act(async () => await window.dispatchEvent(new Event('resize')));

    expect(result.current.windowWidth).toBe(500);

    window.innerWidth = 1200;
    await act(async () => await window.dispatchEvent(new Event('resize')));

    expect(result.current.windowWidth).toBe(1200);
  });
});