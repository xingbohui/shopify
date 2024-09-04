import React, { useState, useCallback } from "react";
import {
  MediaCard,
  ChoiceList,
  EmptyState,
  VideoThumbnail,
} from "@shopify/polaris";

export default function MediaCardExample() {
  const [active, setActive] = useState(false);
  const [pointRuleInfo, setPointRuleInfo] = useState({});
  const [selected, setSelected] = useState([1, 2, 3]);
  const images = [
    "data:image/png;base64,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",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC91BMVEUAAAAKVf861bI61bIWVtk61bM61bITYvQVY+8UaP0VZ/1B1MMUUNQUaP471LIVWuY71LMVZPcUYfI51rM417N41fk61bU61bMVUNU61bNu0/VnzvEUV+AVZ/122PgTYfJixOwVYvKG3v5kzfAUVuAVYPAVaP8UYvQVXOoUU9eG3v0VX+4UU9o71LM61bKH3v0VaP861bMUX++H3f1u0vRcye071rQUXewVYfMWVuAWZ/oUY/cTZf9s0fMUYfFw0/VYxuxEvOSH3v5cyewUT9BYxutDvONeyu4yltsUTs4WX+wVX+xdyu4Vav+A3/871bNr0PNmzvFw0/Vpz/Jt0fRoz/JkzfFjzPBeyu5u0vRZx+x01fdhy+921vhbyO0UUdYUUNN41/hXxusUSsoUQ70UWuVz1PYUTtBx1PYUTMx72Plcye5VxetTxOoUR8R/2vt82foUP7dgy+8UXOgUXetRw+kUVt4URcD/wCgUWOIUQrsUPrWC3Pz/vSUUZPf/uiL/tx8UVdwUVNsUU9n/wyv/qhEUYvMUV+AUQbkUXu0UU9hPwun/owsURsL/xi2B3Px+2vsVYPAVY/UUPLGE3f0VWeP/tRwUYfH/rRQUX+4USccUSMYVPbL/sRgVScf/qA//pg1Kv+YUOqz/sxoUZvkUW+j/rxYVZvtNwecVZ/1MwOcUTM4UO6//yjEUOq6F3v4UPbP/xy9IvuX/yDAVZPhOweh51/lFveQUWeNPa6kiUsFQcbVQbq8UOavElkcUUtcgVLtAX6fEnUzTqkZBoNsvec8rZ8FtdonEmUnFkkRZuOhKuORQquMlXb1gxe1Mo947lNk3iNkxe9k5gc4cV8oaUsYZSrofSrKAf4GmkmTkqzbwvDVEqt8hZNc/j9MqbscpZMYXT8YjYcMYQrCv1K8yVq8WPKxPZZyZim6olWXvzUvvy0nxwDgkZuNBbsiUx7oyXbqQxLhebZJsd5B7foynlmW3jlLEoVDFoU/xwjrjsDrkqzXxnxhePp2hAAAAT3RSTlMABfDAmYBgQA/CqiH18e/r0LdlUEA4MODfz8aYgHgvJwbw7ujk3tjY2MjFxLKgn5mQkIqJiIhwT0g4Lysa/fDs7OzYzsjCwrixsaSheEgI4vzDwwAAB+1JREFUaN7tmFOYHEEUhTe2bdu2bSebzMZONrZt29pos7Ft27Zt4yG3q6v6dHV1z0y+PCYnj/Nl/++fU/d29fj8z//8z7+YWFnSJ5+6durUvlP7UiZM6ECZOLEjpU3HNm22tGm8pXHj+o3r13fVd7lauFq0aNWqSPwEsfD/kRiZ41WpEi9zDOWDyjnWrl3LGAwhMVgaU+pTXC4XETRGdUrdnEl9LIlNBD0hYsufJC4uGFMJ0beDhdEYHpqFq5VgVK8bP7GPlNBVkMihpY+YB0XSgEdji0crzqDUzCn9oZhVpMQ090EWwoMj4GFYcA/NgnvUrFuzZiFJJY4MieODZIGHzmAICjTgwSyYh8aoWjWBDxKqiiWh8Fl69VRNJILk4ZI86gpGzarx8XciRLZCIkcwPkxOGu5OFTTQOBFIg5ICkNxVlKB73gZBHr3YuHH8+KFDe1L69RswYCBl+vTF8+YtmzlzGGXBwoVjb7xlbdQlC0qNqoBkUyH4vqDxYvXG9QQhCjEIMoAxNAijLNAgY2+YPGrUqAFICBUSwviQt0GQ1QRxNGGQsRThUUP7VwuQ4CokMiBG46u9MRnLNLhHLfeQ4IAIBpm470RAhEctQDx9XTi53pmYPWpV87J4nFxrJwNsO2EEYhChVrVqXh5hDLl3JsxCMGqbhjG4UgmGERP40ptOfsKDGNW8XCuY8kcvPZvceC88KLVr13GzIKP6IHY712Wzc8WpwndFjDpernoiKDvXhZ2LfYjGCaB5cAgSOripEGodETt3i8edyxk1NAvmwSFI7KgOj1/1SW63c+FBBM6g+CkXiUzEiZrJepHgHhIDHti50qkixqnzFy7cvh0xYtx0GUMmzOfjPkbjYIgHOZ4dFo86py5catp6ZcuWjRo1bDh6yOBB3VOGDBPMDYQ86EZCBDOjhXqq4HHm/OX5s5s2bd3aBOneq1eU7GGdIcRgsXmSU7gGpqP2ucvt58xhkJWAjBgxbVrzKNGdbLaoNxJuwT2qYucS4+ylHuPatxcmgPTq1bx5l6Vp8ziYqI0LjZoUaGjfVJ3DzXpokDnzmxqd7NUh07YRpUvXCrYymA6LB04V2rjXu1kzW5PumsnSLl27jspg14zD/RAe2FUndhCDTBw6YSajZqUqoELqq/dc3obV49SVTr1hYttJV4JMKpxXhZg8cD9E4/C40mnkyGZqJ6ONTpYyk0kzkiWxg8gzDg9mIfrY16fTyN6eOyHI8DTWXrBz4YFdZSzdOvf6dCKIx04YZHI0C8QFD+wqeefWol11cW4fonjRySiCDO+fSIbY3nPROF/rJ+aug4nTnMBk8uT8MgSnys3OPTKXTPROHj997KETMukfXoJg5yq7imtQTk2ZIkw+vBp/c7+nTib33ySpiJ2LUyV2FRh1Tq/STEZSJ0fXrx9PFIdOYLJE6t7sId9zwTi7hpuMPKrfzW7ud5gTmCwPY4JYpoOiPsn3rVo1hXWyX1wAD+7w0MmSJeHMEHk6KLxxME4ECJNrGoRdzQ7u8NDJ8uUFARHPDnVX0QQyht+dgDVaJ0S5+n211glBiOIwJ8JkRXRAcKo0hnR34zcSvyOGSe/9r4xb5lf7OYFJeECcnuS1hUcd34cBq1aJOXnKTSjX3XeyIhKeXw7TAQ+/s7th0qzZUdYJu5Nfd9/JCpwveGBX8cZr+5FHZ7+LAdSJmBOicJN+RLHpBCYrsMCc77mkQenc+TBM2PPkKG7+12zmBCZZDQgYlpNLFoTw8+18JCBAzIm+hZ/hHeaj2glM0Ly0c1UNX1/f09wEW/gzQfg7zAGWY1r26Dl+/Bo3wTgqp4pCHoJBlKuiEzxPnjMI3ivxYslexz7pJqkBsTlV8KC0fWKY4Hny3OltjL29ftFNIgGCnVsLbcCjbdsnAWJO8IzfdxDvlYxCkGGGyXHdBBB154LhqzHaXoUJnvE7Dqom/OWVILoJvi7mYXeqOKNB232YE9MznigwQSdmExTPNBQGaXBGgwZHYGK+d+344fiu/0w3wRHGrjIzDA+i3MWcSLeV/d+kTmDy641ugmF0OlWEIAal3kWYWO5d77bz7NKzU89rPidYK+ad68c9YEGMeocwJ17fu5hJJUDgwTQURj3/hzDx8t7FTEyrnnmgDYlRT2PUa3IEc6KaOO8u00OLeUBDYrA0aXLHthOPz/jogKinCh5EIEaTk5gTj53AxHyRUE4VMXgbjEHx36fOied7l/lKZPVo69tA8vBv4u9/CHPifSdhzBB46Bbw4AzK6T/vhEQQ3QIewgKMdv7tDv35nJAIIu9caOhtUNppOf2ncyK/a0k7F23Ag9Kt3aE/nZMCMgQ7FxrwYAzK4T/rJLuPFM2DEcBgHv7wIMqYbg/+ZE6sL6asDaUO2YMYY05e8XpO1FdsZR+iDTNjTOCtkd52ov5YoEyHsCCEYFA2bw4852Unk9SfPVLIO1c+Vdxj85jAMYGBQbf2eTMnqQwPpIxl51KgITwCNxMjKOjkA09z4vBTVC51Oig4VfRNESMoMChwUdCiDXc9dVLe9ke1CL5ow/CABjwWsZy77K4T/DxoSUXLzqVIpwoeizbQv63n7zt0gh861SQtAQ8Lgx0r8ggSHhsoW08evm83J1ESog0bSi4300GMIIIwD52xYevWrYcOX4IJfnx2m1gJShVFG/J0EEHy0FOsdNmQIcuVjGv8jP4///M/f5HfzbjLsa2bjegAAAAASUVORK5CYII=",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
  ];
  const listData = [
    {
      key: 1,
      videoProgress: 45,
      title: "Earn points",
      description:
        "how your customers can earn points when they interact with your brand",
      image: images[0],
    },
    {
      key: 2,
      videoProgress: 2,
      title: "Redeem points",
      description:
        "Set up how your customers can get rewards in exchange for points",
      image: images[1],
    },
    {
      key: 3,
      videoProgress: 89,
      title: "Referral program",
      description:
        "Broaden your clientele and elevate the awareness of your brand.",
      image: images[2],
    },
    {
      key: 4,
      videoProgress: 0,
      title: "VIP Tiers",
      description: "Offer exclusive rewards for your most loyal customers",
      image: images[3],
    },
  ];
  const conents = {
    1: {
      title: "Rules for earning points",
      key: 1,
      choices: [
        {
          label: (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>1 Register and receive </span>
              <input
                style={{ width: 60, border: "1px solid #dedede" }}
                value="1000"
              />
              <span> points</span>
            </div>
          ),
          value: 1,
        },
        {
          label: (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>2 Order and receive </span>
              <input
                style={{ width: 60, border: "1px solid #dedede" }}
                value="10"
              />
              <span> points</span>
            </div>
          ),
          value: 2,
        },
        {
          label: (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>3 Follow Facebook to receive </span>
              <input
                style={{ width: 60, border: "1px solid #dedede" }}
                value="50"
              />
              <span> points</span>
            </div>
          ),
          value: 3,
        },
      ],
    },
    2: {
      title: "Redemption rules for points",
      key: 2,
      choices: [
        {
          label: (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span> 1 </span>
              <input
                style={{ width: 60, border: "1px solid #dedede" }}
                value="10000"
              />

              <span> points to redeem for free products</span>
            </div>
          ),
          value: 1,
        },
        {
          label: (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span> 2 Exchange </span>
              <input
                style={{ width: 60, border: "1px solid #dedede" }}
                value="200"
              />

              <span> points for a </span>
              <input
                style={{ width: 60, border: "1px solid #dedede" }}
                value="￥50"
              />
              <span> coupon </span>
            </div>
          ),
          value: 2,
        },
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
              <div
                key={item.title}
                style={{
                  width: "45%",
                  padding: "16px",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
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
                  <VideoThumbnail
                    videoLength={80}
                    videoProgress={item.videoProgress}
                    showVideoProgress
                    thumbnailUrl={item.image}
                    onClick={() => console.log("clicked")}
                  />
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
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                background: "#fff",
                borderRadius: "4px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
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

              <img
                style={{ width: "130px" }}
                src={images[pointRuleInfo?.key - 1]}
                alt=""
              />
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
