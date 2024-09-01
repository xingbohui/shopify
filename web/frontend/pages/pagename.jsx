import { MediaCard } from "@shopify/polaris";
import React from "react";

export default function MediaCardExample() {
  const listData = [
    {
      title: "Earn points",
      description:
        "Set up how your customers can earn points when they interact with your brand",
      image:
        "https://shuyun.com/wp-content/uploads/2021/10/2021102812341253.png",
    },
    {
      title: "Redeem points",
      description:
        "Set up how your customers can get rewards in exchange for points",
      image:
        "https://shuyun.com/wp-content/uploads/2021/10/2021110311344682.png",
    },
    {
      title: "Referral program",
      description:
        "Broaden your clientele and elevate the awareness of your brand.",
      image:
        "https://shuyun.com/wp-content/uploads/2021/10/2021110311324954.png",
    },
    {
      title: "VIP Tiers",
      description: "Offer exclusive rewards for your most loyal customers",
      image:
        "https://shuyun.com/wp-content/uploads/2021/11/2021110412271656.png",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {listData.map((item) => {
        return (
          <div key={item.title} style={{ width: "45%" }}>
            <MediaCard
              title={item.title}
              primaryAction={{
                content: "set up",
                onAction: () => {},
              }}
              description={item.description}
              popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
            >
              <img
                alt=""
                width="80%"
                height="60%"
                style={{
                  textAlign: "center",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={item.image}
              />
            </MediaCard>
          </div>
        );
      })}
    </div>
  );
}
