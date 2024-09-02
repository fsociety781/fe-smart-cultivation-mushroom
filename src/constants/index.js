const id = {
  name: "id",
  options: {
    months: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    days: ["Minggu", "Senin", "Selasa", "Rabu", "kamis", "Jumat", "Sabtu"],
    shortDays: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    toolbar: {
      exportToSVG: "Unduh SVG",
      exportToPNG: "Unduh PNG",
      exportToCSV: "Unduh CSV",
      menu: "Menu",
      selection: "Pilihan",
      selectionZoom: "Perbesar Pilihan",
      zoomIn: "Perbesar",
      zoomOut: "Perkecil",
      pan: "Geser",
      reset: "Atur Ulang Zoom",
    },
  },
};

// series title, value
export const APEX_SERIES = { title: "", data: [] };

// warning, info, success, danger, primary, secondary, light, dark
export const APEX_COLORS_KEY = [
  "warning",
  "info",
  "success",
  "danger",
  "primary",
  "secondary",
  "light",
  "dark",
];

export const APEX_COLORS_VALUE = {
  warning: "#ffc107",
  info: "#17a2b8",
  success: "#28a745",
  danger: "#dc3545",
  primary: "#007bff",
  secondary: "#6c757d",
  light: "#f8f9fa",
  dark: "#343a40",
};

// label xaxis (title bar)
// parse value when hover
export const APEX_OPTIONS = {
  chart: {
    type: "area",
    locales: [id],
    defaultLocale: "id",
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: [],
  fill: { colors: [] },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  xaxis: {
    type: "datetime",
    categories: [],
    labels: {
      datetimeUTC: false,
    }
  },
  tooltip: {
    x: { format: "HH:mm:ss - dd MMM" },
  },
};

export const TABLE_HISTORY_FIELD = [
  "Suhu",
  "Kelembaban",
  "Kipas",
  "Pompa",
  "Mode",
  "Waktu",
  "Tanggal",
];
