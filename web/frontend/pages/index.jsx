import { Link, AccountConnection } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function AccountConnectionExample() {
  const [connected, setConnected] = useState(false);
  const accountName = connected ? "Function Introduction" : "";

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  const buttonText = connected ? "Disconnect" : "Connect";
  const details = connected
    ? "We will provide comprehensive management of your users, including membership levels, membership points, earning points, redeeming points for gifts, membership management, loyalty programs, page decoration, and more."
    : "Spack";
  const terms = connected ? null : (
    <p>
      Provide the brand's online store with the ability to expand its membership
      loyalty management.
    </p>
  );

  return (
    <div style={{ padding: "24px" }}>
      <AccountConnection
        accountName={accountName}
        connected={connected}
        title="ShuYun Loyalty"
        action={{
          content: buttonText,
          onAction: handleAction,
        }}
        details={details}
        termsOfService={terms}
      />
    </div>
  );
}
