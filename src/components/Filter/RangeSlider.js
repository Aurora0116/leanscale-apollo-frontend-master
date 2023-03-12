import { useCallback, useLayoutEffect, useRef } from "react";
// import "./styles.css";
import useDrag from "./useDrag";
import {
  limit,
  half,
  interpolateToProgress,
  interpolateProgress,
  getLeftOffset,
  setLeftOffset
} from "./Utils";

// config
const BAR_WIDTH = 200;
const HANDLE_SIZE = 16;
const TOOLTIP_NEGATIVE_MARGIN = 8;
const HANDLE_NEGATIVE_MARGIN = 4;
const CLOSE_ENOUGH_PIXEL_THRESHOLD = 0.5;
const MIN_LEFT_POS = -HANDLE_NEGATIVE_MARGIN;
const MAX_LEFT_POS = BAR_WIDTH + HANDLE_NEGATIVE_MARGIN - HANDLE_SIZE;

const minTooltipLeft = -TOOLTIP_NEGATIVE_MARGIN;
const maxTooltipRight = BAR_WIDTH + TOOLTIP_NEGATIVE_MARGIN;

// Credits: https://twitter.com/blvdmitry/status/1550042703576055808?s=20&t=WdFL2npmxUsm056283-tzg
export default function RangeSlider(props) {
  const { minValue, maxValue, formatValue, range, onChange } = props;
  const [start, end] = range.map((value) =>
    interpolateToProgress(value, minValue, maxValue)
  );
  const progress = useRef(null);
  const tooltip1 = useRef(null);
  const tooltip2 = useRef(null);

  const interpolateToValue = useCallback(
    (progress) => {
      return interpolateProgress(progress, minValue, maxValue);
    },
    [minValue, maxValue]
  );

  const resetTooltipPosition = useCallback(
    (t, p) => {
      t.textContent = formatValue(interpolateToValue(p));
      t.style.visibility = "visible";

      const arrowCenter =
        interpolateProgress(p, MIN_LEFT_POS, MAX_LEFT_POS) + half(HANDLE_SIZE);

      const rect = t.getBoundingClientRect();

      if (arrowCenter > maxTooltipRight - half(rect.width)) {
        moveTooltip(t, maxTooltipRight - rect.width);
      } else if (arrowCenter >= minTooltipLeft + half(rect.width)) {
        moveTooltip(t, arrowCenter - half(rect.width));
      } else {
        moveTooltip(t, minTooltipLeft);
      }
    },
    [formatValue, interpolateToValue]
  );

  const checkTooltipCollision = useCallback(
    (progresses, tooltips) => {
      const [start, end] = progresses;
      const [t1, t2] = tooltips;

      const { width: tooltip1Width } = t1.getBoundingClientRect();
      const { width: tooltip2Width } = t2.getBoundingClientRect();

      const t1LeftOffset = getLeftOffset(t1);
      const t1RightOffset = t1LeftOffset + tooltip1Width;
      const t2LeftOffset = getLeftOffset(t2);
      const t2RightOffset = t2LeftOffset + tooltip2Width;

      const deltaLeft = t2LeftOffset - t1RightOffset;
      const deltaRight = t1LeftOffset - t2RightOffset;

      if (
        // close enough
        (deltaLeft < CLOSE_ENOUGH_PIXEL_THRESHOLD && deltaLeft >= 0) ||
        (deltaRight < CLOSE_ENOUGH_PIXEL_THRESHOLD && deltaRight >= 0) ||
        // or intersect inside
        (t1RightOffset >= t2LeftOffset && t1RightOffset <= t2RightOffset) ||
        (t1RightOffset >= t2RightOffset && t1LeftOffset <= t2RightOffset)
      ) {
        // if collision happen, "merge" tooltip
        t1.style.visibility = "visible";
        t1.textContent = [
          formatValue(interpolateToValue(Math.min(start, end))),
          formatValue(interpolateToValue(Math.max(start, end)))
        ].join(" – ");
        t2.style.visibility = "hidden";

        // get rect for merged tooltip to determine
        // updated boundary
        const mergedRect = t1.getBoundingClientRect();
        const maxTooltipLeft = maxTooltipRight - mergedRect.width;

        // align center merged tooltip
        const tooltipLeft = Math.min(t1LeftOffset, t2LeftOffset);
        const tooltipRight = Math.max(t1RightOffset, t2RightOffset);
        const tooltipCenter = tooltipLeft + half(tooltipRight - tooltipLeft);
        const offsetLeft = limit(
          tooltipCenter - half(mergedRect.width),
          minTooltipLeft,
          maxTooltipLeft
        );
        moveTooltip(t1, offsetLeft);
      }
    },
    [formatValue, interpolateToValue]
  );

  useLayoutEffect(() => {
    const t1 = tooltip1.current;
    const t2 = tooltip2.current;

    resetTooltipPosition(t1, start);
    resetTooltipPosition(t2, end);
    checkTooltipCollision([start, end], [t1, t2]);
  }, [start, end, resetTooltipPosition, checkTooltipCollision]);

  const handleChange = useCallback(
    (p1, p2) => {
      onChange(
        [Math.min(p1, p2), Math.max(p1, p2)].map((progress) => {
          return Math.round(interpolateToValue(progress));
        })
      );
    },
    [onChange, interpolateToValue]
  );

  const drag1End = useCallback((progress) => handleChange(progress, end), [
    end,
    handleChange
  ]);

  const drag2End = useCallback((progress) => handleChange(start, progress), [
    start,
    handleChange
  ]);

  function drag1(currentProgress, pos) {
    updateProgressSize(
      progress.current,
      interpolateSize(Math.min(currentProgress, end)),
      interpolateSize(Math.abs(end - currentProgress))
    );
    resetTooltipPosition(tooltip1.current, currentProgress);
    resetTooltipPosition(tooltip2.current, end);
    checkTooltipCollision(
      [currentProgress, end],
      [tooltip1.current, tooltip2.current]
    );
  }

  function drag2(currentProgress, pos) {
    updateProgressSize(
      progress.current,
      interpolateSize(Math.min(currentProgress, start)),
      interpolateSize(Math.abs(start - currentProgress))
    );
    resetTooltipPosition(tooltip1.current, start);
    resetTooltipPosition(tooltip2.current, currentProgress);
    checkTooltipCollision(
      [start, currentProgress],
      [tooltip1.current, tooltip2.current]
    );
  }

  const handle1Root = useRef(null);
  const handle1El = useRef(null);
  const handle2Root = useRef(null);
  const handle2El = useRef(null);
  const offset1Left = interpolateProgress(start, MIN_LEFT_POS, MAX_LEFT_POS);
  const offset2Left = interpolateProgress(end, MIN_LEFT_POS, MAX_LEFT_POS);

  const handleRange = [MIN_LEFT_POS, MAX_LEFT_POS];
  useDrag({
    refs: [handle1Root, handle1El],
    range: handleRange,
    offset: offset1Left,
    events: {
      onDrag(currentProgress, position) {
        updateHandleStyle(handle1Root.current, position);
        drag1(currentProgress, position);
      },
      onDragEnd(currentProgress, position) {
        resetHandleStyle(handle1Root.current);
        drag1End(currentProgress, position);
      }
    }
  });
  useDrag({
    refs: [handle2Root, handle2El],
    range: handleRange,
    offset: offset2Left,
    events: {
      onDrag(currentProgress, position) {
        updateHandleStyle(handle2Root.current, position);
        drag2(currentProgress, position);
      },
      onDragEnd(currentProgress, position) {
        resetHandleStyle(handle2Root.current);
        drag2End(currentProgress, position);
      }
    }
  });

  const progressLeft = interpolateSize(start);
  const progressScale = interpolateSize(end - start) / BAR_WIDTH;

  const diff = end - start;
  useDrag({
    refs: [progress],
    range: [-BAR_WIDTH, BAR_WIDTH],
    progressRange: [-100, 100],
    offset: progressLeft,
    events: {
      onDrag(currentProgress, pos) {
        const endHandleProgress = currentProgress + diff;
        const handlePosition = interpolateProgress(
          currentProgress,
          MIN_LEFT_POS,
          MAX_LEFT_POS
        );
        const endHandlePosition = interpolateProgress(
          endHandleProgress,
          MIN_LEFT_POS,
          MAX_LEFT_POS
        );

        updateProgressSize(
          progress.current,
          handlePosition,
          endHandlePosition - handlePosition
        );

        updateHandleStyle(handle1Root.current, handlePosition);
        resetTooltipPosition(tooltip1.current, currentProgress);

        updateHandleStyle(handle2Root.current, endHandlePosition);
        resetTooltipPosition(tooltip2.current, endHandleProgress);

        checkTooltipCollision(
          [currentProgress, endHandleProgress],
          [tooltip1.current, tooltip2.current]
        );
      },
      onDragEnd(currentProgress) {
        resetHandleStyle(handle1Root.current);
        resetHandleStyle(handle2Root.current);
        if (currentProgress < 0) {
          handleChange(0, currentProgress + diff);
        } else {
          handleChange(currentProgress, currentProgress + diff);
        }
      }
    }
  });

  return (
    <div className="bar" style={{ width: BAR_WIDTH }}>
      <div
        ref={progress}
        className="progress"
        data-offset={progressLeft}
        style={{
          transform: `translateX(${progressLeft}px) scaleX(${progressScale})`
        }}
      />
      <div className="tooltip" ref={tooltip1} />
      <div className="tooltip" ref={tooltip2} />
      <div
        className="handle-root"
        data-offset={offset1Left}
        style={{
          "--handle-size": HANDLE_SIZE + "px",
          transform: `translateX(${offset1Left}px)`
        }}
        ref={handle1Root}
      >
        <div ref={handle1El} className="handle" />
      </div>
      <div
        className="handle-root"
        data-offset={offset2Left}
        style={{
          "--handle-size": HANDLE_SIZE + "px",
          transform: `translateX(${offset2Left}px)`
        }}
        ref={handle2Root}
      >
        <div ref={handle2El} className="handle" />
      </div>
    </div>
  );
}

function interpolateSize(p) {
  return interpolateProgress(p, 0, BAR_WIDTH);
}

function moveTooltip(t, offset) {
  setLeftOffset(t, offset);
  t.style.transform = `translateX(${offset}px)`;
}

function updateProgressSize(el, offsetLeft, width) {
  const scale = width / BAR_WIDTH;
  el.style.transform = `translateX(${offsetLeft}px) scaleX(${scale})`;
}

function resetHandleStyle(el) {
  el.style.zIndex = "auto";
  el.style.filter = null;
}

function updateHandleStyle(el, position) {
  el.style.zIndex = 1;
  el.style.filter = "brightness(0.8)";
  el.style.transform = `translateX(${position}px)`;
}
