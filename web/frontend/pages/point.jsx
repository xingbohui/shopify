import React, { useState, useCallback } from "react";
import { MediaCard, ChoiceList, EmptyState } from "@shopify/polaris";

export default function MediaCardExample() {
  const [active, setActive] = useState(false);
  const [pointRuleInfo, setPointRuleInfo] = useState({});
  const [selected, setSelected] = useState([1, 2, 3]);

  const listData = [
    {
      key: 1,
      title: "Earn points",
      description:
        "Set up how your customers can earn points when they interact with your brand",
      image:
        "https://shuyun.com/wp-content/uploads/2021/10/2021102812341253.png",
    },
    {
      key: 2,
      title: "Redeem points",
      description:
        "Set up how your customers can get rewards in exchange for points",
      image:
        "https://shuyun.com/wp-content/uploads/2021/10/2021110311344682.png",
    },
    {
      key: 3,
      title: "Referral program",
      description:
        "Broaden your clientele and elevate the awareness of your brand.",
      image:
        "https://shuyun.com/wp-content/uploads/2021/10/2021110311324954.png",
    },
    {
      key: 4,
      title: "VIP Tiers",
      description: "Offer exclusive rewards for your most loyal customers",
      image:
        "https://shuyun.com/wp-content/uploads/2021/11/2021110412271656.png",
    },
  ];
  const conents = {
    1: {
      title: "Rules for earning points",
      key: 1,
      choices: [
        { label: "1 Register and receive 1000 points", value: 1 },
        { label: "2 Order and receive 10 points", value: 2 },
        {
          label: "3 Follow Facebook to receive 50 points",
          value: 3,
        },
      ],
    },
    2: {
      title: "Redemption rules for points",
      key: 2,
      choices: [
        { label: "1 10000 points to redeem for free products", value: 1 },
        { label: "2 Exchange 200 points for a ￥50 coupon", value: 2 },
      ],
    },
    3: { title: "", key: 3 },
    4: { title: "", key: 4 },
  };

  const handleChange = useCallback((value) => setSelected(value), []);

  const onAction = (item) => {
    setPointRuleInfo(conents[item.key]);
    setActive(true);
  };

  return (
    <div>
      {!active ? (
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
                    onAction: () => onAction(item),
                  }}
                  description={item.description}
                  popoverActions={[
                    {
                      content: "More",
                      // onAction: onAction,
                    },
                  ]}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
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
                  </div>
                </MediaCard>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
          }}
        >
          {[1, 2].includes(pointRuleInfo.key) && (
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
                background: "#fff",
                borderRadius: "4px",
                padding: "20px",
              }}
            >
              <ChoiceList
                allowMultiple
                title={pointRuleInfo?.title || ""}
                choices={pointRuleInfo?.choices || []}
                selected={selected}
                onChange={handleChange}
              />
              <div
                style={{
                  width: 100,
                  padding: "4px 8px",
                  background: "rgba(36, 99, 188, 1)",
                  color: "#ffF",
                  borderRadius: "4px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => setActive(false)}
              >
                Back
              </div>
            </div>
          )}
          {[3, 4].includes(pointRuleInfo.key) && (
            <div>
              <EmptyState
                heading="developing"
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                action={{ content: "Back", onAction: () => setActive(false) }}
              >
                <p>
                  More favorable rules, waiting patiently. Looking forward to it
                </p>
              </EmptyState>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
