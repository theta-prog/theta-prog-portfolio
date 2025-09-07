import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getIcon, getMethodColor } from '@/app/components/ContactSection';
import { getCategoryColor } from '@/app/components/HobbiesSection';

// Focused branch coverage tests for helper functions

describe('Branch coverage for ContactSection and HobbiesSection helpers', () => {
  test('getMethodColor falls back to email color for unknown types', () => {
    const email = getMethodColor('email');
    expect(getMethodColor('unknown')).toBe(email);
    expect(getMethodColor('')).toBe(email);
    expect(getMethodColor('123')).toBe(email);
  });

  test('getCategoryColor falls back to others color for unknown categories', () => {
    const others = getCategoryColor('others');
    expect(getCategoryColor('unknown')).toBe(others);
    expect(getCategoryColor('')).toBe(others);
    expect(getCategoryColor('random')).toBe(others);
  });

  test('getIcon falls back to email icon element for unknown types', () => {
    const { container: cUnknown } = render(<>{getIcon('unknown')}</>);
    const { container: cEmail } = render(<>{getIcon('email')}</>);
    expect(cUnknown.innerHTML).toBe(cEmail.innerHTML);

    // Additional cases to exercise more false branches
    const { container: cEmpty } = render(<>{getIcon('')}</>);
    const { container: cRandom } = render(<>{getIcon('random')}</>);
    expect(cEmpty.innerHTML).toBe(cEmail.innerHTML);
    expect(cRandom.innerHTML).toBe(cEmail.innerHTML);
  });
});
