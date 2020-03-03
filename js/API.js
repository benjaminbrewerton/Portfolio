// Function that returns an integer random between a Minimum and Maximum (Inclusive)
function getRandBetween(min, max) {
  return Math.floor((Math.random() * (max + 1 - min))) + min;
}

// Function that returns the document's total width
function getDocumentWidth() {
    var scrollWidth = 0;
    var offsetWidth = 0;

    // Check if body element is null
    if(document.body) {
        scrollWidth = document.body["scrollWidth"];
        offsetWidth = document.body["offsetWidth"];
    }

    return Math.max(
      document.documentElement["clientWidth"],
      scrollWidth,
      document.documentElement["scrollWidth"],
      offsetWidth,
      document.documentElement["offsetWidth"]
    );
}

// Function that returns the document's total height
function getDocumentHeight() {
    var scrollHeight = 0;
    var offsetHeight = 0;

    // Check if body element is null
    if(document.body) {
        scrollHeight = document.body["scrollHeight"];
        offsetHeight = document.body["offsetHeight"];
    }

    return Math.max(
      document.documentElement["clientHeight"],
      scrollHeight,
      document.documentElement["scrollHeight"],
      offsetHeight,
      document.documentElement["offsetHeight"]
    );
}
