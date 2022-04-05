// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Added this custom mock to address error: ResizeObserver | IntersectionObserver is not defined/.
// Seems to be from a Clarity component that loads this package and Jest requires us to mock this
class MockObserver {
    observe() {
    }

    unobserve() {
    }

    disconnect() {
    }

    // IntersectionObserver
    root = null;
    rootMargin = "";
    thresholds = [];

    takeRecords() {
        return []
    }
}

window.ResizeObserver = MockObserver;
