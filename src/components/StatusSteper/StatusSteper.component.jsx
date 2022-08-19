import React from "react";

import {
  StatusSizeVariants,
  StatusVariants,
} from "../../constants/VariantsOfComponents";
import { Status } from "../Status";

export const StatusSteperComponent = ({ active }) => {
  const StatusState = (index) => {
    if (index < active.index) {
      return "big-status done";
    }
    if (index === active.index) {
      return "big-status active";
    }
    if (index > active.index) {
      if (active.refunded || active.partial) {
        return "big-status next none";
      }
      return "big-status next";
    }
  };

  const SelectStatusVariant = (index) => {
    switch (index) {
      case 0:
        if (active.index === index && active.refunded) {
          return StatusVariants.refunded;
        }
        if (active.index === index && active.partial) {
          return StatusVariants.partial;
        }
        return StatusVariants.pending;

      case 1:
        if (active.index === index && active.refunded) {
          return StatusVariants.refunded;
        }
        if (active.index === index && active.partial) {
          return StatusVariants.partial;
        }
        return StatusVariants.processing;

      case 2:
        if (active.index === index && active.refunded) {
          return StatusVariants.refunded;
        }
        if (active.index === index && active.partial) {
          return StatusVariants.partial;
        }
        return StatusVariants["in-progress"];

      case 3:
        if (active.index === index && active.refunded) {
          return StatusVariants.refunded;
        }
        if (active.index === index && active.partial) {
          return StatusVariants.partial;
        }
        return StatusVariants.completed;
    }
  };

  const SelectStatusText = (index) => {
    switch (index) {
      case 0:
        if (active.index === index && active.refunded) {
          return "Refunded";
        }
        if (active.index === index && active.partial) {
          return "Partial";
        }
        return "Pending";

      case 1:
        if (active.index === index && active.refunded) {
          return "Refunded";
        }
        if (active.index === index && active.partial) {
          return "Partial";
        }
        return "Processing";

      case 2:
        if (active.index === index && active.refunded) {
          return "Refunded";
        }
        if (active.index === index && active.partial) {
          return "Partial";
        }
        return "In-progress";

      case 3:
        if (active.index === index && active.refunded) {
          return "Refunded";
        }
        if (active.index === index && active.partial) {
          return "Partial";
        }
        return "Completed";
    }
  };

  return (
    <div className="statuses">
      <Status
        className={StatusState(0)}
        variant={SelectStatusVariant(0)}
        status={SelectStatusText(0)}
        size={StatusSizeVariants.big}
      />
      <Status
        className={StatusState(1)}
        variant={SelectStatusVariant(1)}
        status={SelectStatusText(1)}
        size={StatusSizeVariants.big}
      />
      <Status
        className={StatusState(2)}
        variant={SelectStatusVariant(2)}
        status={SelectStatusText(2)}
        size={StatusSizeVariants.big}
      />
      <Status
        className={StatusState(3)}
        variant={SelectStatusVariant(3)}
        status={SelectStatusText(3)}
        size={StatusSizeVariants.big}
      />
    </div>
  );
};

StatusSteperComponent.displayName = "StatusSteper";
