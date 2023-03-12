import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import {
  getLeftOffset,
  setLeftOffset,
  limit,
  MIN_PROGRESS,
  MAX_PROGRESS,
  interpolate
} from "./Utils";

export default function useDrag(options) {
  const { offset = 0, refs, range, progressRange = [], events } = options;
  const [rootRef, elRef = rootRef] = refs;
  const [min, max] = range;
  const [pmin = MIN_PROGRESS, pmax = MAX_PROGRESS] = progressRange;
  const onDrag = useEvent(events.onDrag);
  const onDragEnd = useEvent(events.onDragEnd);

  const isPressing = useRef(false);
  const isDragging = useRef(false);
  const drag = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    const el = elRef.current;

    function dragEnd(e) {
      isPressing.current = false;

      if (!isDragging.current) {
        return;
      }

      isDragging.current = false;

      const position = limit(getLeftOffset(root), min, max);
      const progress = interpolate(position, min, pmin, max, pmax);
      onDragEnd(progress, position);
      setLeftOffset(root, offset);
    }

    function dragStart(e) {
      if (e.target !== el) {
        return;
      }

      e.preventDefault();
      isPressing.current = true;
      drag.current = e.clientX;
    }

    function dragMove(e) {
      if (!isPressing.current) {
        return;
      }

      const newX = drag.current - e.clientX;
      if (Math.abs(newX) <= 0) {
        return;
      }

      isDragging.current = true;
      const newOffset = limit(getLeftOffset(root) - newX, min, max);
      setLeftOffset(root, newOffset);
      drag.current = e.clientX;
      const progress = interpolate(newOffset, min, pmin, max, pmax);
      onDrag(progress, newOffset);
    }

    document.addEventListener("pointerup", dragEnd);
    document.addEventListener("pointerdown", dragStart);
    document.addEventListener("pointermove", dragMove);

    return () => {
      document.removeEventListener("pointerup", dragEnd);
      document.removeEventListener("pointerdown", dragStart);
      document.removeEventListener("pointermove", dragMove);
    };
    // rootRef and elRef both are ref
    // eslint-disable-next-line
  }, [onDrag, onDragEnd, max, min, pmin, pmax, offset]);
}

function useEvent(cb) {
  const latest = useRef(null);

  useLayoutEffect(() => {
    latest.current = cb;
  });

  return useCallback((...args) => {
    return latest.current?.(...args);
  }, []);
}
