import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";
import { useIsMobile } from "../../hooks/use-mobile";

// Mocking window.matchMedia if not available
if (!window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  });
}

describe("useIsMobile", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeAll(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });

  function createMatchMedia(width: number) {
    return jest.fn().mockImplementation((query) => ({
      matches: width < 768,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
  }

  it("should return true when window.innerWidth is less than 768", () => {
    window.innerWidth = 500;
    window.matchMedia = createMatchMedia(window.innerWidth);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("should return false when window.innerWidth is greater than or equal to 768", () => {
    window.innerWidth = 800;
    window.matchMedia = createMatchMedia(window.innerWidth);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should update on resize event", () => {
    let listener: (() => void) | undefined;
    const addEventListenerMock = jest.fn((event, cb) => {
      listener = cb;
    });
    const removeEventListenerMock = jest.fn();

    window.innerWidth = 800;
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: window.innerWidth < 768,
      media: query,
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
    }));

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      window.innerWidth = 500;
      if (listener) listener();
    });
    expect(result.current).toBe(true);
  });
});
