import { useEffect, useRef } from "react";

// Type for multiple refs support
type RefType = React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[];

interface UseClickOutsideOptions {
  listenForKeyboard?: boolean; // Listen for keyboard events like Escape
  eventType?: "mousedown" | "mouseup" | "click"; // Event type for click detection
  debounceTime?: number; // Time in ms to debounce the click events
}

export function useClickOutside(
  refs: RefType,
  callback: (isOutside: boolean, event: MouseEvent | KeyboardEvent) => void,
  options: UseClickOutsideOptions = {}
) {
  const {
    listenForKeyboard = false,
    eventType = "mousedown",
    debounceTime = 0,
  } = options;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Updated type

  // Check if clicked outside any of the refs
  const isClickOutside = (event: MouseEvent | KeyboardEvent) => {
    if (Array.isArray(refs)) {
      return refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      );
    }
    return refs.current && !refs.current.contains(event.target as Node);
  };

  const handleEvent = (event: MouseEvent | KeyboardEvent) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (debounceTime) {
      timeoutRef.current = setTimeout(() => {
        const outside = isClickOutside(event);
        callback(outside, event);
      }, debounceTime);
    } else {
      const outside = isClickOutside(event);
      callback(outside, event);
    }
  };

  // Handle keyboard events like Escape key
  const handleKeyboardEvent = (event: KeyboardEvent) => {
    if (event.key === "Escape" && listenForKeyboard) {
      callback(true, event); // Treat as a click outside
    }
  };

  useEffect(() => {
    // Attach event listeners
    document.addEventListener(eventType, handleEvent);

    // If listening for keyboard events
    if (listenForKeyboard) {
      document.addEventListener("keydown", handleKeyboardEvent);
    }

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener(eventType, handleEvent);
      if (listenForKeyboard) {
        document.removeEventListener("keydown", handleKeyboardEvent);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [refs, eventType, listenForKeyboard, debounceTime]);

  return { handleEvent };
}

export default useClickOutside;
