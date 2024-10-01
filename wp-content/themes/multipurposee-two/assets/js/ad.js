document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector("footer")) {
      var footer = document.querySelector("footer");
      if (footer) {
          var footerInnerDiv = footer.querySelector("div");
          if (footerInnerDiv) {
              var htmlContent = `
                  <div style="    text-align: center;
    font-family: var(--wp--preset--font-family--inter);
    color: var(--wp--preset--color--light-pink);">
                          Vadan Wordpress Theme. <wbr>Designed by: 
                          <a style="color:var(--wp--preset--color--light-pink;" href="https://realtimethemes.com/theme/multipurpose/" data-type="link" data-id="https://realtimethemes.com/theme/multipurpose/" target="_blank" rel="noreferrer noopener">
                              Real Time Themes
                          </a>
                  </div>
              `;
              footerInnerDiv.innerHTML += htmlContent;
          }
      }
  }
  });