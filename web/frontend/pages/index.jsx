import { useState, useCallback } from "react";
import { VideoThumbnail, AccountConnection, MediaCard } from "@shopify/polaris";

export default function AccountConnectionExample() {
  const [connected, setConnected] = useState(false);
  const [isShowMail, setIsShowMail] = useState(false);
  const accountName = connected ? "Function Introduction" : "";

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  const buttonText = connected ? "Disconnect" : "Connect";
  const details = connected
    ? "We will provide comprehensive management of your users, including membership levels, membership points, earning points, redeeming points for gifts, membership management, loyalty programs, page decoration, and more."
    : "welcome ";
  const terms = connected ? null : (
    <p>
      Provide the brand's online store with the ability to expand its membership
      loyalty management.
    </p>
  );

  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
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
      <div>
        <MediaCard
          title="More exciting content about Shuyun Loyalty"
          primaryAction={{
            content: "Learn more",
            onAction: () => {},
          }}
          description={`Click on the video on the left to watch a detailed tutorial, or click the button below to view more exciting content. I believe you will receive many surprises`}
          popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
        >
          <VideoThumbnail
            videoLength={80}
            thumbnailUrl="https://shuyun.com/wp-content/uploads/2021/10/2021102812311341.png"
            onClick={() => console.log("clicked")}
          />
        </MediaCard>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 10,
          right: 10,
        }}
      >
        {isShowMail && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#fff",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span style={{ fontSize: "14px",fontWeight: 600 }}>
              Is there anything I can help you with?
            </span>
            <span>Send an email to: xxxxx@xxx.com</span>
          </div>
        )}

        <img
          onClick={() => setIsShowMail(!isShowMail)}
          src="https://shuyun.com/wp-content/themes/shuyun/statics/dist/img/side_service_bar_cartoon.png"
          alt=""
        />
      </div>
    </div>
  );
}
