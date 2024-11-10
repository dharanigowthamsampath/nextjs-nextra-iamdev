import { Terminal } from "lucide-react";

export default {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Terminal style={{ marginRight: "8px" }} />
      <span style={{ fontWeight: "bold" }}>Docs</span>
    </div>
  ),
  project: {
    link: "https://github.com/dharanigowthamsampath",
  },
  footer: false,
  editLink: false,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  // ... other theme options
};
