export const parseDate = (val) => {
  return Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(
    new Date(val)
  );
};

export const parseTime = (val) => {
  return Intl.DateTimeFormat("id-ID", { timeStyle: "medium" }).format(
    new Date(val)
  );
};

export const parseStatusBadge = (val) => {
  return val === "ON" ? "success" : "danger";
};
