// Function that returns an integer random between a Minimum and Maximum
function getRandBetween(min, max) {
  return Math.floor((Math.random() * max) + 1);
}

// Function that returns the document's total width
function getDocumentWidth() {
  return Math.max(
      document.documentElement["clientWidth"] != null ? document.documentElement["clientWidth"] : 0,
      document.body["scrollWidth"] != null ? document.documentElement["scrollWidth"] : 0,
      document.documentElement["scrollWidth"] != null ? document.documentElement["scrollWidth"] : 0,
      document.body["offsetWidth"] != null ? document.documentElement["offsetWidth"] : 0,
      document.documentElement["offsetWidth"] != null ? document.documentElement["offsetWidth"] : 0
    );
}

// Function that returns the document's total height
function getDocumentHeight() {
  return Math.max(
      document.documentElement["clientHeight"],
      document.body["scrollHeight"],
      document.documentElement["scrollHeight"],
      document.body["offsetHeight"],
      document.documentElement["offsetHeight"]
    );
}
