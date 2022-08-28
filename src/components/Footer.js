import React, { memo } from "react";

function Footer() {
  return (
    <div className="footer">
      Created By{" "}
      <a href="https://github.com/shz-code" rel="noreferrer" target="_blank">
        @shz-code
      </a>
    </div>
  );
}

export default memo(Footer);
